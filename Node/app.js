const express = require("express");
const app = express();

const cors = require('cors')

//config ejs
app.set('view engine', 'ejs')

app.get("/produtos", cors(), (req, res, next) => {
    const mysql = require('mysql')
    const connection = mysql.createConnection({
      host: 'localhost',
      user:'root',
      password:'',
      database: 'recodepro'
    })

    connection.query("select * from jogos join caracteristicas on jogos.id_caract = caracteristicas.id_caract;", (error, result)=>{
      
      //res.render('secao/index',{dados:result})
      //console.log(res.json({ dados: result }))
      res.json(({dados: result}))
      //res.render('secao/index', {dados: result})
    })
    
});

app.get("/produto/acao", cors(), (req, res, next) => {
  const mysql = require('mysql')
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'recodepro'
  })

  connection.query("SELECT * from jogos join caracteristicas on jogos.id_caract = caracteristicas.id_caract where caracteristicas.genero='Ação';", (error, result) =>{
    //res.render('secao/index',{dados:result})
      //console.log(res.json({ dados: result }))
      res.json(({dados: result}))
      //res.render('secao/index', {dados: result})
  })
});

app.listen(1910, () => {
  console.log("O servidor subiu na porta 1910");
});