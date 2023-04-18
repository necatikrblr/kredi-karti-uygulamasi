const cardnumber = document.querySelector("#card-number")
const cardinp = document.querySelector("#inp-number")
const year = document.querySelector("#year")
const day = document.querySelector("#date")
const yearselect = document.querySelector("#yselect")
const dayselect = document.querySelector("#dselect")
const cardon = document.querySelector(".card")
const cardarka = document.querySelector(".card-arka")
const cvvon = document.querySelector(".cvv-on")
const cardcvv = document.querySelector(".cardcvv")
const cardholder = document.querySelector("#card-holder")
const cardholinp = document.querySelector("#inp-holder")


cardholinp.addEventListener("keyup",()=>{
    if(isNaN(cardholinp.value)){
        cardholder.textContent=cardholinp.value
    }else{
        cardholder.textContent = cardholinp.value=""
    }
})
cardinp.addEventListener("keyup",()=>{

    if(!isNaN(cardinp.value)){
        const value = cardinp.value;
        let bos = "";
        for(let i = 0 ;i < value.length;i++){
        const rakamlar = value[i];
        if(!isNaN(rakamlar) && rakamlar !==" "){
            if(i % 4 === 0){
                bos += " "
            }
            bos += rakamlar
        }
    }
    cardnumber.textContent = bos
    }else{
        cardinp.value = ""
    }
})
dayselect.onchange=function(){
    day.textContent=dayselect.value
}
yearselect.addEventListener("change",function(){
    year.textContent=yearselect.value
})
cvvon.addEventListener("focus",()=>{
    cardarka.style.transform="rotateY(0deg)"
    cardon.style.transform="rotateY(180deg)"

})
cvvon.addEventListener("blur",()=>{
    cardarka.style.transform="rotateY(180deg)"
    cardon.style.transform="rotateY(0deg)"
})

cvvon.addEventListener("keyup",()=>{
    if(!isNaN(cvvon.value)){
        cardcvv.textContent=cvvon.value
    }else{
        cvvon.value=""
    }
})
