console.log('%c HI', 'color: firebrick')

function loadImages() {
fetch('https://dog.ceo/api/breeds/image/random/4')
.then(res => res.json)
.then(data => {
    data.forEach(image => createImage(image))

})
}