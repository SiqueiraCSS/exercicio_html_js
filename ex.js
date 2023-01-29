const span = document.querySelector('.error')



function teste(){
    const A = Number(document.getElementById('fild-a').value)
    const B = Number(document.getElementById('fild-b').value)
    console.log(A,B)

    if(A < B) {
        console.log('Correto!')
        span.style.display = 'none'
    } 
    else{
        span.style.display = 'block'
        console.log('Mensagem de erro')
    }
}

document.getElementById('fild-submit').addEventListener('click',teste)
