/*
* @Author: Galena
* @Date:   2019-03-23 19:35:34
* @Last Modified by:   Galena
* @Last Modified time: 2019-03-25 15:15:34
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
function setTime() {
	time = window.setInterval(function(){
		moveImage(n)
		n = n+1
		if(n===4){n=0}
	},2000)
}

$('#box').on('mouseover', function() {
	window.clearInterval(time)
}).on('mouseout', function() {
	setTime()
})

for (let i=0; i<buttons.length; i++) {
	$(buttons[i]).on('click', function(e){
		moveImage(e.target.id)
		n = i
	})
}


//*****************************************************************
var space = -960
var mid = 4
function moveImage2(direct) {
	if (direct === 'right') {
		mid = mid +1 
		space = space - 960
		$('#image2').css('transform','translateX('+space+'px)')
		if (mid === 9) {
			space = -960
			window.setTimeout(function() {
				$('#image2').removeClass('image2Toggle')
				$('#image2').css('transform','translateX('+space+'px)')
				window.setTimeout(function() {
					$('#image2').addClass('image2Toggle')
				},100)
				// $('#image2').addClass('image2Toggle')
			},500)
			mid = 4
		} 
	} else if (direct === 'left') {
		mid = mid - 1
		space = space + 960
		$('#image2').css('transform','translateX('+space+'px)')
		if (mid === 3) {
			space = -4800
			window.setTimeout(function() {
				$('#image2').removeClass('image2Toggle')
				$('#image2').css('transform','translateX('+space+'px)')
				window.setTimeout(function() {
					$('#image2').addClass('image2Toggle')
				},100)
			},500)
			mid = 8
		}
	}
}
function setTime2() {
	time2 = window.setInterval(function(){
		moveImage2('right')
	},2000)
}


$('#rightButton').on('click', function() {
	moveImage2('right')
})
$('#leftButton').on('click', function() {
	moveImage2('left')
})

$('#box2').on('mouseover', function() {
	window.clearInterval(time2)
}).on('mouseout', function() {
	setTime2()
})

//***************************************************
setTime()
setTime2()