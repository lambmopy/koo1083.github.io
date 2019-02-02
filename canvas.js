var a;


var picX = 0;
var picY = 0;
var picW = 70;
var picH = 100;
var pic2X = 250;
var pic2Y = 250;
var pic2W = 70;
var pic2H = 100;
var grapeR = 40;
var pic1 = new Image(); //new Image() sets 'pic1' as an Image Object
pic1.src = "img/jam.png";
var pic2 = new Image();
pic2.src = "img/juice.png";
var pic3 = new Image();
pic3.src = "img/pop.png";
function drawBackground() //things that won't move in the animation
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle="#ffffff";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    //the dimensions of this rectangle
    // will mirror the dimensions of the canvas
    // regardless of the size of the canvas.
}

function drawGrape()
{

    var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.fillStyle = "#42180b";
    ctx.fillRect(245,70,10,30);
    ctx.stroke();

    ctx.fillStyle="#007508";
    ctx.beginPath(); //instructions for 1st circle start here
    ctx.arc(285,40,70,0.5, Math.PI/ 2 + 0.5);
    ctx.fill();

    ctx.fillStyle="#461a7e";
    ctx.strokeStyle = "#000000";
    ctx.beginPath(); //instructions for 1st circle start here
    ctx.arc(250,280,grapeR,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle="#461a7e";
    ctx.strokeStyle = "#000000";
    ctx.beginPath(); //instructions for 1st circle start here
    ctx.arc(210,210,grapeR,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle="#461a7e";
    ctx.strokeStyle = "#000000";
    ctx.beginPath(); //instructions for 1st circle start here
    ctx.arc(290,210,grapeR,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle="#461a7e";
    ctx.strokeStyle = "#000000";
    ctx.beginPath(); //instructions for 1st circle start here
    ctx.arc(250,140,grapeR,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle="#461a7e";
    ctx.strokeStyle = "#000000";
    ctx.beginPath(); //instructions for 1st circle start here
    ctx.arc(170,140,grapeR,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle="#461a7e";
    ctx.strokeStyle = "#000000";
    ctx.beginPath(); //instructions for 1st circle start here
    ctx.arc(330,140,grapeR,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();




}

function drawTriangle()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.moveTo(170, 140);
    ctx.lineTo(330, 140);
    ctx.lineTo(250, 280);
    ctx.fill();
}

function animate() //these are the frames that get repeated (animated)
{
    a = requestAnimationFrame(animate);
    drawBackground();
    movePic();
    checkPic();
    checkPic2();
    drawTriangle();
    drawText();
    drawGrape();
    moveGrape();


}

function startAnimation()
{
    animate();
}

function drawText()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.strokeStyle = "#2d1357";
    ctx.font = "70px Arial"; //more options at w3schools
    ctx.strokeText("GRAPES!!!", 75,430);
}
function stopAnimation()
{
    cancelAnimationFrame(a);
}
var moveX = 3;
var moveY = 5;
var move2X = 4;
var move2Y = 2;

function movePic()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    picX = picX + moveX;
    picY = picY + moveY;
    pic2X = pic2X + move2X;
    pic2Y = pic2Y + move2Y;
    ctx.drawImage(pic1, picX, picY, picW, picH);
    ctx.drawImage(pic2, pic2X, pic2Y, pic2W, pic2H);
}

function checkPic()
{
    if(picX > 440)
    {
        moveX = moveX*(-1);
    }
    if (picX < 0)
    {
        moveX = moveX*(-1);
    }
    if(picY > 415)
    {
        moveY = moveY*(-1);
    }
    if(picY < 0)
    {
        moveY = moveY*(-1);
    }
}


function checkPic2()
{
    if(pic2X > 440)
    {
        move2X = move2X*(-1);
    }
    if (pic2X < 0)
    {
        move2X = move2X*(-1);
    }
    if(pic2Y > 410)
    {
        move2Y = move2Y*(-1);
    }
    if(pic2Y < 0)
    {
        move2Y = move2Y*(-1);
    }
}

function moveGrape()
{
    grapeR = grapeR + 0.6;
    if (grapeR > 247)
    {
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.drawImage(pic3, 100,100,300,300);
    }
    if(grapeR > 250)
    {
        grapeR = 0;
    }
}

