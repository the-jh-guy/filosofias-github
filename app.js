function pesquisar() {
  // Seleciona a seção HTML com o ID "resultados-pesquisa"
  // Essa seção será usada para exibir os resultados da pesquisa
  let section = document.getElementById("resultados-pesquisa");
  
  let campoPesquisa = document.getElementById("campo-pesquisa").value

  if (!campoPesquisa || campoPesquisa == " ") {
    section.innerHTML = "<p>O campo está vazio, tal como o valor da vida em sua totalidade...</p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
    // Para cada dado, cria um elemento HTML com as informações do dado
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      // Se titulo inclui campoPesquisa, então:
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Concatena a string 'resultados' com o HTML de um item de resultado
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais conteúdo</a>
        </div>
        `;
      }
    }
    if (!resultados) {
      // Atribui o conteúdo HTML gerado à seção selecionada
      // Isso substitui o conteúdo anterior da seção
      section.innerHTML = "<p>Não há resultados para sua pesquisa, assim como na sua vida profissional.</p>";
      return
    }

    section.innerHTML = resultados;
}



