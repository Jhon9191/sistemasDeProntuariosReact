import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

const Paginator = () => {
    return (
        <div className="paginator" style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: "100%"
        }}>
            <button onClick={() => { }}>
                <FiChevronLeft size={25} color="#860638" />
            </button>
            <spam>1</spam>
            <button onClick={() => { }}>
                <FiChevronRight size={25} color="#860638" />
            </button>
        </div>
    )
}

export default Paginator;