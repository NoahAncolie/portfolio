import { Rinceau } from "../../../assets/svg/rinceau.";
import { Focus } from "../../focus";
import { useState } from "react";

const Limiter = () => (
    <div className="limiter">
        <Rinceau/>
    </div>
);

export const StyleRestauration = () => {
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

            <h1 className="histoire-art-cours-title">Le <i>Style Restauration</i></h1>
            <Focus Content={""} />
            <div className="cours-content">
                <Focus content={focusState}/>

                <div id="historique" className="partie-cours">
                    <h2>Historique</h2>
                    <Limiter/>
                </div>

                <div id="architecture" className="partie-cours">
                    <h2>Architecture</h2>
                    <Limiter/>
                </div>

                <div id="interieur" className="partie-cours">
                    <h2>Architecture d'intérieur</h2>
                    <Limiter/>
                </div>

                <div id="decorations" className="partie-cours">
                    <h2>Éléments décoratifs</h2>
                    <Limiter/>
                </div>

                <div id="mobilier" className="partie-cours">
                    <h2>Mobilier</h2>
                    <Limiter/>
                </div>

                <div id="sieges" className="partie-cours">
                    <h2>Sièges</h2>
                    <Limiter/>
                </div>

                <div id="artistes" className="partie-cours">
                    <h2>Artistes</h2>
                    <Limiter/>
                </div>
            </div>
        </div>
    );
};
