
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outRes1")
const resp2 = document.querySelector("outResp2")

let numContas = 0 // declara e inicializa contador...
let valtotal = 0 // ... e acumulador (variáveis globais)
let resposta = 0 // string com a resposta a ser exibida

        frm.addEventListener("submit", (e) => {     // "escuta" evento submit do form
            e.preventDefault()                      // evita envio do form

            const descricao = frm.inDescricao.value   // obtém dados da conta
            const valor = Number(frm.inValor.value)

            numContas++                      // adiciona valores ao contador e acumulador
            valtotal = valtotal + valor

            resposta = resposta + descricao + "- R$: " + valor.toFixed(2) +  "\n"

            resp1.innerText = '${resposta}-------------------------------'
            resp2.innerText = '${numContas} Conta($) - total R$: $(valtotal.toFixed(2)}'

            frm.inDescricao.value = ""       // limpa campos do form
            frm.inValor.value = ""
            frm.inDescricao.focus()          // posiciona no campo inDescricao do form
        })