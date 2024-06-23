import { TDisplay } from "../Types";
import './Display.css'

const Display = ({display}: TDisplay) => {
    return <div className="Display">
        {display}
    </div>
}

export default Display;