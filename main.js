const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');
 width_of_block = 30;
 height_of_block = 30;

 var block_image = "" ;
 var player_object = "";
 
 function player_update() {
     fabric.Image.fromURL("https://drive.google.com/file/d/1fGz6T2OZeGqzLGfhN1fZ2VffCG-OzWxL/view?usp=sharing"  , function(Img) {
         player_object = Img;
         player_object.scaleToWidth(150);
         player_object.scalToHeight(140);
         player_object.set({
             top : player_y ,
             left : player_x  } );
             canvas.add(player_object);
        } );
 }

 function new_image(get_image) 
 {
     fabric.Image.fromURL(get_image, function(Img) {

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToheight(block_image_height);
        block_image_object.set({
            top: player_y,
            left:player_x
        });
        canvas.add(block_image_object);

     });

     
 }