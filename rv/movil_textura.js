function setup(){
THREE.ImageUtils.crossOrigin='';
//TEXTURAS 
/* var textura1 = THREE.ImageUtils.loadTexture('http://i39.servimg.com/u/f39/16/68/03/45/810.jpg');
 var material1 = new THREE.MeshBasicMaterial({map:textura1});
 var forma1 = new THREE.BoxGeometry(6,6,1);
 var abajo = new THREE.Mesh(forma1, material1);*/

 //var textura2 = THREE.ImageUtils.loadTexture('http://i39.servimg.com/u/f39/16/68/03/45/810.jpg');
var forma = new THREE.CylinderGeometry( 2, 2, 1, 10 );
var material = new THREE.MeshBasicMaterial( {color: 0x0000ff} );
var llanta1 = new THREE.Mesh( forma, material );
//POSICIONES DE LOS ELEMENTOS
//abajo.position.z=-1;
llanta1.rotation.z=1.57;
llanta1.position.z=-1;
llanta1.position.x=-3.5

escena=new THREE.Scene();
escena.add(llanta1);

camara=new THREE.PerspectiveCamera();
camara.position.z=20;
camara.position.x=2;
camara.position.y=5;

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}

function loop(){
requestAnimationFrame(loop);
renderer.render(escena,camara);
}

var escena,camara,renderer;
var step,arriba;

setup();
loop();
