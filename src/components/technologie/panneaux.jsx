import { Link } from "react-router-dom"
import "../../assets/css/technologie.scss"

const Panneaux = () => {
    return (
        <div className="page_layer technologie">
            <h1 className="page_title">Panneaux</h1>
            <div class="grid-container">
                <div className="card-1">
                    <h2>medium</h2>
                </div>
                <div className="card-2">
                    <h2>contre-plaqué</h2>
                </div>
                <div className="card-3">
                    <h2>aggloméré</h2>
                </div>
                <div className="card-4">
                    <h2>mélaminé</h2>
                </div>
                <div className="card-5">
                    <h2>osb</h2>
                </div>
            </div>
            <div className="arrows">
                <button className="arrow-left">
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 10L8 14L6 14L-2.62268e-07 8L6 2L8 2L8 6L16 6L16 10L8 10Z" />
                    </svg>
                </button>
                <button className="arrow-right">
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 6L8 2L10 2L16 8L10 14L8 14L8 10L-1.74845e-07 10L-3.01991e-07 6L8 6Z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Panneaux
