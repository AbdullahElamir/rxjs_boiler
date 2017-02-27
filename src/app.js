import $ from 'jquery';
import Rx from 'rxjs/Rx';


// *******************  Observable fromEvent ************



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

// ************************************************************
