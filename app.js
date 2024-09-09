function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar uma doença ou agente.</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = ""; 
    let outros = "";
    let agentes = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        outros = dado.outros.toLowerCase()
        agentes = dado.agentes.toLowerCase()
        // se titulo includes campoPesquisa
        if (nome.includes(campoPesquisa) || outros.includes(campoPesquisa) || agentes.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
            
            <font color="red">
            <b>
            Observe que pode haver múltiplas respostas para sua busca, role até o fim para se certificar que viu todos os resultados.
            </font>
            </b>
            
            <p>
                <h2>
                    <a href="#" target="_blank">Doença: ${dado.nome}, ${dado.outros}</a>
                </h2>
                
                <p class="descricao-meta"><h3>Agente(s) etiológico(s):</h3> ${dado.agentes} - (${dado.tipoAgente})</p>
                <p class="descricao-meta"><h3>Sobre a doença:</h3> ${dado.descricao}</p>
                <p class="descricao-meta"><h3>Principais sinais e sintomas:</h3> ${dado.sintomas}</p>
                
                <p class="descricao-meta"><h3>Sazonalidade e distribuição geográfica:</h3> ${dado.sazonalidade} - ${dado.distribuicaoGeografica}.</p>
                <p class="descricao-meta"><h3>Principais grupos de risco:</h3> ${dado.gruposRisco}</p>
                <p class="descricao-meta"><h3>Transmissão:</h3> ${dado.transmissao}. Tempo de incubação: ${dado.periodoIncubacao}</p>
                
                <p class="descricao-meta"><h3>Hospedeiros:</h3> Hospedeiros definitivos: ${dado.definitivo} / Hospedeiros intermediários: </h3> ${dado.intermediario}</p>
                <p class="descricao-meta"><h3>Reservatórios: </h3> ${dado.reservatorio}</p>
                
                <p class="descricao-meta"><h3>Tratamento:</h3> ${dado.tratamento}. Resistência ao tratamento: ${dado.resistencia}.</p>
                <p class="descricao-meta"><h3>Prevenção:</h3> ${dado.prevencao}</p>

<p><h3>Mais Informações acesse:</h3>
<ul style="list-style-type: circle; list-style-position: outside;">
    <li><p><a href="https://bvsms.saude.gov.br/" target="_blank">Biblioteca Virtual em Saúde (BVS)</a></li></p>
    <li><p><a href="https://www.cdc.gov/" target="_blank">Centro de Prevenção e Controle de Doenças americano (CDC)</a></li></p>
    <li><p><a href="https://www.who.int/" target="_blank">Organização Mundial da Saúde (WHO)</a></li></p>
    <li><p><a href="https://www.paho.org/pt/brasil" target="_blank">Organização Panamericana da Saúde (OPAS)</a></li></p>
    
</ul>    
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado no nosso banco de dados</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}




function mostrarAleatorio() {
    // Obtém a lista de dados
    let dados = getDados();
  
    // Gera um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * dados.length);
  
    // Seleciona doença aleatória
    let doencaSorte = dados[indiceAleatorio];
  
    // Exibe a doença na seção de resultados
    let section = document.getElementById("resultados-pesquisa");
    section.innerHTML = `

      <div class="item-resultado">
                
                <h2>
                    <a href="#" target="_blank">Doença: ${doencaSorte.nome}, ${doencaSorte.outros}</a>
                </h2>
                
                <p class="descricao-meta"><h3>Agente(s) etiológico(s):</h3> ${doencaSorte.agentes} - (${doencaSorte.tipoAgente})</p>
                <p class="descricao-meta"><h3>Sobre a doença:</h3> ${doencaSorte.descricao}</p>
                <p class="descricao-meta"><h3>Principais sinais e sintomas:</h3> ${doencaSorte.sintomas}</p>
                
                <p class="descricao-meta"><h3>Sazonalidade e distribuição geográfica:</h3> ${doencaSorte.sazonalidade} - ${doencaSorte.distribuicaoGeografica}.</p>
                <p class="descricao-meta"><h3>Principais grupos de risco:</h3> ${doencaSorte.gruposRisco}</p>
                <p class="descricao-meta"><h3>Transmissão:</h3> ${doencaSorte.transmissao}. Tempo de incubação: ${doencaSorte.periodoIncubacao}</p>
                
                <p class="descricao-meta"><h3>Hospedeiros:</h3> Hospedeiros definitivos: ${doencaSorte.definitivo} / Hospedeiros intermediários: </h3> ${doencaSorte.intermediario}</p>
                <p class="descricao-meta"><h3>Reservatórios: </h3> ${doencaSorte.reservatorio}</p>
                
                <p class="descricao-meta"><h3>Tratamento:</h3> ${doencaSorte.tratamento}. Resistência ao tratamento: ${doencaSorte.resistencia}.</p>
                <p class="descricao-meta"><h3>Prevenção:</h3> ${doencaSorte.prevencao}</p>

<p><h3>Mais Informações acesse:</h3>
<ul style="list-style-type: circle; list-style-position: outside;">
    <li><p><a href="https://bvsms.saude.gov.br/" target="_blank">Biblioteca Virtual em Saúde (BVS)</a></li></p>
    <li><p><a href="https://www.cdc.gov/" target="_blank">Centro de Prevenção e Controle de Doenças americano (CDC)</a></li></p>
    <li><p><a href="https://www.who.int/" target="_blank">Organização Mundial da Saúde (WHO)</a></li></p>
    <li><p><a href="https://www.paho.org/pt/brasil" target="_blank">Organização Panamericana da Saúde (OPAS)</a></li></p>
    
</ul>    
            </div>
    `;
  }
  
  function getDados() {
    return dados;
  }