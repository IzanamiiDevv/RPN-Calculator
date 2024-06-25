import { TDisplay } from "../Types";

const Display = ({display}: TDisplay) => {
    return <div className="window">
        <div className="result">
            <input className="readout" readOnly disabled value={display} />
        </div>
        <div className="plane"></div>
    </div>
}

export default Display;