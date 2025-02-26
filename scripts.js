const form = document.getElementById('form-contact')
let nomeAluno = document.getElementById('nome-aluno')
let emailAluno = document.getElementById('email-aluno')
let telefoneAluno = document.getElementById('telefone-aluno')
let idiomaEscolhido = document.getElementById('idioma-escolhido')
let horarioInicial = document.getElementById('horario-inicial')
let horarioFinal = document.getElementById('horario-final')
let objetivoAula = document.getElementById('objetivo-aula')

let formValido = false

form.addEventListener('submit', function(event) {       
    event.preventDefault()    
    const mensagemSucesso = `O teste de nivelamento do idioma <b>${idiomaEscolhido.value}</b> foi agendado para o aluno <b>${nomeAluno.value}</b>. Entraremos em contato através do telefone <b>${telefoneAluno.value}</b>. Confira no seu e-mail <b>${emailAluno.value}</b> os detalhes do agendamento.`

    
    const containerMensageSucesso = document.querySelector('.success-message')
    document.querySelector('.success-message').innerHTML = mensagemSucesso
    containerMensageSucesso.style.display = 'block'

    nomeAluno.value = ''
    emailAluno.value = ''
    telefoneAluno.value = ''        
    horarioInicial.value = ''
    horarioFinal.value = ''
    objetivoAula.value = ''    
})