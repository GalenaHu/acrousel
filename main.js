/*
* @Author: Galena
* @Date:   2019-03-23 19:35:34
* @Last Modified by:   Galena
* @Last Modified time: 2019-03-23 22:03:34
*/
var buttons = $('#buttonWrapper > div')
var statusNow
var time
var n = 1
function moveImage(number) {
	$('#image').removeClass(statusNow)
	$('#image').addClass('status'+number)
	statusNow = 'status'+number
	$('.button').removeClass('buttonActive')
	$(buttons[number]).addClass('buttonActive')
}


for (let i=0; i<buttons.length; i++) {
	$(buttons[i]).on('click', function(e){
		moveImage(e.target.id)
		n = i
	})
}

function setTime() {
	time = window.setInterval(function(){
		moveImage(n)
		n = n+1
		if(n===4){n=0}
	},1000)
}
setTime()
$('#box').on('mouseover', function() {
	window.clearInterval(time)
})
$('#box').on('mouseout', function() {
	setTime()
})