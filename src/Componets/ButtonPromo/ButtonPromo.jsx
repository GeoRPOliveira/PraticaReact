import styles from './ButtonPromo.module.css'
import PropTypes from 'prop-types'

export default function ButtonPromo(props){
    return(
        <div className={styles.container}>
            <p className={styles.tittle}>{props.titulo}</p>
        </div>
    )
}

ButtonPromo.propTypes = {
    titulo: PropTypes.string.isRequired
}
