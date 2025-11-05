import "./CardCriatura.css"

export default function CardCriatura(){
    return(
        <div className="card-container">
            <img className="card-imagem" src="https://i0.wp.com/newronio.wpengine.com/wp-content/uploads/2019/03/medusa1.jpg?resize=640%2C670&ssl=1" alt="imagem"></img>
            <h3>Nome do bicho</h3>
            <p>periculosidade</p>
            <p>descricao</p>
            <small>mitologia</small>
        </div>
    )
}