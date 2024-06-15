var puntInputBtn, puntInput, puntDiv, numpunct, n, med;

puntInputBtn = document.querySelector('#puntInputBtn')

function createDataInputs(){
    puntDiv = document.querySelector('#cardpunt')
    puntInput = document.querySelector('#puntInput').value
    for (let i = 0; i < puntInput; i++) {
        dataInput = document.createElement('input')
        dataInput.classList.add('m-2')
        dataInput.classList.add('col-1')
        dataInput.classList.add('my-1')
        dataInput.classList.add('numpunct')
            puntDiv.append(dataInput);
        
    }
}
function createDataInputsInt(){
    intDiv = document.querySelector('#cardint')
    intInput = document.querySelector('#intInput').value
    for (let i = 0; i < intInput; i++) {
        dataInput = document.createElement('input')
        dataInput.classList.add('m-2')
        dataInput.classList.add('col-1')
        dataInput.classList.add('my-1')
        dataInput.classList.add('numint')
            intDiv.append(dataInput);
        
    }
}
function extraData(){
    estimador = document.querySelector('#estimador')
    proporcion = document.querySelector('#proporcion')

    if(estimador.value == 'Porcion'){
    proporcion.classList.remove('d-none')
    proporcion.classList.add('d')
    }else{
        proporcion.classList.remove('d')
        proporcion.classList.add('d-none')

    }

}
function media(){
    numpunct = document.querySelectorAll('.numpunct')
    n=0
    med = 0
    for (let i = 0; i < numpunct.length; i++) {
        if (numpunct[i].value != '') {
            n++
            med+= Number(numpunct[i].value)
        }
        
    }
    p = document.createElement('p')
    p.innerHTML = 'La media muestral es de: ' + med/n
    document.querySelector('#result').innerHTML = ''
    document.querySelector('#result').append(p)

    return(med/n)

}
function porcion(){
    numpunct = document.querySelectorAll('.numpunct')
    n=0
    prop = document.querySelector('#prop').value
    for (let i = 0; i < numpunct.length; i++) {
        if (numpunct[i].value != '') {
            n++
        }
        
    }
    
    p = document.createElement('p')
    p.innerHTML = 'La proporcion buscada es de: ' + prop/n
    document.querySelector('#result').innerHTML = ''
    document.querySelector('#result').append(p)
}
function varianza(){
    med = media()
    numpunct = document.querySelectorAll('.numpunct')
    n=0
    vari = 0
    for (let i = 0; i < numpunct.length; i++) {
        if (numpunct[i].value != '') {
            n++
        }
        
    }
    for (let i = 0; i < numpunct.length; i++) {
        if (numpunct[i].value != '') {
            vari+= Math.pow((Number(numpunct[i].value) - med),2)
        }
        
    }
    p = document.createElement('p')
    p.innerHTML = 'La varianza buscada es de: ' + vari/(n-1)
    document.querySelector('#result').innerHTML = ''
    document.querySelector('#result').append(p)
}
function calc(){
    estimador = document.querySelector('#estimador').value
    if(estimador == 'Media'){
        media()
    }
    if(estimador == 'Porcion'){
        porcion()
    }
    if(estimador == 'Varianza'){
        varianza()
    }

}

function calcInter(){
    dev = Number(document.querySelector('#dev').value)
    conf = document.querySelector('#conf').value
    numint = document.querySelectorAll('.numint')
    n=0
    med = 0
    for (let i = 0; i < numint.length; i++) {
        if (numint[i].value != '') {
            n++
            med+= Number(numint[i].value)
        }
        
    }
    var li, ls
    if (conf == 99){
        li = (med/n)  - 2.57*dev/Math.sqrt(n)
        ls = (med/n)  + 2.57*dev/Math.sqrt(n)
    }
    if (conf == 95){
        li = (med/n) - 1.96*dev/Math.sqrt(n)
        lS = (med/n) + 1.96*dev/Math.sqrt(n)
    }

    p = document.createElement('p')
    p.innerHTML = 'La media muestral se encuentra entre: ' + li + ' y ' + ls
    document.querySelector('#result').innerHTML = ''
    document.querySelector('#resultint').append(p)

}

function colla1(){
 col1 = document.querySelector('#collapseExample1')
 col2 = document.querySelector('#collapseExample')

 col1.classList.remove('d-none')
 col2.classList.add('d-none')
}
function colla2(){
 col1 = document.querySelector('#collapseExample1')
 col2 = document.querySelector('#collapseExample')

 col2.classList.remove('d-none')
 col1.classList.add('d-none')
}
