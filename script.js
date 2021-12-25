import interact from 'https://cdn.interactjs.io/v1.9.20/interactjs/index.js'

// LOGIN PARA REGISTRO
document.getElementsByClassName("fas fa-sync")[0].onclick = (C1)=>{
    let i = 1
    for(i = 0; i < 2; i + 1){
        console.log(i)
        document.getElementsByClassName("TopText")[0].innerHTML = 'REGISTRO'
    }
    for(;i != 1; i-1){
        console.log(i)
        document.getElementsByClassName("TopText")[0].innerHTML = 'LOGIN'
    }
}

// ELEMENTO ARRASTÁVEL
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

// MODIFICAÇÃO AUTOMÁTICA DE IDIOMAS
if (navigator.language != "pt-BR") {
    document.getElementsByClassName('Inome')[0].placeholder == "Name"
    document.getElementsByClassName('Iidade')[0].placeholder == "Age"
    document.getElementsByClassName('Isenha')[0].placeholder == "Password"
                                    }







                                


