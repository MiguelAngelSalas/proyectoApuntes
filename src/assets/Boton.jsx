export default function Boton({className, texto, onClick}){
    return <button className={className} onClick={onClick}>{texto}</button>
}