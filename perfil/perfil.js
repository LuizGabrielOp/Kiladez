let eyes = document.getElementById('eyes')
let pass = document.getElementById('pass')

function eyepass(){
    if(eyes.classList.contains('ri-eye-line')){
        eyes.classList.remove('ri-eye-line')
        eyes.classList.add('ri-eye-close-line')
        pass.innerText="********"
    }
    else{
        eyes.classList.add('ri-eye-line')
        eyes.classList.remove('ri-eye-close-line')
        pass.innerText="casadissimo"
    }
}
function account(){
    const alterne = document.getElementById('alterne')

    if(alterne.style.display === "none"){
        alterne.style.display = "flex"
    }
    else{
        alterne.style.display = "none"
    }
}