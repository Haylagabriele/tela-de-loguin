const express= require('express');
const app = express();
const PORT = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

//define arquivos estaticos
app.use(express.static('public'))

app.get('/',(req,res)=>{
         res.render('index');
});

app.listen(PORT, () => {
    console.log(`Running in http://localhost:${PORT}`);
})