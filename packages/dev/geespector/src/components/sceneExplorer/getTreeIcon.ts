import {
    faAddressBook,
    faBone, faBraille, faBrush,
    faCamera,
    faCodeBranch,
    faCube, faFilm,
    faGhost, faImage, faLayerGroup, faLightbulb, faMagic, faMusic, faObjectGroup, faProjectDiagram,
    faSkull, faSun
} from "@fortawesome/free-solid-svg-icons";

export const getTreeIcon = (entity: any) => {
    if (entity && entity.getClassName) {
        const className = entity.getClassName();

        if (className.indexOf("Mesh") !== -1) {
            return ({icon: faCube, color: 'dodgerblue'})
        }

        if (className.indexOf("SpriteManager") !== -1) {
            return ({icon: faAddressBook, color: "blanchedalmond"});
        }

        if (className.indexOf("Sprite") !== -1) {
            return ({icon: faGhost, color: "blanchedalmond"})
        }

        if (className.indexOf("Skeleton") !== -1) {
            return ({icon: faSkull, color: "gray"})
        }

        if (className.indexOf("Bone") !== -1) {
            return ({icon: faBone, color: "lightgray"})
        }

        if (className.indexOf("TransformNode") !== -1) {
            return ({icon: faCodeBranch, color: "cornflowerblue"})
        }

        if (className.indexOf("Camera") !== -1) {
            return ({icon: faCamera, color: "green"});
        }

        if (className.indexOf("Light", className.length - 5) !== -1) {
            return ({icon: faLightbulb, color: "yellow"})
        }

        if (className.indexOf("Material") !== -1) {
            return ({icon: faBrush, color: "orange"})
        }

        if (className.indexOf("ParticleSystem") !== -1) {
            return ({icon: faBraille, color: "crimson"})
        }

        if (className === "AdvancedDynamicTexture") {
            return ({icon: faImage, color: "mediumpurple"});
        }

        if (className === "AnimationGroup") {
            return ({icon: faLayerGroup, color: "cornflowerblue"});
        }

        if (className === "TargetedAnimation") {
            return ({icon: faFilm, color: "cornflowerblue"});
        }

        if (className.indexOf("Texture") !== -1) {
            return ({icon: faImage, color: "mediumpurple"})
        }

        if (className.indexOf("RenderingPipeline") !== -1) {
            return ({icon: faMagic, color: "orangered"});
        }

        if (className.indexOf("PostProcess") !== -1) {
            return ({icon: faMagic, color: "red"})
        }

        if (className.indexOf("Layer") !== -1) {
            return ({icon: faSun, color: "Plum"});
        }

        if (className.indexOf("Sound") !== -1) {
            return ({icon: faMusic, color: "teal"});
        }

        if (entity._host) {
            return {icon: faObjectGroup, color: "greenyellow"};
        }
    }
    return ({icon: faProjectDiagram, color: "cornflowerblue"})
}