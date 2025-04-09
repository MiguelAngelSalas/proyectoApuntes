export default function BotonNav({onClick, className, texto}){
    return <button onClick={onClick} className={className}>{texto}</button>
}