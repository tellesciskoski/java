const form = document.queryselector ("form*")
const resp = document .querySelector ("h3")

form. addEventlistener ("submit", (e) => {
e.preventDefault ()

  const nome = form. InNome.value
  const masculino = form.inMasculino.checked
  const altura = Number(form.inAltura.value)

  let peso 
   if (masculino) {
       peso = 22 * Math.pow(altura, 2)
    } else {
        peso = 21 * Math.pow(altura, 2)
    }
    resp.innerText = `${nome} seu peso ideal é: ${peso.toFixed(3)}kg`
})

form.addEventlistener("resert", (e) => {
    resp.innerText = " "
})