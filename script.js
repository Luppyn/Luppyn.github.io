import interact from 'https://cdn.interactjs.io/v1.9.20/interactjs/index.js'

const IntPosition = {x: 0, y: 0}
interact(".box")
	.draggable({
		listeners: {
			move(event) {
				IntPosition.x += event.dx
				IntPosition.y += event.dy
				event.target.style.transform = `translate(${IntPosition.x}px, ${IntPosition.y}px)`
			},
		 }
	})

document.getElementsByClassName("fas fa-sync")[0].onclick = (C1)=>{
    for(let i = 1; i = 1; i+=1){
        console.log(i)
        document.getElementsByClassName('TopText')[0].innerHTML = 'REGISTRO';
    }
}