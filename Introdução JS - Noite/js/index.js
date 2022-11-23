// Impressão em tela
// 1° forma :  Usando o objeto Console
//console.log("Hello World!!!")
//console.debug("Usado para 'debuggar' uma variavel ou código")
//console.warn("Usado para advertir o usuário/desenvolvedor")
//console.error("Usado para mostrar um erro no sistema")


// 2° forma : Usando o innerHTML e o innerText
//document.body.innerHTML = ("<p>Esse parágrafo foi inserido via JS</p>")
//document.body.innerText = ("<p>Esse parágrafo foi inserido via JS</p>")

//3° forma : Usando a função Alert
//alert("Uma mensagem importante para o usuário!!!")

// 4° Usando a função write - NÃO ACONSELHAVEL USAR


// ------------------------------Seletores no JS -------------------------------------
let paragraph = document.getElementById("primeiroParagrafo")
console.log(paragraph)

paragraph.classList.add("text-center","text-primary","fw-bold")


//-------------Eventos------------------------------
//Criar o elemento HTML
let image = document.createElement("img")
//Definir o src da imagem
image.src = "../img/tapa1.jpg";
//Definir a largura da imagem
image.width = 200


// Adicionar a imagem ao final do body
document.body.appendChild(image)

// Adicionar o evento de clique a imagem
image.addEventListener('click', () => {
    image.src = "../img/tapa2.jpg"
})


