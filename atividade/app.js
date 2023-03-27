const inNome = document.getElementById('inNome')
const rbMasculino = document.getElementById('rbMasculino')
const rbFeminino = document.getElementById('rbFeminino')
const inAltura = document.getElementById('inAltura')
const outResposta = document.getElementById('outResposta')

const btnCalcular = document.getElementById('btnCalcular')
btnCalcular.addEventListener('click', () => {
    let nome = inNome.value
    let altura = Number(inAltura.value)
    let masculino = rbMasculino.checked
    let feminino = rbFeminino.checked

    if (nome === '' || (masculino === false && feminino === false)) {
        alert('Por favor, informe o nome ou/e selecione o sexo')
        inNome.focus()
        return//para a aplicação até que esteja preenchido
    }
    if (altura === 0 || isNaN(altura)) {
        alert('Por favor, informe a altura corretamente')
        inAltura.focus()
        return//para a aplicação até que esteja preenchido
    }
    let peso

    if (masculino) {
        peso = 22 * Math.pow(altura, 2)
    } else {
        peso = 21 * Math.pow(altura, 2)

    }
    outResposta.textContent = `${nome} seu peso ideal: ${peso.toFixed(2)} Kg`

})
const btnLimpar = document.getElementById('btnLimpar')
btnLimpar.addEventListener('click', () => {

    // document.getElementById('inNome').value = ''
    // document.getElementById('rbMasculino').checked = false 
    // document.getElementById('rbFeminino').checked = false
    //  document.getElementById('inAltura').value = ''
    // document.getElementById('outResposta').value = ''


    location.reload()//para limpar e atualizar toda a página
})