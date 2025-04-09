import BotonNav from "./BotonNav"
export default function NavHeader({className}){
    return <nav className={className}>
        <BotonNav className={"botonNav"} texto={"Inicio"}/>
        <BotonNav className={"botonNav"} texto={"Usuario"}/>
        <BotonNav className={"botonNav"} texto={"Busqueda"}/>
        <BotonNav className={"botonNav"} texto={"Contacto"}/>
    </nav>
}