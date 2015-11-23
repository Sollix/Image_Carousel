/*
inputs: next, prev, image rating
outputs: img, bonus
global var: current img index
events: previous click, next click, drowdown vote
*/
//global properties
imgArray = ['image_1.jpg', 'image_2.jpg','image_3.jpg','image_4.jpg', 'image_5.jpg', 'image_6.jpg'];

currentindex = 0;
console.log(currentindex);

//next and previous buttons
$('#next').on('click',function(event){
		if (currentindex < 4){
		currentindex = currentindex + 1;
		$('#image-to-vote-on').attr('src','images/' + imgArray[currentindex])
		}else {
			$('#image-to-vote-on').attr('src','images/' + imgArray[imgArray.length - 1]);
			$('#next').css('color','grey');
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
			$('#prev').css('color','grey');
		}
	});

//image scoring

var scoreArray = [];

// $('#your-vote').select(function(event){
// 	scoreArray[currentindex]=$('#your-vote').val();
// 	console.log(scoreArray);
// 	//currentindex = currentindex + 1;
// 	$('#image-to-vote-on').attr('src','images/' + imgArray[currentindex])
// }); 
	
$('#your-vote').on('change', function(){
	scoreArray[currentindex]=$('#your-vote').val();
	if (currentindex < 5){
		currentindex = currentindex + 1;
		$('#image-to-vote-on').attr('src','images/' + imgArray[currentindex])
		}else {
			$('#image-to-vote-on').attr('src','images/' + imgArray[imgArray.length - 1]);
			scoreArray.forEach(function (scoreArray){
				scoreArray += scoreArray;
			});
			console.log(scoreArray);
		}
}); 
	