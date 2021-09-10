
//const numero = 7897

/*console.log(milharN)
//console.log(resto)
console.log(centenaN)
//console.log(resto)
console.log(dezenaN)
//console.log(resto)
console.log(unidadeN)
//console.log(resto)*/

function nPosicional(n){
    let unidadeN = 0, dezenaN = 0, centenaN = 0, milharN = 0, resto = 0, posicional = []


    if(n-(n % 1000) !== 0){
        milharN = (n-(n % 1000))
        resto = n - milharN

    }else{
        resto = n - milharN
    }

    if(resto-(resto%100) !==0){
        centenaN = resto-(resto%100)
        resto = n - centenaN - milharN

    }else{
        resto = n - centenaN - milharN
    }

    if(resto-(resto % 10) !==0){
        dezenaN = resto-(resto % 10)
        resto = n - centenaN - milharN - dezenaN
        unidadeN = resto

    }else{
        resto = n - centenaN - milharN - dezenaN
        unidadeN = resto
    }
    posicional[0] = unidadeN
    posicional[1] = dezenaN / 10
    posicional[2] = centenaN / 100
    posicional[3] = milharN / 1000
    return posicional
}

//console.log(nExtenso(108))

function nExtenso(n){
    let posicional = nPosicional(n)
    let extenso = ''

    const unidade = ['','um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove']
    const dezenaDez = ['dez', 'onze', 'doze', 'treze', 'cartorze', 'quinze', 'desseseis', 'dezesete', 'dezoito', 'dezenove']
    const dezena = ['vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa']
    const centenaDez = ['cem', 'cento']
    const centena = ['duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seicentos', 'setecentos', 'oitocentos', 'novecentos']
    const milhar = ['mil','dois mil', 'três mil', 'quatro mil', 'cinco mil', 'seis mil', 'sete mil', 'oito mil', 'nove mil']

    if(posicional[3] !== 0){
        extenso = milhar[posicional[3]-1]
    }

    if(posicional[2] !== 0){
        if ((posicional[2] === 1) && posicional[1] === 0 && posicional[0] === 0 ){
            extenso = extenso + ' ' + centenaDez[0]

        }else if(posicional[2] === 1){
            extenso = extenso + ' ' + centenaDez[1] + ' '
        }

        if(posicional[2] > 1){
            extenso = extenso + ' ' + centena[posicional[2]-2] + ' '
        }
    }

    if(posicional[1] === 1){
        extenso = extenso + ' ' + dezenaDez[posicional[0]]

    }else if(posicional[1] > 1){
        extenso = extenso + ' ' + dezena[posicional[1]-2]
    }

    if(posicional[0]> 0 && posicional[1] !== 1){
        extenso = extenso + ' ' + unidade[posicional[0]]

    }

    return extenso
}

const body = document.querySelector('body')


function numbersToWords(n){
    
    for(let i=1; i<=n; i++){
        const p = document.createElement('p')
        p.innerText = nExtenso(i)
        body.appendChild(p)
    }
}

numbersToWords(1000)
console.log(nExtenso(3))
