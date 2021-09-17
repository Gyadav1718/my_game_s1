const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var canvas;
var ironMan,ironManImg,thor,thorImg,captain,captainImg,spyder,spyderImg;
var backgroundImg;
var ultron,ultronImg,hela,helaImg,ronan,ronanImg,killmonger,killmongerImg,thanos,thanosImg;

function preload(){
ironManImg = loadImage("images/ironman.jfif");
backgroundImg= loadImage("images/back.jfif");
}
function setup(){
canvas = createCanvas(800,800);
ironMan = createSprite(200,200,10,10);
ironMan.addImage(ironManImg);
ironMan.scale = 0.5;
}
function draw(){
background(backgroundImg);
drawSprites();
}