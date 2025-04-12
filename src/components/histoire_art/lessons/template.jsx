import { Rinceau } from "../../../assets/svg/rinceau."
import { Focus } from "../../focus"
import { useState } from "react"

const Limiter = () => {
    return (
        <div className="limiter">
            <Rinceau/>
        </div>
    )
}

export const Template = () => {

    // <span className="tooltip" onMouseOver={() => {setFocus(<><FocusImg src={} alt="" /><h3></h3><i></i>texte</>)}}></span>
    
    const [focusState, setFocus] = useState(<></>)
    const [zoomState, setZoom] = useState(false)
    const [zoomSrc, setSrc] = useState("")

    const FocusImg = ({src, alt}) => {
        return (
            <img className="tooltip-img" src={src} alt={alt} onMouseDown={() => {setSrc(src); setZoom(true);}} />
        )
    }


    return (
        <div className="histoire-art-cours">
            {zoomState ? <div className="big-img">
                <div className="close" onMouseDown={() => {setZoom(false)}}>X</div>
                <img src={zoomSrc} />
            </div> : <></>}
            
            <h1 className="histoire-art-cours-title">La <i>Renaissance Française</i> du XVᵉ au XVIᵉ siècle</h1>
            <Focus Content={""} />
            <div className="cours-content">
                <Focus content={focusState}/>

                <div id="historique">

                </div>

                <div className="generaux">
                    <h2> Généraux </h2>
                    <Limiter/>
                </div>

                <div id="architecture" className="partie-cours">
                    <h2>Architecture</h2>
                    <Limiter/>
                </div>

                <div id="decorations" className="partie-cours">
                    <h2>Éléments de décoration</h2>
                    <Limiter/>
                </div>

                <div id="mobilier" className="partie-cours">
                    <h2>Mobilier</h2>
                    <Limiter/>
                </div>
                
            </div> 
        </div>
    )
}
