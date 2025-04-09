export default function Login({className}){
    return <div className={className}>
        <label htmlFor="user">Usuario</label><br />
        <input type="text" name="user" id="user"/><br />
        <label htmlFor="password">Contraseña</label><br />
        <input type="password" name="password" id="password"/>
    </div>
}