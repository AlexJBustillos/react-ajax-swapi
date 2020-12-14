
import { Link } from 'react-router-dom'

export default function StarshipInfo(props) {
    return(
        <div className="shipInfo">
            <h3>NAME: {props.shipInfo.location.state.name}</h3>
            <br/>
            <h3>MODEL: {props.shipInfo.location.state.model}</h3>
            <br/>
            <br/>
            <Link to="/">Return</Link>
        </div>
    )
}