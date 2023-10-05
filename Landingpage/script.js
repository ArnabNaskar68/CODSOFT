gsap.to(".imagecontainer", {
    ease:Expo.easeInOut,
    width:"100%",
    duration: 2,
    stagger:5
})
gsap.to(".text h1",{
    ease:Expo.easeInOut,
    stagger:5,
    top:0
})
gsap.to(".text h1",{
    delay:4,
    ease:Expo.easeInOut,
    stagger:5,
    top:"-100%"
})