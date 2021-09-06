import { FiUser, FiChevronRight, FiChevronLeft} from 'react-icons/fi'

const CardPsicologos = ({ item }) => {
    return (
        <div className="cardPsicologos" style={{backgroundColor: 
            item.id % 2 == 1 ? '#860638' : '#AA0948'
            }} key={item.id}>
                <div style={{ flexDirection: 'row', display: 'flex'}}>
                    <FiUser size={70} color="#fff" />
                    <div>
                        <h2>Nome: {item.name}</h2>
                        <h4>Especialidade: {item.especialidade}</h4>
                    </div>
                </div>
            </div>
    )
}

export default CardPsicologos