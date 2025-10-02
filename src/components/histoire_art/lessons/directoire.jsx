import { Rinceau } from "../../../assets/svg/rinceau."
import { Focus } from "../../focus"
import { useState } from "react"
import priseBastille from "../../../assets/images/histoire_art/Prise_de_la_Bastille.jpg"
import convention from "../../../assets/images/histoire_art/convention.jpg"
import audienceDirectoire from "../../../assets/images/histoire_art/audience-directoire.jpg"
import consulat from "../../../assets/images/histoire_art/consulat.png"
import meridienneJacob from "../../../assets/images/histoire_art/meridienne-jacob.jpg"

const Limiter = () => {
    return (
        <div className="limiter">
            <Rinceau/>
        </div>
    )
}

export const Directoire = () => {
    
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
            
            <h1 className="histoire-art-cours-title">Le <i>Style Directoire</i> de 1789 à 1804</h1>
            <Focus Content={""} />
            <div className="cours-content">
                <Focus content={focusState}/>

                <div id="historique">
                    <p>
                    Le style Directoire se situe à la fin du XVIIIe siècle, de 1789 à 1804. Il est composé de plusieurs périodes :
                    </p>
                    <ul>
                        <li>période <span className="tooltip" onMouseOver={() => {setFocus(<><FocusImg src={priseBastille} alt="Dessin aquarellé de Jean-Pierre Houël, Paris de la prise de la Bastille" /><h2>Révolution française</h2><h2>Période de l'histoire de France et de ses colonies, du 5 mai 1789 au 9 novembre 1799</h2><p>La Révolution française est une période de bouleversements politiques et sociaux en France et dans ses colonies, ainsi qu'en Europe à la fin du XVIIIᵉ siècle. Traditionnellement, on la fait commencer à l'ouverture des États généraux le 5 mai 1789 et finir au coup d'État de Napoléon Bonaparte le 9 novembre 1799. En ce qui concerne l'histoire de France, elle met fin à l'Ancien Régime, notamment à la monarchie absolue remplacée par la monarchie constitutionnelle, puis par la Première République.</p></>)}}>Révolutionnaire</span></li>
                        <li>période de la <span className="tooltip" onMouseOver={() => {setFocus(<><FocusImg src={convention} alt="Image du décret de la convention Nationale" /><h2>Convention Nartionale</h2><h2>Régime politique français qui gouverne la France du 21 septembre 1792 au 26 octobre 1795</h2><p>La Convention nationale est une assemblée constituante élue en septembre 1792, au cours de la Révolution française, à la suite de la chute de Louis XVI le 10 août 1792 et de l'échec de la monarchie constitutionnelle. Cette assemblée, qui succède à l'Assemblée législative, est élue pour la première fois en France au suffrage universel masculin, et est destinée à élaborer une nouvelle constitution.</p> </>)}}>Convention</span></li>
                        <li>période du <span className="tooltip" onMouseOver={() => {setFocus(<><FocusImg src={audienceDirectoire} alt="Audience du Directoire en costume, le 30 brumaire an IV." /><h2>Directoire</h2><h2>Régime politique français en place durant la Première République de 1795 à 1799</h2><p>Le Directoire est un régime politique français de type directorial en place durant la Première République, du 4 brumaire an IV au 18 brumaire an VIII. Il tire son nom du « directoire » c'est-à-dire l'ensemble des cinq directeurs, chefs du gouvernement entre lesquels le pouvoir exécutif et les ministres sont répartis, pour éviter la tyrannie, et dont le siège est au palais du Luxembourg. Mis en place à la fin de la Terreur par les républicains modérés de la Convention thermidorienne, le régime — inspiré par une bourgeoisie enrichie par la spéculation sur les biens nationaux et les assignats — rétablit le suffrage censitaire, qui sert à élire les deux chambres législatives, le Conseil des Cinq-Cents et le Conseil des Anciens</p></>)}}>Directoire</span></li>
                        <li>période du <span className="tooltip" onMouseOver={() => {setFocus(<><FocusImg src={consulat} alt="Les trois consuls : Cambacérès, Bonaparte, Lebrun recevant les serments des présidents. Installation du Conseil d'État au palais du Petit-Luxembourg, le 25 décembre 1799 par Auguste Couder." /><h2>Consulat</h2><h2>Régime politique en France, du 9 novembre 1799 au 18 mai 1804</h2><p><i>Les trois consuls : Cambacérès, Bonaparte, Lebrun recevant les serments des présidents. Installation du Conseil d'État au palais du Petit-Luxembourg, le 25 décembre 1799 par Auguste Couder.</i><br />Le Consulat est un régime politique de la France depuis le coup d'État du 18 Brumaire jusqu'à la proclamation du Premier Empire le 18 mai 1804 par Napoléon Bonaparte. La Constitution de l'an VIII établit alors un régime autoritaire dirigé, en théorie, par trois consuls. Il est en réalité dirigé par le Premier consul, Napoléon Bonaparte, qui deviendra consul à vie en 1802. Le Consulat fait suite au régime du Directoire et dure jusqu'à la fin de la Première République.</p></>)}}>Consulat</span></li>
                    </ul>
                </div>

                <div className="generaux">
                    <h2> Généraux </h2>
                    <Limiter/>
                    <p>
                        En <i>1791</i>, les corporations sont supprimés et n'importe quel citoyen peut s'établir en tant que fabricant et vendre de ses fabrications.
                        <br/>
                        Le style <i>Directoire</i> est un style transitoire qui reste encore très Louis XVI plus qu'Empire. Il est <b>profondément marqué par le goût de l'Antique.</b>
                    </p>
                </div>

                <div id="architecture" className="partie-cours">
                    <h2>Architecture</h2>
                    <Limiter/>
                    <p>
                        La période Directoire ne voit s'élever que <i>peu</i> d'édifices et ceux-ci sont extrêmements austère.
                        <br/>
                        On utilisera par exemple <i>les ornements Louis XVI</i>, comme le médaillon ovale qui se transformera en <b>médaillon rond</b>.
                    </p>    
                    <p>
                        La décoration intérieure est simple et légère.
                        Les fouilles faites à Pompeï restent la source principale d'inspiration.
                        Les panneaux ne comportent qu'un seul motif central : médaillon rond, octogone ou hexagone allongé, etc.
                        Les tons employés sont inspirés des fresques pompéiennes : brun, rouge, rouge cramoisi, etc.
                        Les couleurs criardes sont très appréciées du public.
                    </p>
                </div>

                <div id="decorations" className="partie-cours">
                    <h2>Éléments de décoration</h2>
                    <Limiter/>
                    <p>
                        Les formes géométriques, lignes droites, courbes pures sont les seules admises. On rencontre :
                    </p>
                    <ul>
                        <li>le losange</li>
                        <li>la palmette</li>
                        <li>les emblèmes révolutionnaires</li>
                        <li>des motifs égyptien (Sphinx et Griffons)</li>
                        <li>les bronzes dorés sont utilisés (plaques striées)</li>
                        <li>les ornements moulurés (méplats, congés, etc.), sculptés sont sobres et élégants.</li>
                    </ul>
                </div>

                <div id="mobilier" className="partie-cours">
                    <h2>Mobilier</h2>
                    <Limiter/>
                    <p>
                        Les meubles de grandes dimensions et de luxe sont rares. La marqueterie disparaît, l'incrustation est réutilisée.
                        En règle générale les meubles sont exécutés en bois massif, les principaux bois utilisés sont :
                    </p>
                    <ul>
                        <li>l’Orme</li>
                        <li>le Noyer</li>
                        <li>le Hêtre</li>
                        <li>les bois fruitiers</li>
                    </ul>
                    <div className="titus-thermes">
                        <img className="image-centre" src={meridienneJacob} alt="Mérdienne des frères Jacob" /> 
                        <p className="img-subtitle center-text"><i>Méridienne en Acajou</i> réalisation des frères Jacob</p>
                    </div>
                    <p>
                        Pour les meubles de luxe on utilise l’Acajou massif ou plaqué, avec incrustation d’Ébène, de Citronnier, de Nacre, de cuivre...
                        <b>C'est le début de l'industrialisation (machine à vapeur).</b>
                    </p>
                </div>

                <div id="artistes" className="partie-cours">
                    <h2>Artistes</h2>
                    <Limiter/>
                    <h2>Les menuisiers ébénistes</h2>
                    <ul>
                        <li>Les frères Jacob</li>
                        <li>Pierre Antoine Bellangé</li>
                    </ul>
                    <br />
                    <h2>Les Menuisiers</h2>
                    <ul>
                        <li>Jean Baptiste Demay</li>
                    </ul>
                    <br />
                    <h2>Les Ébenistes</h2>
                    <ul>
                        <li>Bernard Molitor</li>
                        <li>Joseph Stockel</li>
                        <li>Adam Weisweiler</li>
                        <li>Guillaume Benneman</li>
                        <li>Charles Joseph Lemarchand</li>
                        <li>Famille Mansion</li>
                    </ul>
                </div>

                <div id="conclusion" className="partie-cours">
                    <h2>Conclusion</h2>
                    <Limiter/>
                    <p>
                        Avec la chute de la monarchie s'achève l'épopée unique et prestigieuse du mobilier français du XVIIIe siècle. La source n'est pas tarie, elle va renaître bientôt sous une lumière différente, celle de l'Empire.
                        <br /><br />
                        Pour l'instant, artistes et artisans cherchent leur voie. Une période de mutation commence, et va durer une dizaine d'années.
                        <br /><br />
                        Pas plus que la mort d'un souverain, la Révolution ne met fin à un style que pour en créer un autre. Aucune mutation brutale ne se produit dans l'évolution artistique du pays. Si rupture il y a, c'est celle de l'économie. Pour les artisans en meuble, privés de leurs clientèles aristocratiques, la crise se révèle souvent dramatique.
                        <br /><br />
                        La France sort de la tourmente le 9 Thermidor de l'An II (27 juillet 1794). La mort de Robespierre marque la fin de la Terreur. Comme une traînée de poudre, un souffle de liberté se propage à travers le pays. Issue de l'ancien régime mais rarement de l'aristocratie encore en exil, la société nouvelle prend son avenir en main en même temps que celui de la nation. Elle occupe souvent les anciens hôtels bâtis et meublés sous Louis XV et Louis XVI. À son tour, elle passe commande mais les temps sont durs, et les commandes modestes : pratiquement pas de constructions nouvelles, mais des réaménagements intérieurs et quelques meubles.
                    </p>
                </div>
                
            </div> 
        </div>
    )
}
