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

// PLANO DE FUNDO UTILIZANDO THREE.JS
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight,1,1000);
camera.position.z = 10;
camera.position.x = Math.PI/2;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const starGeometry = new THREE.SphereGeometry();
    for(let i = 0; i < 6000; i++) {
       const star = new THREE.Vector3(
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600- 300
        );
        star.velocity = 0;
        star.acceleration = 0.02;
        starGeometry.verticesNeedUpdate = true;
        }

let sprite = new THREE.TextureLoader().load('star.png');
let starMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 0.7,
    map: sprite
});

const stars = new THREE.Points(starGeometry,starMaterial);
scene.add(stars);

animate();

function animate() {

    starGeometry.vertices.forEach(p=>{
        p.velocity += p.acceleration;
        p.y -= p.velocity;
    if( p.y < -200) {
        p.y = 200;
        p.velocity = 0
    }
});

    starGeometry.vertices.push(star);
    stars.rotation.y += 0.002;
    stars.rotation.x = -1.5;
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
}





                                


