const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]
for(let f in filmes) {
  let string
  string = `${filmes[f].titulo} de ${filmes[f].ano} dirigido por ${filmes[f].diretor} tem no elenco ${filmes[f].elenco} `
   for(let atriz of filmes){
    string += `${atriz}`
    // console.log(`Tem no elenco: ${filmes[i].elenco}`)
  }
  console.log(string)
}





// escreva seu código abaixo 👇🏻
// const resultado1 = []
// const resultado2 = []
// const resultado3 = []
// const resultado4 = []

// const megaSena = [
//   [1, 2, 3, 4, 5, 6],
//   [11, 22, 33, 44, 55, 66],
//   [10, 20, 30, 40, 50, 60],
//   [9, 19, 29, 39, 49, 59],
// ]


// exercicio 2 e 3 
// if(megaSena.length === 4){
//   for(let i in megaSena){ //percorre o array pai // i => key => string
//     let sorteio = `sorteio ${Number (i) + 1}: ` 
//     for(let j of megaSena[i]){//percorre o array filho
//       sorteio += `${[j]} `
//     }
//     console.log(sorteio)
//   }

// }else{
//   console.log('É necessário alterar o numero de itens do array')
// }


// exercicio 01
// if(megaSena.length === 4){
//   for(let i = 0; i <megaSena.length; i++){ //percorre o array pai
//     let sorteio = `sorteio ${i + 1}:`
//     for(let j = 0; j < megaSena[i].length;j++){//percorre o array filho
//       sorteio += `${megaSena[i][j]} `
//     }
//     console.log(sorteio)
//   }

// }else{
//   console.log('É necessário alterar o numero de itens do array')
// }