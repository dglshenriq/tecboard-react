import './lista-suspensa.estilos.css'

export function ListaSuspensa () {
    return(
        <select id="tipoEvento" name="tipoEvento" className="lista-suspensa-form">
                    <option value="">Selecione uma opção</option>
                    <option value="presencial">Presencial</option>
                    <option value="online">Online</option>
                    <option value="hibrido">Híbrido</option>
                  </select>
    )
}