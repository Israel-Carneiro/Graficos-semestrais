# Grafico Semestral

Demonstração de diferentes gráficos que exemplificam maneiras distintas de se representar dados. De acordo com a importância das informações, há maneiras mais interessantes de serem apresentadas, que podem tornar sua compreenção mais simples pelo publico.

## Demonstração

Dê uma olhada nos modelos de gráficos apresentados no projeto. Acesse o link para o deploy para melhor visualização

 <a href="" target="_blank"><img src="https://img.shields.io/badge/deploy-Formul%C3%A1rio-008000" rel="Deploy badge" /><a><br><br>

<div align="center">
  <img width="50%" src="imagem do resultado/screenshoot-graficos-semestrais-chartjs.png" alt="Designe da página de gráficos" />
</div>

## Objetivo

O projeto simula o registro de dados de vendas durante o período de um semestre em uma campanha fictícia.

Para apresentação do resultado final desses dados há dois **Gráficos Donuts** acompanhados por suas legendas, demonstrando uma porcentagem da meta alcansada por duas equipes distintas.<br>
O acompanhamento dos resultados ao longo do semestre está representado pelo **Framework Chart.js**, dividido em periodos de semanas.

## Principais Ferramentas utilizadas

 - **Gráficos Donuts:** São na verdade elementos svg feitos em HTML5 com sua animação e alguns outros aspectos feitos em CSS3. Apesar de ter um visual sofisticado e animado, seu objetivo de trazer apenas os resultados finais demonstra uma característica estática e imutável, por este motivo sua construção foi possivel sem utilização de ferramentas em JavaScript (também foi um desafio interessante pela falta do JavaScript).
 - **Framework Chart.js:** Este sim é um grafico que trás muitas informações e interação. Seus itens em sua legenda superior são selecionaveis, possibilitando mostrar/esconder os resultados separadamente ao longo do semestre. Se o gráfico anterior dispensava o JavaScript, este pode dispensar o CSS, o que demostra uma grande autonomia de cada uma dessas linguagens para construção de elementos visuais.
