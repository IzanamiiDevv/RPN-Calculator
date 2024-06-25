import { TButton } from "../Types";

const Button = ({ setToken, token, type }: TButton) => {
    return <button className={type} onClick={() => {}}>
        <div className="">token</div>
    </button>
};

export default Button;