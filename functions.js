const element = document.getElementById("dice");
element.addEventListener("click", getRandomNumber);

function getRandomNumber(){
	var RanNum1 = Math.floor(Math.random() * 6) + 1;
	var RanNum2 = Math.floor(Math.random() * 6) + 1;
	
	document.getElementById('dice').innerHTML = '<img src="./img/dice' + RanNum1 + '.png">';
	document.getElementById('dice').innerHTML = '<img src="./img/dice' + RanNum2 + '.png">';

}