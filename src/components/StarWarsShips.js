import {Link} from 'react-router-dom'

export default function StarWarsShips(props) {
    const shipDetails = props.starships.map(shipItem => {
        return(
            <button className='ship-list'>
                <Link to={{
                    pathname: '/starships',
                    state: shipItem,
                }}>{shipItem.name}</Link>
            </button>
        )
    })

    return(
        <div className="container">
            {shipDetails}
        </div>
    )
}