import { Rinceau } from "../../../assets/svg/rinceau.";
import { Focus } from "../../focus";
import { useState } from "react";

const Limiter = () => (
    <div className="limiter">
        <Rinceau/>
    </div>
);

export const ArtGrec = () => {
    const [focusState, setFocus] = useState(<></>);
    const [zoomState, setZoom] = useState(false);
    const [zoomSrc, setSrc] = useState("");

    const FocusImg = ({src, alt}) => (
        <img className="tooltip-img" src={src} alt={alt} onMouseDown={() => { setSrc(src); setZoom(true); }} />
    );

    return (
        <div className="histoire-art-cours">
            {zoomState && <div className="big-img">
                <div className="close" onMouseDown={() => setZoom(false)}>X</div>
                <img src={zoomSrc} />
            </div>}

            <h1 className="histoire-art-cours-title">Les <i>Caractéristiques de l’Art Grec</i></h1>
            <Focus Content={""} />
            <div className="cours-content">
                <Focus content={focusState}/>

                <div id="caracteres-generaux" className="partie-cours">
                    <h2>Caractères généraux</h2>
                    <Limiter/>
                </div>

                <div id="architecture" className="partie-cours">
                    <h2>Architecture grecque</h2>
                    <Limiter/>
                </div>

                <div id="ordres" className="partie-cours">
                    <h2>Les ordres grecs</h2>
                    <Limiter/>
                </div>

                <div id="mobilier" className="partie-cours">
                    <h2>Le mobilier grec</h2>
                    <Limiter/>
                </div>

                <div id="sculpture" className="partie-cours">
                    <h2>La sculpture grecque</h2>
                    <Limiter/>
                </div>

                <div id="decorations" className="partie-cours">
                    <h2>Éléments de décoration</h2>
                    <Limiter/>
                </div>

            </div>
        </div>
    );
};