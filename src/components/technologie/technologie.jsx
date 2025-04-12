import { Link } from "react-router-dom"
import "../../assets/css/technologie.scss"
import panneauPageLink from "../../assets/images/technologie/panneaux/page-link.jpg"
import machinesPageLink from "../../assets/images/technologie/machines/page-link.jpg"

const Technologie = () => {
    return (
        <div className="page_layer technologie">
            <h1 className="page_title">Technologie</h1>
            <div class="grid-container">
                <div>
                    <img src={panneauPageLink} alt="differents panneaux de differentes épaisseurs" className="page-link-img"/>
                    <h2>Panneaux</h2>
                    <Link to="/technologie/panneaux"></Link>
                </div>
                <div>
                <img src={machinesPageLink} alt="altendorf" className="page-link-img"/>
                    <h2>Machines</h2>
                    <Link to="/technologie/machines"></Link>
                </div>
            </div> 
        </div>
    )
}

export default Technologie
