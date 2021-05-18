import React, { 
    useContext
    } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { AuthContext } from '../../context/auth'

const Paginator = () => {

    const { page, list, nextPage, previusPage } = useContext(AuthContext);

    return (
        <div className="paginator" style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: "100%"
        }}>
            {page === 1 ? (<></>) : 
            <button onClick={() => previusPage()}>
                <FiChevronLeft size={25} color="#860638" />
            </button>
            }
            <spam>{page}</spam>
            {page === (Math.round(list.length/3)) ? (<></>) : 
            <button onClick={() => nextPage()}>
                <FiChevronRight size={25} color="#860638" />
            </button>
            }
        </div>
    )
}

export default Paginator;