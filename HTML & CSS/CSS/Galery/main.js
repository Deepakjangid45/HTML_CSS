const slides = document.querySelectorAll(".slide");
// console.log(slides);

var counter = 0;
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})


const slideImages = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100} % )`
    })
}


const goPrev = () => {
    counter--;
    // alert()
    // console.log("click");
    slideImages()

}
const goNext = () => {
    counter++;
    // alert()
    // console.log("click");

    slideImages()

}