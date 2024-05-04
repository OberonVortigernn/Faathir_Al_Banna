const sr = ScrollReveal ({
    distance: '600px',
    duration: 2500,
    delay: 200,
    reset: true
})

sr.reveal('.home-text',{delay:200, origin:'top'})
sr.reveal('.home-img',{delay:400, origin:'top'})
sr.reveal('.about-title, .about-text, .heading, .box, input, textarea',{delay:200, origin:'top'})