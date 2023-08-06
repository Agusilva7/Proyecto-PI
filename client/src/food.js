const dietas=[
    [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    [ 'gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan' ],
    [ 'lacto ovo vegetarian' ],
    [ 'gluten free', 'dairy free' ],
    [
      'gluten free',
      'dairy free',
      'paleolithic',
      'lacto ovo vegetarian',
      'primal',
      'vegan'
    ]
]

const dietasNoRepetidas=[]

for (let i =0 ;i<dietas.length;i++){
    dietas[i].forEach((dieta)=>{
        if (!dietasNoRepetidas.includes(dieta)){
            dietasNoRepetidas.push(dieta)
        }
    })
}
console.log(dietasNoRepetidas)