var dragControl = {
    // functions
    canvas_a: document.getElementById("canvas_a"),
    ctx: document.getElementById('canvas_a').getContext('2d'),
    img: new Image(),
    rotate_value: 90,
    counter:0,
    flipped: 0,
    init: function(){
        console.log('initialized here');
        this.draw();
        this.rotate();
    },
    draw: function(){
        dragControl.img.src = '../images/photo.png';
        dragControl.img.onload = function() {
            dragControl.ctx.drawImage(dragControl.img, 0, 0);
        };
    },
    rotate: function(){
        var width = dragControl.img.width;
        var height = dragControl.img.height;
        dragControl.ctx.clearRect(0,0,dragControl.canvas_a.width,dragControl.canvas_a.height);
        dragControl.ctx.save();
        console.log(dragControl.counter);
        switch(dragControl.counter){
            case 0:
                dragControl.ctx.translate( height, 0 );
            break;
            case 1:
                dragControl.ctx.translate( width, height );
            break;
            case 2:
                dragControl.ctx.translate( 0, width );
            break;
            case 3:
                dragControl.ctx.translate( 0, 0 );
            break;
        }
        dragControl.ctx.rotate( this.rotate_value*Math.PI/180 );
        // dragControl.ctx.translate( -180, -0 );
        dragControl.ctx.drawImage( dragControl.img, 0, 0 );
        dragControl.ctx.restore();

        // dragControl.ctx.clearRect(0,0,dragControl.canvas_a.width,dragControl.canvas_a.height);
        // dragControl.ctx.rotate(this.rotate_value*Math.PI/180);
        // dragControl.ctx.translate(0,-200);
        // dragControl.ctx.drawImage(dragControl.img, 0, 0);
        
        this.rotate_value += 90;
        if(dragControl.counter < 3){
            dragControl.counter++;
        }else{
            dragControl.counter=0;
        }
        console.log(dragControl.img.width);
    },
    flip: function(){
        var width = dragControl.img.width;
        var height = dragControl.img.height;
        dragControl.ctx.clearRect(0,0,dragControl.canvas_a.width,dragControl.canvas_a.height);
        dragControl.ctx.save();

        var flip_w = 0;
        var flip_h = 0;

        if(dragControl.counter==0){
            flip_w = -1;
            flip_h = 1;
        }
        if(dragControl.counter==1){
            flip_w = -1;
            flip_h = -1;
        }
        if(dragControl.counter==2){
            flip_w = 1;
            flip_h = -1;
        }
        if(dragControl.counter==3){
            flip_w = 1;
            flip_h = 1;
        }

        if(dragControl.flipped){
            dragControl.ctx.scale(1, 1);
            dragControl.ctx.drawImage( dragControl.img, 0, 0 );
            dragControl.flipped=false;
        }else{
            dragControl.ctx.scale(-1, 1);
            dragControl.ctx.drawImage( dragControl.img, width*-1, 0 );
            dragControl.flipped=true;
        }
        dragControl.ctx.restore();
    },
    duplicate: function(){
        var canvas_b = document.getElementById("canvas_b");
        var ctx_b=canvas_b.getContext("2d");
        
        // dragControl.img.src = '../images/photo.png';
        
        var image = new Image();
        // var image = document.getElementById("myImage");
        image.src = dragControl.canvas_a.toDataURL("image/png");
        image.onload = function(){
            ctx_b.drawImage(image, 0, 0);
        }

        // var imgDta = new Image();
        // imgData = dragControl.canvas;
        // ctx_b.putImageData(imgData, 10, 70);
    }
};

document.addEventListener("DOMContentLoaded", function() {
    dragControl.init();
});