import CardCriatura from "../card-criatura/CardCriatura"
import "./Bestiario.css"
export default function Bestiario(){
    return(
        <div className="bestiario-container">
            <div className="header-container">
                <div className="gliphos">
                    sadasdasdgasnaslkdjhasdkhasdkjhaslkdhaskldhkashdklahsdklashdklajkhagsakdjgaskjdgaskdaskjdgsajkhdsakjhkjsghdkjhagsdkjgaskdjhgaskjdhgajdgajkdgajkdgajkdgkjhlahwhdljkasdsaasdasasdasasddkljnkbb35jkbkbsajdbklajuwdbkljsabdiuwabdikbs
                </div>
                <div className="titulo-header">
                    <h1>Bestiário</h1>
                    <p>A melhor enciclopédia de criaturas lendárias e fantásticas</p>
                </div>
            </div>
            <div className="cards-container">
                <CardCriatura />
            </div>
        </div>
    )
}