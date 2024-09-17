import styles from './Card.module.css'
import Carne from '../../assets/Carne.svg'
import Sacola from '../../assets/Sacola.svg'
import PropTypes from 'prop-types'

export default function Card(props){
    return(
        <div className={styles.container}>
            <div className={styles.divMae}>
                <img src={Carne} alt="" />
                <div className={styles.divTextos}>
                    <div className={styles.nomeProd}>{props.nomeProd}</div>
                    <div className={styles.descricao}>{props.descricao}</div>
                    <div className={styles.preco}>R${props.preco}</div>
                </div>
            </div>
            <button className={styles.buttonSacola}>
                <img src={Sacola} alt="" />
            </button>
        </div>
    )
}

Card.propTypes = {
    nomeProd: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    preco: PropTypes.string.isRequired
}