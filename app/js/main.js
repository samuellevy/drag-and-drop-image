var movement = true;
var mouse_x_crop_default = 0;
var mouse_y_crop_default = 0;
var mouseX = 0;
var mouseY = 0;
var image = document.getElementById('drag-1');

function move(e){
    mouseX = e.clientX;
    mouseY = e.clientY;

    if(movement){
        image_width = image.offsetWidth;
        image_height = image.offsetHeight;
        image.style["left"] = mouseX - (image_width) + "px";
        image.style["top"] = mouseY - (image_height) + "px";
        console.log(image_width);
    } else {
        crop_x = mouse_x_crop_default - mouseX;
        cropped_x = (image_width - crop_x);
        image.style["width"] = cropped_x + 'px';
        
        crop_y = mouse_y_crop_default - mouseY;
        cropped_y = (image_height - crop_y);
        image.style["height"] = cropped_y + 'px';
        console.log(image_height + " - " + crop_y);
    }
    
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Shift") {
        event.preventDefault();
        movement = false;
        mouse_x_crop_default = mouseX;
        mouse_y_crop_default = mouseY;
        image.classList.add('dashed');
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === "Shift") {
        event.preventDefault();
        movement = true;
        image.classList.remove('dashed');
    }
});

document.addEventListener('mousemove', move);