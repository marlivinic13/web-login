/*modularização - cada função tem uma finalidade*/

function validarLogin(event) {
    event.preventDefault(); /*impedir que o botão jogue os dados para a url*/

    const usuarioValido = "admin"
    const senhaValida = "123456"

    const usuarioInput = document.getElementById("usuario")/*vá no documento hmtl e pegue o elemento que estiver na tag de id "" */
    const senhaInput = document.getElementById("password") /*Da classe document eu quero utilizar o método getElementById */

    const mensagemErro = document.getElementById("mensagemErro") /*Vai controlar o que será mostrado no paragrafo  de id mensagemErro*/

    const usuario = usuarioInput.value //pega o valor do usuário digitado e guarda na constante
    const senha = senhaInput.value //pega o valor da senha digitada e guarda na constante 

    if (usuario === usuarioValido) { //verifica se o usuário digitado pelo usuário é igual em valor e tipo do usuário de admin
        if (senha === senhaValida) { //verifica se a senha digitada pelo usuário é igual em valor e tipo da senha do admin
            alert("Login realizado, transferindo para a página de admin") //cria um alerta que aparece no topo informando que o loguin foi bem sucessido
            window.location.href = "admin.html" //irá direcionar para a página admin.html
        } else {
            mensagemErro.textContent = "Senha Incorreta" /*adiciona no parágrafo de nome "mensagemErro" e digita a mensagem entre aspas*/
            senhaInput.focus() //volta o "digitar" para o InputSenha
            senhaInput.value = "" //retorna à vazio o input da senha 
        }
    } else {
        mensagemErro.textContent = "Usuário Incorreto" /*o paragrafo vai iniciar  */
        usuarioInput.focus() //volta o "digitar" para o InputSenha
        usuarioInput.value = "" //
    }

    console.log(usuarioInput)
}

function salvarCadastro(event) {
    event.preventDefault(); //evitar envio padrão do formulário

    //coletar os dados do do formulário
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const dataNasc = document.getElementById("dataNasc").value
    const escolaridade = document.getElementById("escolaridade").value

    const genero = document.querySelector("input[name='genero']:checked")?.value //do documento html e com o comando query vai atrás do primeiro valor encontrado vai atrás do input com o nome genero e que esteja marcado, ? serve para enviar apenas marcado 

    const habilidadesSelecionadas = document.querySelectorAll("input[name=habilidade]:checked") //vai pegar todos os campos marcados
    const habilidade = Array.from(habilidadesSelecionadas).map(x => x.value) //cria um  array com todas habilidades 

    //Criar um objeto no formato .json
    const usuario = {
        nome,
        email,
        dataNasc,
        escolaridade,
        genero,
        habilidade
    }

    //armazenar em localStorage 
    localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario)) //guardar no armazenamento do navegador
    alert("Cadastro efetuado com sucesso")
    window.location.href = "index.html" //irá direcionar para a página
    console.log(usuario)

}