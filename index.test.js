const teste = require('tape')
const func = require('./teste')
/*
teste ('Aplicar desconto padrao', (t)=>{
    t.assert(func.aplicardesconto(10,5)=== 5, "desconto  true 01")
    t.end()   


}
)
teste ('Aplicar desconto padrao', (t)=>{
    t.assert(func.aplicardesconto(11,5)=== 5, "desconto false 02")
    t.end()   


}
)
teste ('Aplicar desconto padrao', (t)=>{
    t.assert(func.aplicardesconto(20,5)=== 15, "desconto true 03")
    t.end()   


}
)
teste ('Aplicar desconto padrao', (t)=>{
    t.assert(func.aplicardesconto(100,50)=== 50, "desconto true 04")
    t.end()   


}
)
teste ('Aplicar desconto padrao', (t)=>{
    t.assert(func.aplicardesconto(1000,500)=== 500, "desconto  true 05")
    t.end()   


}
) */
teste('valida se é numero', (t)=> {
    t.assert(func.validanumero(1000) == false, "valiçao 01")
    t.end()
})
teste('valida se é numero', (t)=> {
    t.assert(func.validanumero(300) == true, "valiçao 02")
    t.end()
})
teste('valida se é numero', (t)=> {
    t.assert(func.validanumero(300) == false, "valiçao 02")
    t.end()
})