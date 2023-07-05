let empleo=document.querySelector("#empleado")
let cantidad=document.querySelector("#cantidad")
let canti=document.querySelector("#canti")
let salario=document.querySelector("#salarioNeto")
let img=document.querySelector("#img")
let bono=document.querySelector("#bono")
let intereses=document.querySelector("#intereses")

let r1=document.querySelector("#p1")
let r2=document.querySelector("#p2")
let r3=document.querySelector("#p3")

cantidad.oninput=()=>{
    canti.innerHTML=cantidad.value
    calcular()
}
empleo.onchange=()=>{
    calcular()
}
r1.onchange=()=>{
    calcular()
}
r2.onchange=()=>{
    calcular()
}
r3.onchange=()=>{
    calcular()
}

const calcular=()=>{
let d=parseFloat(document.querySelector("#cantidad").value)
let pinter=0


if(r1.checked){
pinter+=40
}
if(r2.checked){
pinter+=50
}
 if(r3.checked){
pinter+=75
}

if(empleo.value==1){
    c=100
    let ssalario=c*d
    salario.innerHTML="$"+ssalario+" MXN"
    let precioi=(ssalario+pinter)
    intereses.innerHTML="$"+precioi+" MXN"
    let meses=precioi/mes
    bono.innerHTML="$"+meses.toFixed(2)+" MXN"
    img.innerHTML='<img src="Smart.jpg" class="card-img-top" alt="..."><div class="card-body"><p class="card-text">SmartTv</p></div>'
}
else if(empleo.value==2){
    c=120
    let ssalario=c*d
    salario.innerHTML="$"+ssalario+" MXN"
    let precioi=(ssalario+pinter)
    intereses.innerHTML="$"+precioi+" MXN"
    let meses=precioi/mes
    bono.innerHTML="$"+meses.toFixed(2)+" MXN"
    img.innerHTML='<img src="Moto.png" class="card-img-top" alt="..."><div class="card-body"><p class="card-text">Moto</p></div>'
}
else if(empleo.value==3){
    c=150
    let ssalario=c*d
    salario.innerHTML="$"+ssalario+" MXN"
    let precioi=(ssalario+pinter)
    intereses.innerHTML="$"+precioi+" MXN"
    let meses=precioi/mes
    bono.innerHTML="$"+meses.toFixed(2)+" MXN"
    img.innerHTML='<img src="Sala.jpg" class="card-img-top" alt="..."><div class="card-body"><p class="card-text">Sala</p></div>'
}
else if(empleo.value==4){
    c=180
    let ssalario=c*d
    salario.innerHTML="$"+ssalario+" MXN"
    let precioi=(ssalario+pinter)
    intereses.innerHTML="$"+precioi+" MXN"
    let meses=precioi/mes
    bono.innerHTML="$"+meses.toFixed(2)+" MXN"
    img.innerHTML='<img src="Comedor.jpg" class="card-img-top" alt="..."><div class="card-body"><p class="card-text">Comedor</p></div>'
}


}