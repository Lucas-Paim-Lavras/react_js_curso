import PropTypes from 'prop-types'   //pacote pronto que já vem com o react

function Item({marca, ano_lancamento}){      //usamos aqui o structure pra não ter que usar o props.marca 
    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.propTypes = {       //defino algumas propriedades de validação para as entradas que serão dadas às props
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number, 
}

Item.defaultProps = {        //a default props vai ser útil para o caso dos argumntos que trouxemos para so props, não sejam preenchidos
    marca: 'Faltou a Marca',
    ano_lancamento: 0,
}
export default Item