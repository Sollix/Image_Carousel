/*
inputs: next, prev, image rating
outputs: img, bonus
global var: current img index
events: previous click, next click, drowdown vote
*/
imgArray = ['image_1.jpg', 'image_2.jpg','image_3.jpg','image_4.jpg', 'image_5.jpg', 'image_6.jpg'];

currentindex = 0;
console.log(currentindex);

$('#next').on('click',function(event){
		if (currentindex < 5){
		currentindex = currentindex + 1;
		$('#image-to-vote-on').attr('src','images/' + imgArray[currentindex])
		}else {
			$('#image-to-vote-on').attr('src','images/' + imgArray[imgArray.length - 1]);
		}
		console.log(currentindex);
	});


$('#prev').on('click',function(event){
		if (currentindex > 0){
		currentindex = currentindex - 1;
		$('#image-to-vote-on').attr('src','images/' + imgArray[currentindex]);
		$('#next').css('color','black');
		}else{
			$('#image-to-vote-on').attr('src','images/' + imgArray[0]);
		}
	});