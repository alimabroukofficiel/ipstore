const question = document.querySelectorAll('.question')
question.forEach(faq =>{
    faq.addEventListener('click' , ()=>{
        faq.parentElement.classList.toggle('active')
    })
})