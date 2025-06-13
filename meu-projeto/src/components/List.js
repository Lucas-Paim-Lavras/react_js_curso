import Item from './Item'

function List(){
    return(
        // Por meio do Fragment, não preciso escrever a div parseInt, isto é, nomeá-la para os "filhos"
        <>   
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Fiat" ano_lancamento={1964}/>
                <Item marca="Renault"/>
                <Item marca="Chevrolet" ano_lancamento={1999}/>
                <Item />
                {/* Com a defaultProps, se eu não passar marca e ano_lancamento o defaultProps escreve aquiloq que eu passei pra ele */}
            </ul>
        </>

    )
}

export default List