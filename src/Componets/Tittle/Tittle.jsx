import PropTypes from 'prop-types'

export default function Tittle(props){
    return <h1>{props.titulo}</h1>
}

Tittle.propTypes = {
    titulo: PropTypes.string.isRequired
}