var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
{

fabric.Image.fromUrl('BrithdayImage.jpg', function(image){
    block_image_oject=Img;
    block_image_oject.scaleToWidth(700);
    block_image_oject.scaleToHeight(510);
    block_image_oject.set({
        top:0,
        left:0
    });
    canvas.add(block_image_oject)
});


	


}

function playSound(){
x.play();
}
