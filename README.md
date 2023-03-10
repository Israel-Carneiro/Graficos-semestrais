# Grafico Semestral

 Demonstração de diferentes gráficos que exemplificam maneiras distintas de se representar dados. De acordo com a importância das informações, há maneiras mais interessantes de serem apresentadas, que podem tornam a compreenção mais simples pelo publico.

## Demonstração

 Dê uma olhada nos modelos de gráficos apresentados no projeto. Acesse o link para o deploy para melhor visualização

 <a href="" target="_blank"><img src="https://img.shields.io/badge/deploy-Formul%C3%A1rio-008000" rel="Deploy badge" /><a><br><br>

<div align="center">
  <img width="50%" src="imagem do resultado/screenshoot-graficos-semestrais-chartjs.png" alt="Designe da página de gráficos" />
</div>

## Objetivo

 O projeto simula o registro de dados de vendas durante o período de um semestre em uma campanha fictícia.

 >Para apresentação do resultado final desses dados há dois **Gráficos Donuts** acompanhados por suas legendas, demonstrando uma porcentagem da meta alcansada por duas equipes distintas.
 
 >O acompanhamento dos resultados ao longo do semestre está representado pelo **Framework Chart.js**, dividido em periodos de semanas e com legendas para distinguir equipes (Equipe M = Azul; Equipe C = vermelho; Equipe Suplente = preto) e o total das vendas (verde).

## Principais Ferramentas utilizadas

 - **Gráficos Donuts:** São na verdade elementos svg feitos em HTML5 com sua animação e alguns outros aspectos feitos em CSS3. Apesar de ter um visual sofisticado e animado, seu objetivo de trazer apenas os resultados finais demonstra uma característica estática e imutável, por este motivo sua construção foi possivel sem utilização de ferramentas em JavaScript (também foi um desafio interessante pela falta do JavaScript).
 - **Framework Chart.js:** Este sim é um grafico que trás muitas informações e interação. Seus itens em sua legenda superior são selecionaveis, possibilitando mostrar/esconder os resultados separadamente ao longo do semestre. Se o gráfico anterior dispensava o JavaScript, este pode dispensar o CSS, o que demostra uma grande autonomia de cada uma dessas linguagens para construção de elementos visuais.

 ## Aprendizados
 
 Os modelos de gráficos tem grande importância na tradução de informações por formas praticas e intuitivas. Pela forma que lidam com vários dados e formas geométricas eu fiquei impressionado por descobrir que não seria necessário utilizar o JavaScript para construção do chamado Gráfico Donut, e também não precisaria usar o CSS para construção do gráfico de progresso, o ChartJS.

 
 >Com o aprendizado que tive para desenvolver o gráfico **Gráfico Donut**, eu pude perceber como é grande o controle do CSS sobre diferentes formas gráficas e geometricas que podem ser facilmente mescladas e apresentadas!
 Basicamente o Donut é composto por duas circunferências de interior transparente, uma cinza ao fundo representando 100% da circunferência e outra á frente da primeira que recebe as definições (<defs>) com o gradiente linear das cores escolhidas para representar a porcentágem que o gráfico tem a intenção de demonstrar.

 >Após uma conversa entre colegas sobre algumas opções de gráficos construidos a partir do JavaScript, a descoberta do **Framework ChartJS** caiu como uma luva para o meu projeto. Para minha surpresa este framework é bem simples de usar, com uma documentação bem definita e super funcional!
 Há muitas formas de se usar o framework, podendo construir graficos de barra, linear, formato de pizza, áreas de formas geométricas, inclusive é possivel mesclar alguns formatos. Tudo isso dispensando a ajda do CSS de maneira muito prática e rápida de se desenvolver.

## Referência

Como mencionei no ultimo parágrafo do tópico **Aprendizados**, as soluções que encontrei foram sujestões de colegas da comunidade Code, Marcellus Caio e Gabriela Cantarini, a quem eu agradesço muito pela ajuda:
