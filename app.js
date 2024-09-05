function pesquisar() {
    // Seleciona a seção HTML com o ID "resultados-pesquisa"
    // Essa seção será usada para exibir os resultados da pesquisa
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
    // Para cada dado, cria um elemento HTML com as informações do dado
    for (let dado of dados) {
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
  
    // Atribui o conteúdo HTML gerado à seção selecionada
    // Isso substitui o conteúdo anterior da seção
    section.innerHTML = resultados;
  }



