

function media() {
    const nota1 = Number(document.querySelector("#nota1").value)
    const nota2 = Number(document.querySelector("#nota2").value)
    const nota3 = Number(document.querySelector("#nota3").value)
    const mediaElemento = document.querySelector("#media")
    const feedbackElemento = document.querySelector("#feedbeck")


    media = (nota1 + nota2 + nota3)/3
    mediaElemento.innerHTML = media.toFixed(2)

    if (media > 7) {
        let text = "Você está aprovado!"
        feedbackElemento.innerHTML = text
    } else if (media < 7) {
        let text = "Você está reprovado!"
        feedbackElemento.innerHTML = "Você está reprovado!"
    }
}

