import Item from './Item'

function List(){
    return(
        // Por meio do Fragment, não preciso escrever a div parseInt, isto é, nomeá-la para os "filhos"
        <>   
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari"/>
                <Item marca="Fiat"/>
            </ul>
        </>

    )
}

export default List