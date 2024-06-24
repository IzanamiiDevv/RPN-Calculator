import { TButton } from "../Types";

const Button = ({ setToken, token, type }: TButton) => {
    return <div className={"Button " + type} onClick={()=>{
        setToken(token);
    }}>
        
    </div>
};

export default Button;