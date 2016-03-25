function setup(){
THREE.ImageUtils.crossOrigin='';
 var textura = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/crate.gif');
 var material = new THREE.MeshBasicMaterial({map:textura});
 var forma = new THREE.BoxGeometry(6,6,1);
 malla = new THREE.Mesh(forma, material);

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
