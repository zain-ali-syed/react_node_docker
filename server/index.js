var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())

const users = [{
    "first_name": "Maximilien Easy",
    "last_name": "Merriton",
    "email": "mmerriton0@springer.com"
  }, {
    "first_name": "Luciano",
    "last_name": "Alcido",
    "email": "lalcido1@mail.ru"
  }, {
    "first_name": "Tremayne",
    "last_name": "Fredi",
    "email": "tfredi2@rambler.ru"
  }, {
    "first_name": "Stillman",
    "last_name": "Adamovicz",
    "email": "sadamovicz3@cbslocal.com"
  }, {
    "first_name": "Natalina",
    "last_name": "De la Harpe",
    "email": "ndelaharpe4@sitemeter.com"
  }, {
    "first_name": "Deny",
    "last_name": "Hutable",
    "email": "dhutable5@about.com"
  }, {
    "first_name": "Scottie",
    "last_name": "Faichney",
    "email": "sfaichney6@instagram.com"
  }, {
    "first_name": "Hale",
    "last_name": "Accomb",
    "email": "haccomb7@phoca.cz"
  }, {
    "first_name": "Sarah",
    "last_name": "Chaudrelle",
    "email": "schaudrelle8@merriam-webster.com"
  }, {
    "first_name": "Maye",
    "last_name": "Hessel",
    "email": "mhessel9@businessweek.com"
  }];

 
app.get('/', function (req, res) {
  res.json(users)
})
 
app.listen(4000, () => console.log("Server listening on port 4000"))