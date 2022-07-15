// Carrega os dados das viagens
let viagens = [
  {
    "texto": 'Ixe, isso é muito pouco. Aumente seu orçamento... Só em Chapecó (SC) Bolsonaro gastou R$ 487 mil',
    "limiteInferior": 0
  },
  {
    "texto": 'Opa! Agora você já consegue ir para Chapecó (SC). Em junho de 2021 Bolsonaro gastou R$ 487 mil',
    "limiteInferior": 487000
  },
  {
    "texto": 'Parabéns! Agora você já consegue ir para Guarujá (SP). Em finados de 2020 Bolsonaro gastou R$ 580 mil',
    "limiteInferior": 580000
  },
  {
    "texto": 'Alou! Você pode comprar uma viagem mais top para o Guarujá (SP). Em janeiro de 2020, Bolsonaro gastou R$ 600 mil por lá',
    "limiteInferior": 600000
  },
  {
    "texto": 'Money, honey! Que tal o Marajó (PA)? Em outubro de 2020 Bolsonaro gastou R$ 616 mil para ir à ilha',
    "limiteInferior": 616000
  },
  {
    "texto": 'Guarujá (SP) de novo! Em uma viagem ainda mais cara, Bolsonaro gastou R$ 670 mil no Carnaval de 2020 na praia',
    "limiteInferior": 670000
  },
  {
    "texto": 'É o Guarujá de novo - e mais caro! De 8 a 12 de outubro de 2021 Bolsonaro gastou R$ 760 mil na praia',
    "limiteInferior": 760000
  },
  {
    "texto": 'Bora para São Gabriel da Cachoeira (AM) inauguarar uma ponte?! No segundo semestre de 2020, Bolsonaro gastou R$ 770 mil na viagem',
    "limiteInferior": 770000
  },
  {
    "texto": 'Com esse valor, Bolsonaro passou o Reveillon de 2020 em São Francisco do Sul (SC)',
    "limiteInferior": 798000
  },
  {
    "texto": 'Carnaval! Você pode ir para São Francisco do Sul (SC). Bolsonaro gastou R$ 814 mil no feriado por lá',
    "limiteInferior": 814000
  },
  {
    "texto": 'É o Guarujá, mas por R$ 934 mil. No fim de 2021 Bolsonaro gastou essa quantia para ir para a praia',
    "limiteInferior": 934000
  },
  {
    "texto": 'Bora para o sudeste Asiático? Em outubro de 2019 Bolsonaro gastou R$ 1,2 milhão nessa viagem',
    "limiteInferior": 1200000
  },
  {
    "texto": 'Uau! Você pode fazer a viagem mais cara do presidente. Ele passou o Reveillon de 2020 no Guarujá (SP) por R$ 1,36 milhão',
    "limiteInferior": 1360000
  }
]

// Inverter a ordem
viagens.reverse()
// Seleciona <input>
let entrada = document.querySelector( 'input' )
// Seleciona  <output>
let saida = document.querySelector( 'output' )
// Dispara a função validar ao digitar
entrada.addEventListener( 'input', validar )
// Função de validação
function validar() {
  // Pega a ditigação
  let valor = entrada.value 
  // Força para número inteiro
  valor = parseInt( valor )
  // Se valor for maior que 0
  if ( valor > 0 ) {
    calcular( valor )
  }
  // Se não for um valor válido
  else {
    limpar()
  }
}

// Define função que encontra faixa de gastos de viagens
function calcular( valor ) {
  // Para cada faixa de gasto
  for ( let viagem of viagens ) {
    // Se valor for maior que limite inferior
    if ( valor > viagem.limiteInferior ) {
      // Mostro a categoria atual
      let texto = viagem.texto
      mostrar( texto )
      // Paro de checar
      break
    }    
  }   
}

// Define função que mostra a resposta na tela
function mostrar( texto ) {
  saida.textContent = texto
}

// Define função que limpa o valor  antigo
function limpar() {
  saida.textContent = 'Coloque o valor'
}