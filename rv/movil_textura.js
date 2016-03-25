/*function Tapa(){

THREE.Object3D.call(this);

this.canon=new THREE.Mesh(new THREE.BoxGeometry(4,4,1));
this.sujetador=new THREE.Mesh(new THREE.BoxGeometry(1,6,1));

this.canon.position.y=0;
this.sujetador.position.y=3;

this.add(this.canon);
this.add(this.sujetador);
}

Tapa.prototype=new THREE.Object3D();
*/
function setup(){
THREE.ImageUtils.crossOrigin='';
var textura1 = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/crate.gif');
var forma1= new THREE.Mesh(new THREE.BoxGeometry(1,1,1));
var material1= new THREE.MeshBasicMaterial({map:textura1});
var abajo = new THREE.Mesh(forma1, material1);
//var llanta1=new THREE.Mesh(new THREE.CylinderGeometry(2,2,1,10));
//var llanta2=new THREE.Mesh(new THREE.CylinderGeometry(2,2,1,10));

//arriba=new Tapa();
//abajo.position.z=-1;
//llanta1.rotation.z=1.57;
//llanta2.rotation.z=1.57;
//llanta1.position.z=-1;
//llanta2.position.z=-1;
//llanta1.position.x=-3.5;
//llanta2.position.x=3.5;
//step=.01;
escena=new THREE.Scene();
//escena.add(arriba);
escena.add(abajo);
//escena.add(llanta1);
//escena.add(llanta2);

camara=new THREE.PerspectiveCamera();
camara.position.z=5;
//camara.position.z=20;
//camara.position.x=2;
//camara.position.y=5;

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}

function loop(){
requestAnimationFrame(loop);
renderer.render(escena,camara);

//if(Math.abs(arriba.rotation.z)>.4)
//step=-step;

//arriba.rotation.z+=step;
}

var escena,camara,renderer;
var step,arriba;

setup();
loop();
