function setup(){
THREE.ImageUtils.crossOrigin='';
 var textura1 = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/crate.gif');
 var material1 = new THREE.MeshBasicMaterial({map:textura1});
 var forma1 = new THREE.BoxGeometry(6,6,1);
 malla = new THREE.Mesh(forma1, material1);

escena=new THREE.Scene();
escena.add(malla);

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
