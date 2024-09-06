function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        // Cria um novo elemento HTML para cada resultado
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">Doença: ${dado.nome}</a>
                </h2>
                <p class="descricao-meta"><h3>Outros nomes:</h3> ${dado.outrosNomes}</p>
                <p class="descricao-meta"><h3>Agente(s) etiológico(s):</h3> ${dado.agentesEtiologicos}</p>
                <p class="descricao-meta"><h3>Tipo de agente:</h3> ${dado.tipoAgente}</p>
                <p class="descricao-meta"><h3>Sobre a doença:</h3> ${dado.descricao}</p>
                <p class="descricao-meta"><h3>Incubação:</h3> ${dado.periodoIncubacao}</p>
                <p class="descricao-meta"><h3>Transmissão:</h3> ${dado.transmissao}</p>
                <p class="descricao-meta"><h3>Hospedeiro(s) definitivo(s):</h3> ${dado.definitivo}</p>
                <p class="descricao-meta"><h3>Hospedeiro(s) Intermediário(s):</h3> ${dado.intermediario}</p>
                <p class="descricao-meta"><h3>Reservatório(s):</h3> ${dado.reservatorio}</p>
                <p class="descricao-meta"><h3>Sinais e sintomas:</h3> ${dado.sintomas}</p>
                <p class="descricao-meta"><h3>Tratamento:</h3> ${dado.tratamento}</p>
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

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
