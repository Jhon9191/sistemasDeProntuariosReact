import React, {
    useContext
} from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs'
import styles from './styles.css';
import { AuthContext } from '../../context/auth'

const Paginator = () => {

    const { page, list, nextPage, previusPage } = useContext(AuthContext);

    return (
        <div style={{ justifyContent: 'center', width: '100%', display: 'flex', flexDirection: 'row' }}>
            <div className="paginator">
                {page === 1 ? (
                    <BsFillCaretLeftFill size={25} color="#F2F3FA" />
                ) :
                    <div onClick={() => previusPage()}>
                        <BsFillCaretLeftFill size={25} color="#860638" />
                    </div>
                }
                <spam>{page}</spam>
                {page === (Math.ceil(list.length / 3)) ? (
                    <BsFillCaretRightFill size={25} color="#F2F3FA" />
                ) :
                    <div onClick={() => nextPage()}>
                        <BsFillCaretRightFill size={25} color="#860638" />
                    </div>
                }
            </div>
        </div>
    )
}

export default Paginator;