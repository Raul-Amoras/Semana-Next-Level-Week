//Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)

//Executar uma ação/Função
function cloneField(){
//Duplicar o campo. Quais Campos?
const newField = document.querySelector(".schedule-item").cloneNode(true)

//pegar os campos. Quais campos?
const field = newField.querySelectorAll("input")

//limpar cada campo. Quais campos?
field.forEach(function(fields){
    //limpa eles 
    fields.value="";
})
//colocar na pagina. Onde?
document.querySelector("#schedule-items").appendChild(newField)
}
