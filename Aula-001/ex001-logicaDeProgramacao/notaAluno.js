function calcular(){
    let nota1 = window.document.getElementById('nota1txt')
    let nota2 = window.document.getElementById('nota2txt')
    let nota3 = window.document.getElementById('nota3txt')
    let nota4 = window.document.getElementById('nota4txt')
    let res = window.document.getElementById('res')

    res.innerHTML='Calculando... <br>'
    
    //for (let nota=1; nota<=4; nota++)
      
    let n1 = Number(nota1.value)
    let n2 = Number(nota2.value)
    let n3 = Number(nota3.value)
    let n4 = Number(nota4.value)
    let media = (n1+n2+n3+n4)/4;

        if( media == 0){
            res.innerHTML = 'Você está reprovado'
            
        } else if( media <=5){
            res.innerHTML = 'Você está em recuperação'
            
        } else if( media > 7){
            res.innerHTML = 'Você está aprovado!'
            
        }
        res.innerHTML += `Sua média anual é ${media}`    
}