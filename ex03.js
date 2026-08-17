// let nota = 92;
// let conceito;

// if (nota>=90){
//     conceito = "A";
// }else if (nota>= 80){
//     conceito= "B"
// }else if (nota>=70){
//     conceito= "C"
// }else if(nota<=70){
//     conceito = "RECUPERAÇÃO"
// };

// const statusFinal = nota >= 70 ? 'Aprovado' : 'Recuperção';
// console.log(`Nota: ${nota}`);
// console.log(`Conceito: ${conceito}`);
const express = require('express');
const app = express();
app.get('/api/classificar-idade', (req, res) => {
    const idade= Number(req.query.idade);
    if (!idade || isNaN(idade)){
        return res.status(400).json({erro: 'O parametro idade é obrigatorio e deve ser numerico'});
    }
    let categoria = idade < 12 ? 'Criança' : idade < 18 ?'Adolescente' : idade < 60 ?'Adulto' : 'idoso';
    return res.json({idade, categoria});
});
app.listen(3000, () => {
    console.log('Servirço rodando http://localhost:3000/api/clasificar-idade');
});
