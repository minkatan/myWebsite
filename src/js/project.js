
const canvas = document.querySelector('canvas')
const project = document.getElementById('project')
const ctx = canvas.getContext('2d')
const links = [...document.querySelectorAll('li')]

function lerp(start, end, time){
    return start * (1 - time) + end * time;
}

let imageIndex = 0

// load images
const images = [
    '../assets/images/project-image-1.png',
    '../assets/images/project-image-2.jpeg',
    '../assets/images/project-image-3.jpeg',
    '../assets/images/project-image-4.png',
    '../assets/images/project-image-5.jpeg',
]

let imageArray = [];

// canvas mousemove variables

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

window.addEventListener('mousemove', (e) => {
    targetX = e.clientX
    targetY = e.clientY
})


images.forEach((image) => {
    let imageEl = new Image(400);
    imageEl.src = image
    imageEl.classList.add('opacity-0', 'absolute', '-top-full', 'pointer-events-none', 'select-none')
    project.append(imageEl);
    imageArray.push(imageEl)
})

// draw image to the canvas

let percent = 0;
let target = 0; 

function drawImage (idx) {
    let {width, height} = imageArray[idx].getBoundingClientRect();

    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // pixelate by disabling the smoothing
    ctx.webkitImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.msSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    if(target === 1){ // Link has been hovered
        // 2 speeds to make the effect more gradual
        if(percent < 0.2){
            percent += 0.01;
        }else if(percent < 1){
            percent += 0.1;
        }
    }else if(target === 0){
        if(percent > 0.2){
            percent -= 0.3
        }else if( percent > 0){
            percent -= 0.01;
        }
    }

     let scaledWidth = width * percent;
    let scaledHeight = height * percent;

    if(percent >= 1){
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        ctx.drawImage(imageArray[idx], 0, 0, width, height);
    }else{
        ctx.drawImage(imageArray[idx], 0, 0, scaledWidth, scaledHeight);
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        if(canvas.width !== 0 && canvas.height !== 0){
            ctx.drawImage(canvas, 0, 0, scaledWidth, scaledHeight, 0, 0, width, height)
        }
    }
}

// smooth transition when mouse move over to project
for(let i = 0; i < links.length; i++){
    links[i].addEventListener('mouseover', () => {
        for(let j = 0; j < links.length; j++){
            if(j !== i){
                links[j].style.opacity = 0.2;
                links[j].style.zIndex = 0;
            }else{
                links[j].style.opacity = 1;
                links[j].style.zIndex = 5;
            }
        }
    })

    links[i].addEventListener('mouseleave', () => {
        for(let i = 0; i < links.length; i++){
            links[i].style.opacity = 1;
        }
    })

    links[i].addEventListener('mouseenter', () => {
        imageIndex = i;
        target = 1
    });

    links[i].addEventListener('mouseleave', () => {
        target = 0;
    })
}

function animate(){
    currentX = lerp(currentX, targetX, 0.2);
    currentY = lerp(currentY, targetY, 0.2);
    let { width, height } = imageArray[imageIndex].getBoundingClientRect();
    canvas.style.transform = `translate3d(${currentX - (width / 2)}px, ${currentY - (height / 2)}px, 0)`;
    drawImage(imageIndex);
    window.requestAnimationFrame(animate);
}

animate()