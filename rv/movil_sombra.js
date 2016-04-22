function Tapa(){

THREE.Object3D.call(this);
THREE.ImageUtils.crossOrigin='';

var textura3 = THREE.ImageUtils.loadTexture('http://i39.servimg.com/u/f39/16/68/03/45/810.jpg');
//var textura4 = THREE.ImageUtils.loadTexture('http://i39.servimg.com/u/f39/16/68/03/45/810.jpg');

this.canon=new THREE.Mesh(new THREE.BoxGeometry(4,4,1), new THREE.MeshBasicMaterial({map: textura3}));
this.sujetador=new THREE.Mesh(new THREE.BoxGeometry(1,6,1), new THREE.MeshBasicMaterial({map: textura3}));

this.canon.position.y=0;
this.sujetador.position.y=3;

this.add(this.canon);
this.add(this.sujetador);
}

Tapa.prototype=new THREE.Object3D();

function setup(){
 var textura1 = THREE.ImageUtils.loadTexture('http://i39.servimg.com/u/f39/16/68/03/45/810.jpg');
 var material1 = new THREE.MeshBasicMaterial({map:textura1});
 var forma1 = new THREE.BoxGeometry(6,6,1);
 var abajo = new THREE.Mesh(forma1, material1);

 var textura = THREE.ImageUtils.loadTexture('http://thumbs.dreamstime.com/t/sandstone-texture-10289057.jpg');
 var forma = new THREE.CylinderGeometry( 2, 2, 1, 10 );
 var material = new THREE.MeshBasicMaterial( {map: textura} );
 var llanta1 = new THREE.Mesh( forma, material );
 
 var textura2 = THREE.ImageUtils.loadTexture('http://thumbs.dreamstime.com/t/sandstone-texture-10289057.jpg');
 var forma2 = new THREE.CylinderGeometry( 2, 2, 1, 10 );
 var material2 = new THREE.MeshBasicMaterial( {map: textura2} );
 var llanta2 = new THREE.Mesh( forma2, material2 );

var base = new THREE.Mesh(new THREE.BoxGeometry(15,10,.1), new THREE.MeshLambertMaterial({color: 0xF0D58C}));

arriba=new Tapa();
base.position.z=-1.5
abajo.position.z=-1;
llanta1.rotation.z=1.57;
llanta2.rotation.z=1.57;
llanta1.position.z=-1;
llanta2.position.z=-1;
llanta1.position.x=-3.5;
llanta2.position.x=3.5;
step=.01;

var luzPuntual=new THREE.PointLight(0xFFFFFF);
luzPuntual.position.x=30;
luzPuntual.position.y=30;
luzPuntual.position.z=30;

escena=new THREE.Scene();
escena.add(arriba);
escena.add(abajo);
escena.add(llanta1);
escena.add(llanta2);
escena.add(luzPuntual);
escena.add(base);

camara=new THREE.PerspectiveCamera();
camara.position.z=20;
camara.position.x=2;
camara.position.y=5;

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);

	renderer.shadowMapEnabled = true;
	abajo.castShadow =true;
	llanta1.castShadow =true;
	base.receiveShadow =true;
	luzPuntual.castShadow = true;
}

function loop(){
requestAnimationFrame(loop);
renderer.render(escena,camara);

if(Math.abs(arriba.rotation.z)>.4)
step=-step;

arriba.rotation.z+=step;
}

var escena,camara,renderer;
var step,arriba;

setup();
loop();
