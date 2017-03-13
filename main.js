var s = Snap('#svg');
var svg = document.getElementById('svg');
var style = {
	fill: randFill(1,6),
	stroke: '#eee',
	strokeWidth: 5	
};

s.click(function(e){
	style.fill = randFill(1,6);
	createCircle(e);
});

function createCircle(e) {
	if(e.target.tagName == 'svg') {
		var circle = s.circle(e.offsetX,e.offsetY,35);
		circle.attr(style);
	} else {
		console.log('eee blet');
	}
	circle.hover(function(){
		circle.animate(circle.attr({stroke:'silver'}), 500)
		console.log('hover');
	});
	circle.unhover(function(){
		circle.animate(circle.attr({stroke:'#eee'}), 500);
		console.log('unhover');
	});
};

function randFill(min,max) {
	var num = Math.floor(Math.random() * (max - min)) + min;
	var color;
	if (num == 1) color = 'tomato';
	if (num == 2) color = 'lightblue';
	if (num == 3) color = 'lightgreen';
	if (num == 4) color = 'coral';
	if (num == 5) color = 'white';
	return color;
};