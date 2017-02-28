import $ from 'jquery';
import Rx from 'rxjs/Rx';


// *******************  Observable from Event ************



// *********************** Click Event ***********************
const btn = $('#btn');
const btnStream$ = Rx.Observable.fromEvent(btn,'click');
btnStream$.subscribe(function(e){
	console.log(e.target.value);
	output.append(e.target.value+" ---- ");
},function(err){
	console.log(err);
},function(){
	console.log("completed");
})

// ************************input Event ****************************

const input = $('#input');
const outputinput = $('#outputinput');
const inputStream$ = Rx.Observable.fromEvent(input,'keyup')
inputStream$.subscribe(
	function(e){
		outputinput.html( "<br>");
		outputinput.html( "<h1><br>"+e.currentTarget.value);
		console.log(e.currentTarget.value );
	},function(err){
		console.log(err);
	},function(){
		console.log('completed');
	})

//******************  mouseMove *********************************

const mouseMove = $('#mouseMove'); 
const MoveStream$ = Rx.Observable.fromEvent(document,'mousemove')
MoveStream$.subscribe(
	function(e){
		mouseMove.html( "<br>");
		mouseMove.html( "X: "+ e.clientX+ ' y: '+e.clientY);
	
	},function(err){
		console.log(err);
	},function(){
		console.log('completed');
	})
//************************ observable from Array ***********************************
const array = $('#array');
var a= [1,2,3,4,5,55,4,23,12,223];
const array$ = Rx.Observable.from(a)
array$.subscribe(
	function(value){
		array.append(value+" , ")
		console.log(value);
	},function(err){
		console.log(err);
	},function(){
		console.log('completed');
	})


// ******************** observable object **********
var post =[ { name :"abdullah",age:32},
			{ name :"ali",age:21},
			{ name :"ahmed",age:12}
]

const obj = $('#obj');
const obj$ = Rx.Observable.from(post)
obj$.subscribe(
	value => {
		obj.append('name : '+value.name+"  , Age : "+ value.age +"<br/>");
		console.log(value);
	},
	err => {
		console.log(err);
	},
	complete => {
		console.log('completed');
	}
	)
