import { TDisplay } from "../Types";

const Display = ({display}: TDisplay) => {
    return <div className="window">
        <div className="result">
            <input className="readout" readOnly disabled value={"Test"} />
            <input className="placehold" readOnly disabled placeholder="888888888888888" />
        </div>
        <div className="plane"></div>
    </div>
}

export default Display;