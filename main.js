//armazenando a API na variável
var SpeechRecognition = window.webkitSpeechRecognition;
  
//criando um novo reconhecimento de fala utilizando a API e armazenando na variável
var recognition = new SpeechRecognition();

var textarea = document.getElementById("text");

function iniciar(){
    textarea.innerHTML="";
recognition.start()
}
recognition.onresult=function(event){
    console.log(event)
    var conteudo=event.results[0][0].transcript;
    textarea.innerHTML=conteudo
    if(conteudo=="Flamengo"){
        speak()
    }
}
function speak(){
    var synth=window.speechSynthesis
    var frase="tirando uma foto NOJENTA sua em 3 segundos"
    var faleisso=new SpeechSynthesisUtterance(frase)
    synth.speak(faleisso)

    Webcam.attach(camera)
    setTimeout(() => {
        tirarfoto()
    }, 3000);
}
camera=document.getElementById("cam")
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:100
})
function tirarfoto(){
    Webcam.snap(function(data_uri){
        document.getElementById('selfie').innerHTML= '<img id="imagem" src="'+data_uri+'"/>'
    })
}
function salvar(){
    link=document.getElementById("download")
    img=document.getElementById("imagem").src
    link.href=img
link.click()
}