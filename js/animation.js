let element = document.querySelectorAll(".project-list > div")

console.log(element);

element.forEach(ele => {
    ele.style.setProperty('--img', `-${ele.children[0].querySelector('img').offsetHeight-290}px`)
})

