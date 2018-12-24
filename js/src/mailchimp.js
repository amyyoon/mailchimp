
//gnb Li에 마우스오버 시, 색상 변경
var ul = document.querySelector('ul');

ul.addEventListener('mouseover', withLinkEl(coloringHandler));
ul.addEventListener('mouseout', withLinkEl(decoloringHandler));

function coloringHandler() {
  this.dataset.initialInlineColor = this.style.color;
  this.style.color = 'red';
}

function decoloringHandler() {
  this.style.color = this.dataset.initialInlineColor;
}

function withLinkEl(fn) {
  return function (e) {
    if (e.target.tagName !== 'A') return;
    fn.call(e.target);
  };
}


//gnb Li에 마우스오버 시, ol보여주기

/*Problem: 
Basically what you have done is dealing with an array as a single element 
because of getElementsByTagName returns an array of ol in the whole page.

Solve: 
1. you need to get the nested ol inside the li 
that's being hovered using -event.target to get the clicked li. - querySelector to get the ol under that li. 

2. you need the ol to be displayed/removed depending on the event.

var ul = document.querySelector('.gnb');
var li = ul.children;
var sub = document.getElementsByTagName('ol');
var i;

for(i=0; i<li.length; i++){
	li[i].addEventListener('mouseenter', myFunction(myshow));
	li[i].addEventListener('mouseleave', myFunction(myhide));
}

function myshow() {
  sub.style.display = 'block'
}

function myhide() {
  sub.style.display = 'none'
}

function myFunction(fn) {
		return function (e) {
  		if (e.target.type !== "mouseenter") return;
    		fn.call(e.target)
			}; 
	 	}

*/

var ul = document.querySelector('.gnb');
var li = ul.children;

for (i = 0; i < li.length; i++) {
  li[i].addEventListener('mouseenter', mouseenter);
  li[i].addEventListener('mouseleave',mouseleave );
}

function mouseenter(event) {
	var ol = event.target.querySelector('ol');
  if(ol){
    ol.style.display = 'block';
  }
}

function mouseleave(event) {
	var ol = event.target.querySelector('ol');
  if(ol){
    ol.style.display = 'none';
  }
}

//feedback 클릭 시, modal display:block

var feedback = document.getElementsByClassName('feedback')[0];
var modal = document.getElementsByClassName('modal')[0];
feedback.addEventListener('click', function myModal() {
     modal.style.display = "block";
 }, false);


//modal close button 클릭 시, modal display:none

var modalClose = document.getElementsByClassName('modalClose')[0];
modalClose.addEventListener('click',function myModalClose(){
	modal.style.display = "none";
},false);


//chat 클릭 시, chatting message form

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// function submitForm() {
// 	alert('Thank you for your message. We will get back to you shortly.')
// }

var textarea = document.getElementsByTagName('textarea')[0];
var btn=document.getElementsByClassName('btn')[0];
btn.addEventListener('click', function submitForm() {
     if(textarea.val==" "){
     	alert('please type message')
     }else{
     	alert('Thank you for your message. We will get back to you shortly.')
     }
 });

//ui-menu 클릭 시,  gnb display:blcok
var uiMenu = document.getElementsByClassName('ui-menu')[0];
var gnb = document.getElementsByClassName('gnb')[0];
var line1=document.getElementsByClassName('ui-menu-line')[0];
var line2=document.getElementsByClassName('ui-menu-line')[1];
var line3=document.getElementsByClassName('ui-menu-line')[2];


uiMenu.addEventListener('click', function gnbShow() {
     gnb.classList.toggle('gnbshow')
     line1.classList.toggle('x1');
     line2.classList.toggle('x2');
     line3.classList.toggle('x3');
 })

/*
 function myFunction(){
  for( i = 0; i < li.length; i++){
  	if (li[i].type === "mouseenter") {
  	li.addEventListener('mouseover', myFunction);
 		sub[i].setAttribute('class', 'show') 
 	} 
 	// else{
 	// 	li.addEventListener('mouseleave', myFunction);
 	// 	sub[i].removeAttribute('class', 'show') 
 	// }
  }	
 }

*/


/*
function myFunction(){
 for( i = 0; i < li.length; i++){
 	if (li[i].type === "mouseenter") {
		sub[i].setAttribute('class', 'show'); 
	} else{

		for(i=0; i<li.length; i++){
			var t = sub[i].getAttribute('class').split(' ');
			console.log(t);
			for(var j=0; j<t.length; j++){
				if(t[j] == 'show'){
					var k = t.splice(t[j],1);
					sub[i].setAttribute('class', k);
				}
				console.log(k);
			}

			// console.log( sub[i] );

		}
	}
 }	
}
*/




/*
function myFunction(e) {
  if (e.type === "mouseenter") {
    sub.setAttribute('class', 'show') 
	} else {
  	sub.removeAttribute('class', 'show') 
	}
}
*/

/*
function subshow(e) {
  if (e.type === "mouseover") {
    sub.setAttribute("class", "show");
	} else {
  	sub.setAttribute("class", "sub");
	}
}

// li.addEventListener('mouseover', subshow);
// li.addEventListener('mouseleave', subshow);


 for(i=0; i<li.length; i++){
 	var selectedLi = document.getElementsByTagName('li')[i];
	var sub = document.getElementsByTagName('ol')[i];
	selectedLi.addEventListener('mouseover', subshow);
	selectedLi.addEventListener('mouseleave', subshow);
 }

*/

// var i;
// var li = document.getElementsByTagName('LI');
 
// for(i=0; i<li.length; i++){
  	
//  	li[i].onmouseover = function withLink(){
//  		this.style.display = 'block';
//  		// li.this.style.display = 'block';
//  	}
//  }



















