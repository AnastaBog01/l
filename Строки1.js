const words = ['кошка', "собака", 'мышка']
const vopros = ['Благословляли в древнем Египте ', 'животное домашнее, иногда вырполняет функцию охраны', 'вопрос 3']
let word=[]
let secret=[]

$(document).ready(start)

function start(){
  let r = Math.floor(Math.random()*3)
  word = words[r].split('')
  console.log(word)
  for(let i=0; i<word.length; i++) {
    secret.push('*')
  }
  console.log(secret)
  $("#vopros").text(vopros[r])
  $("#slovo").text(secret.join(''))
}

$("#but").click(guess)

function guess(){
  let bukva = $('input').val()
  for (w in word){
    if (bukva==word[w]){
      console.log('est')
      secret[w]=bukva
    }
  }
    $("#slovo").text(secret.join(''))
  console.log(word)
  console.log(secret)
  proverka()
}

function proverka(){
  if (secret.indexOf("+") == -1){
    console.log("win")
    $("input").prop("disabled", true)
  }
}
