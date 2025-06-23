// Componente que recebe uma lista de itens por props
function OutraLista({ itens }) {
  return (
    <>
      {/* Título fixo da seção */}
      <h3>Lista de coisas boas:</h3>

      {/* Condicional ternária para verificar se há itens na lista */}
      {itens.length > 0 ? (
        // Se houver itens, renderiza cada um com map
        itens.map((item, index) => (
          // Cada item vira um parágrafo com uma key única baseada no índice
          <p key={index}>{item}</p>
        ))
      ) : (
        // Se a lista estiver vazia, mostra uma mensagem alternativa
        <p>Não há itens na lista!</p>
      )}
    </>
  );
}

// Exporta o componente para ser usado em outros arquivos
export default OutraLista;
