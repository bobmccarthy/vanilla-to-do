'use strict';

var input = document.getElementById('input');
var list = document.getElementById('list');
var numItems = document.getElementById('numItems');
var enterButton = document.getElementById('enterButton');
var reset = document.getElementById('reset');
var count = 0;
var listArray = [];



enterButton.addEventListener('click', function (){
	
	console.log(input.value);
	listArray.push(input.value);
	console.log(listArray);
	list.innerHTML+='☞ '+listArray[count]+'<br />';
	// localStorage.setItem('listArray', JSON.stringify(listArray));
	list.style.border= '.1em solid green';
	list.style.marginRight= '2em';
	list.style.marginLeft= '2em';
	list.style.textDecoration= 'none';
	count++;
	numItems.innerHTML='<br />'+count+' Items To-Do';
	input.value='';
});
reset.addEventListener('click', function (){
	var result = window.confirm('Are you sure you want to clear?');
	if (result===true){
		listArray= [];
		input.value='';
		list.innerHTML='';
		count=0;
		numItems.innerHTML='0 Items So Far';
	}
	else{

	}
	
});

// list.addEventListener('hover', function (){
	
// 	list.style.textDecoration='line-through';
// 	list.innerHTML=listArray;
// 	count=count-1;
// 	numItems.innerHTML='<br />'+count+' Items To-Do';
	
// });
