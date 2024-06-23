import { Result } from "../Types";

class Token {
    public type: string;
    public value: string;
    constructor(type: string, value: string) {
        this.type = type;
        this.value = value;
    }
}

type Tokens = Token[];
type TokensRPN = Token[];
type Expression = string;

function fixExpression(exp: string): Expression {
    const tokens:string[] = [];
    let temp: string = "";
    for(let i = 0; i < exp.length; i++) {
        if(exp[i] == ' ')
            continue;

        if(!isNaN(parseInt(exp[i]))) {
            temp += exp[i];
            continue;
        }
        
        if(temp != '')
            tokens.push(temp);
        tokens.push(exp[i]);
        temp = "";
    }    

    console.log(tokens);
    return tokens.join('');
}

function tokenize(expression: Expression): Tokens {
    const tokens: Tokens = [];
    let currentToken: string = "";

    for (const c of expression) {
        if (/\s/.test(c)) {
            continue;
        } else if (/\d/.test(c)) {
            currentToken += c;
        } else {
            if (currentToken.length > 0) {
                tokens.push(new Token("Digit", currentToken));
                currentToken = "";
            }

            switch (c) {
                case '(':
                    tokens.push(new Token("LeftParen", c));
                    break;
                case ')':
                    tokens.push(new Token("RightParen", c));
                    break;
                case '+':
                case '-':
                case '*':
                case '/':
                    tokens.push(new Token("Operator", c));
                    break;
                default:
                    console.error(`Invalid character: ${c}`);
            }
        }
    }

    if (currentToken.length > 0) {
        tokens.push(new Token("Digit", currentToken));
    }

    return tokens;
}

function infixToRPN(tokens: Tokens): TokensRPN {
    const output: TokensRPN = [];
    const operators: any = [];

    for (const token of tokens) {
        switch (token.type) {
            case "Digit":
                output.push(token);
                break;
            case "Operator":
                while (operators.length > 0 && operators[operators.length - 1].type === "Operator") {
                    output.push(operators.pop());
                }
                operators.push(token);
                break;
            case "LeftParen":
                operators.push(token);
                break;
            case "RightParen":
                while (operators.length > 0 && operators[operators.length - 1].type !== "LeftParen") {
                    output.push(operators.pop());
                }
                operators.pop();
                break;
        }
    }

    while (operators.length > 0) {
        output.push(operators.pop());
    }

    return output;
}

function evaluateRPN(tokens: TokensRPN): number | string {
    const stack: number[] = [];

    for (const token of tokens) {
        switch (token.type) {
            case "Digit":
                stack.push(parseFloat(token.value));
                break;
            case "Operator":
                if (stack.length < 2) {
                    return "Insufficient operands for operator";
                }
                const b: number = stack.pop() ?? 0;
                const a: number = stack.pop() ?? 0;
                switch (token.value) {
                    case "+":
                        stack.push(a + b);
                        break;
                    case "-":
                        stack.push(a - b);
                        break;
                    case "*":
                        stack.push(a * b);
                        break;
                    case "/":
                        if (b === 0) {
                            return "Division by zero";
                        }
                        stack.push(a / b);
                        break;
                    default:
                        return `Invalid operator: ${token.value}`;
                }
                break;
            default:
                return "Invalid token";
        }
    }

    if (stack.length !== 1) {
        return "Invalid expression";
    }

    return stack[0];
}

function Evaluate(expression: string): Result {
    const fixed_expression: Expression = fixExpression(expression);
    const tokens: Tokens = tokenize(fixed_expression);
    const tokens_rpn: TokensRPN = infixToRPN(tokens);
    let result: Result = evaluateRPN(tokens_rpn);
    return result;
}

export default Evaluate;