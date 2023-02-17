function del(){
			var value=document.getElementById('screen').value;
			document.getElementById('screen').value=value.substr(0,value.length-1);
		}

		var two = document.getElementById('two');
		two.addEventListener('click',function(){
			var body=document.querySelector('body');
			var toggle=document.getElementById('circle');
			body.classList.add('active1');
			body.classList.remove('active2');
			toggle.style.left='36%';
		})
		var one=document.getElementById('one');
		one.addEventListener('click',function(){
			var body=document.querySelector('body');
			var toggle=document.getElementById('circle');
			body.classList.remove('active1');
			body.classList.remove('active2');
			toggle.style.left='0';
		})
		var three=document.getElementById('three');
		three.addEventListener('click',function(){
			var body=document.querySelector('body');
			var toggle=document.getElementById('circle');
			body.classList.add('active2');
			body.classList.remove('active1');
			toggle.style.left='65%';
		})

		const click1 = document.querySelector('one')
		const click2 = document.querySelector('two')
		const click3 = document.querySelector('three')
		// const screen = document.querySelector(.'')

		click1.addEventListener('click', function(){
console.log("CLICK 1 HAS BEEN CLICKED");

		})

		click2.addEventListener('click', function(){
			console.log("CLICK 2 HAS BEEN CLICKED");
		})

		click3.addEventListener('click', ()=>{
			console.log("CILCK THREE HAS BEEEN CLICKED");
		})


// 		let previousElement;
// function del() {
//     if (previousElement) {
//         previousElement.parentNode.removeChild(previousElement);
//     }
//     previousElement = event.target;
// }