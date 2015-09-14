(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var input = document.getElementById('input');
var list = document.getElementById('list');
var numItems = document.getElementById('numItems');
var enterButton = document.getElementById('enterButton');
var reset = document.getElementById('reset');
var count = 0;
var listArray = [];

enterButton.addEventListener('click', function () {

	console.log(input.value);
	listArray.push(input.value);
	console.log(listArray);
	list.innerHTML += '☞ ' + listArray[count] + '<br />';
	// localStorage.setItem('listArray', JSON.stringify(listArray));
	list.style.border = '.1em solid green';
	list.style.marginRight = '2em';
	list.style.marginLeft = '2em';
	list.style.textDecoration = 'none';
	count++;
	numItems.innerHTML = '<br />' + count + ' Items To-Do';
	input.value = '';
});
reset.addEventListener('click', function () {
	var result = window.confirm('Are you sure you want to clear?');
	if (result === true) {
		listArray = [];
		input.value = '';
		list.innerHTML = '';
		count = 0;
		numItems.innerHTML = '0 Items So Far';
	} else {}
});

// list.addEventListener('hover', function (){

// 	list.style.textDecoration='line-through';
// 	list.innerHTML=listArray;
// 	count=count-1;
// 	numItems.innerHTML='<br />'+count+' Items To-Do';

// });

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map