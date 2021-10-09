function preload(){
img=loadImage('https://www.collinsdictionary.com/images/full/dog_230497594.jpg');
}
function setup(){
canvas=createCanvas(600,600);
canvas.position(110,250);

tint_color="";
}
function draw(){
image(img,150,150,150,150);
tint(tint_color);
fill(0,255,0);
stroke(0,0,255);
circle(100,100,50);
circle(100,300,50);
circle(300,100,50);
circle(300,300,50);

}
function filter_color(){
tint_color=document.getElementById("color_name").value;

}
function take_snapshot(){
save('student.png');
}