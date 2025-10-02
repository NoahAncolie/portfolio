import { Rinceau } from "../../../assets/svg/rinceau.";
import { Focus } from "../../focus";
import { useState } from "react";
import scarabe from "../../../assets/images/histoire_art/egypte/scarabe.png"

const Limiter = () => (
    <div className="limiter">
        <Rinceau/>
    </div>
);

export const ArtEgyptien = () => {
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

            <img src={scarabe} alt="scarabe" className="image-fond" />

            <h1 className="histoire-art-cours-title">Les Caractéristiques de <i>l’Art Égyptien</i><br />de -4000 à -480</h1>
            <Focus Content={""} />
            <div className="cours-content">
                <Focus content={focusState}/>

                <div id="historique" className="partie-cours">
                    <h2>Historique</h2>
                    <Limiter/>

                    <p><i>L’art égyptien s’étend de <b>4 000 à 480</b> avant Jésus-Christ.</i></p>
                    <br />
                    <p>L’histoire de la civilisation égyptienne est la plus ancienne que nous connaissions <b>(4 000 ans à 5 000 ans av. J.-C.)</b>.</p>
                    <br />
                    <p>Elle a été très brillante, et les vestiges qu’elle nous a laissés sont remarquables, notamment pour l’étude de l’art. Son évolution est très lente au cours du temps.</p>
                    <br />
                    <p>
                        Les pharaons (souverains égyptiens) se firent construire des tombeaux : des <b>pyramides</b> pour les plus puissants, ou des <b>mastabas</b>, monuments funéraires de l’Égypte antique en forme de trapèze.
                        Chronologiquement, ils sont les premiers à apparaître (les mastabas). Ils sont <b>utilisés par les pharaons</b>, mais <b>aussi par les nobles</b>. La taille du monument reflète la position sociale du défunt.
                    </p>
                </div>

                <div id="caracteristiques" className="partie-cours">
                    <h2>Les caractéristiques</h2>
                    <Limiter/>
                    <p>
                        Les constructions sont très souvent colossales, car elles doivent évoquer l’éternité grâce aux effets de masse et aux lignes sobres et géométriques : pyramides, obélisques, temples aux colonnes trapues, avec des chapiteaux souvent lotiforme ou campaniformes supportant un entablement et une toiture en terrasse.
                        <b>C’est un art à caractère religieux.</b>
                        <br />
                        L’homme a un double, qui survit après la mort, mais seulement si le corps est bien conservé. On pratique donc la momification, et la dépouille du défunt est cachée dans les lieux cités précédemment.
                    </p>
                    <br />
                    <p>
                        Dans leur architecture, les Égyptiens utilisaient le calcaire et le granit.
                    </p>
                    <br />
                    <p>
                        Pour la sculpture, ils travaillaient le granit, le porphyre et le calcaire, souvent rehaussé de peinture et de bois :
                    </p>
                    <ul>
                        <li><b>Granit</b> : roche formée principalement de quartz</li>
                        <li><b>Porphyre</b> : roche volcanique constituée de cristaux rouges ou verts ; • Calcaire : roche formée essentiellement de carbonate de calcium.</li>
                    </ul>
                    <p>La terre cuite et le bronze étaient utilisés principalement pour fabriquer des statuettes. L’or et les pierres précieuses servaient à faire des bijoux.</p>
                </div>

                <div id="decorations" className="partie-cours">
                    <h2>Éléments de décoration</h2>
                    <Limiter/>
                </div>

                <div id="animaux" className="partie-cours">
                    <h2>Les animaux dans l’Égypte antique</h2>
                    <Limiter/>
                </div>

                <div id="chapiteaux" className="partie-cours">
                    <h2>Les chapiteaux</h2>
                    <Limiter/>
                </div>

                <div id="mobilier" className="partie-cours">
                    <h2>Le mobilier égyptien</h2>
                    <Limiter/>
                </div>

                <div id="peinture" className="partie-cours">
                    <h2>La peinture dans l’Égypte ancienne</h2>
                    <Limiter/>
                </div>

                <div id="platrerie" className="partie-cours">
                    <h2>La plâtrerie dans l’Égypte ancienne</h2>
                    <Limiter/>
                </div>

            </div>
        </div>
    );
};