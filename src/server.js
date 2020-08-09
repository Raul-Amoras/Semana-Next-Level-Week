const proffys = [
{
    name: "Ricardo Ferrari",
    avatar: "https://avatars0.githubusercontent.com/u/69210211?s=460&u=26a1926677b45d3e783fc35f13e682819016c724&v=4", 
    whatsapp: "91984857415",
    bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
    subject:"Quimica",
    cost: "120",
    weekday:[ 0 ],
    time_from:["120"],
    time_to:["500"]

}
]

const subjects = [
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",  
]

function getSubject(subjectNumber){
    const position = + subjectNumber -1
    return subjects[position]
}

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    //recebe os dados do front-end da pagina study
    filters = req.query

    return res.render("study.html", { proffys, filters, subjects, weekdays})
 }

 function pageGiveClass(req, res){
    
    const data = req.query

    //se tiver dados (data)
    const isNotEmpty = Object.keys(data).length != 0

    if (isNotEmpty) {

        data.subject = getSubject(data.subject)

        //adiciona os dados na lista proffys
        proffys.push(data)

        return res.redirect("/study")
    }

    return res.render("give-classes.html", { subjects, weekdays})

 }


//importando as aplicações para serem usadas
const express = require('express')
const server = express()


//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache:true,
})

server
//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/",pageLanding) 
.get("/study",pageStudy)
.get("/give-classes",pageGiveClass)
.listen(5500)
