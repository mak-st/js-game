const cat = document.getElementById('cat');
const c = cat.getContext('2d');

var catImg = new Image();
catImg.src = 'img/cat1.png';


const cw = cat.width;
const ch = cat.height;

var started = false;

class Rect
{
	constructor(x, y, w, h)
	{
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}
	get left()
	{
		return this.x - this.w / 2;
	}
	get right()
	{
		return this.x + this.w / 2;
	}
	get top()
	{
		return this.y - this.h / 2;
	}
	get bottom()
	{
		return this.y + this.h / 2;
	}

}

var startBtn = new Rect(cw/2, ch*3/4, 200, 100);

function drawButton(button) {
	drawRect('black', button.left, button.top, button.w, button.h);
	c.fillStyle = 'white';
	c.font = '30px Arial';
	c.textAlign = 'center';
	c.textBaseline = 'middle';
	c.fillText('Start Game', button.x, button.y);
}

function drawBackground() {
	drawRect('white', 0, 0, cw, ch);
}

function draw() {
	drawBackground();
	if (started == false) {
		startPage();
	} else {
		game();
	}
		
}
var i = 0;
function catTalk() {
	i++;
	delayer = 25;
	if (i%(delayer*2) == delayer) {
		catImg.src = 'img/cat1.png';
	} else if (i%(delayer*2) == 0) {
		catImg.src = 'img/cat2.png';
	}
	c.drawImage(catImg, cw/2 - 80, ch/3);
}

function drawRect(color, x, y, w, h) {
	c.fillStyle = color;
	c.fillRect(x,y,w,h);
}

function game() {
	c.fillStyle = 'black';
	c.font = '30px';
	c.textAlign = 'center';
	c.textBaseline = 'middle';
	c.fillText('Cat: Meow!', cw / 2, ch *2 / 3);
	setInterval(catTalk(), 1000);
}

function startPage() {
	drawBackground();
	drawButton(startBtn);
}

function update() {
	draw();
	requestAnimationFrame(update);
}

update();



cat.addEventListener('click', event => {
	if (event.offsetX >= startBtn.left &&
		event.offsetX <= startBtn.right &&
		event.offsetY >= startBtn.top &&
		event.offsetY <= startBtn.bottom) {
		started = true;
	}
});