localStorage.setItem('threejs', background)

function background() {
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

    let geometry = new THREE.DodecahedronGeometry(size, 1);
let vertices = geometry.attributes.position.array;
for(let i = 0; i < geometry.attributes.position.count; i++){
  vertices[ i * 3 + 0 ] += 0 - Math.random() * (size / 4);
  vertices[ i * 3 + 1 ] += 0 - Math.random() * (size / 4);
  vertices[ i * 3 + 2 ] += 0 - Math.random() * (size / 4);
}
geometry.attributes.position.needsUpdate = true;

    starGeometry.verticesNeedUpdate = true;
    stars.rotation.y += 0.002;
    stars.rotation.x = -1.5;
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
}
}