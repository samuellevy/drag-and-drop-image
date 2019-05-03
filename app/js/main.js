// enable drag
var draggable = false;

// movement
var movement = true;
var mouseX = 0;
var mouseY = 0;
var restMouseX = 0;
var restMouseY = 0;
var image = document.getElementById('drag-1');

function startDrag(e){
    draggable = true;
    restMouseX = e.clientX;
    restMouseY = e.clientY;
    image_left = image.offsetLeft;
    image_top = image.offsetTop;
    console.log(e.clientX);
}

function endDrag(e){
    draggable = false;
    console.log('can`t drag');
}


function dragging(e){
    e.preventDefault();
    mouseX = e.clientX;
    mouseY = e.clientY;

    if(draggable){
        deltaX = mouseX - restMouseX;
        deltaY = mouseY - restMouseY;
        image_width = image.offsetWidth;
        image_height = image.offsetHeight;
        
        image.style["left"] = (image_left + deltaX) + 'px';
        image.style["top"] = (image_top + deltaY) + 'px';

        console.log(mouseX + ' - ' + image_left);
    } else {

    }
}


document.addEventListener('mousedown', startDrag);
document.addEventListener('mouseup', endDrag);
document.addEventListener('mousemove', dragging);