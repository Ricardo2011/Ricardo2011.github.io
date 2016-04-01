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

function Abajo(){

THREE.Object3D.call(this);
THREE.ImageUtils.crossOrigin='';

var textura1 = THREE.ImageUtils.loadTexture('http://i39.servimg.com/u/f39/16/68/03/45/810.jpg');
var textura = THREE.ImageUtils.loadTexture('http://thumbs.dreamstime.com/t/sandstone-texture-10289057.jpg');
//var textura4 = THREE.ImageUtils.loadTexture('http://i39.servimg.com/u/f39/16/68/03/45/810.jpg');

this.abajo=new THREE.Mesh(new THREE.BoxGeometry(4,4,1), new THREE.MeshBasicMaterial({map: textura1}));
this.llanta1=new THREE.Mesh(new THREE.CylinderGeometry( 2, 2, 1, 10 ), new THREE.MeshBasicMaterial({map: textura}));
this.llanta2=new THREE.Mesh(new THREE.CylinderGeometry( 2, 2, 1, 10 ), new THREE.MeshBasicMaterial({map: textura}));

this.abajo.position.z=-1;
this.llanta1.rotation.z=1.57;
this.llanta1.position.z=-1;
this.llanta1.position.x=-3.5
this.llanta2.rotation.z=1.57;
this.llanta2.position.z=-1;
this.llanta2.position.x=3.5;

this.add(this.abajo);
this.add(this.llanta2);
}

Abajo.prototype=new THREE.Object3D();

function setup(){
THREE.ImageUtils.crossOrigin='';
//TEXTURAS 
 /*var textura1 = THREE.ImageUtils.loadTexture('http://i39.servimg.com/u/f39/16/68/03/45/810.jpg');
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
 var llanta2 = new THREE.Mesh( forma2, material2 );*/
 
//POSICIONES DE LOS ELEMENTOS
arriba = new Tapa();
abajo1 = new Abajo();
/*//abajo.position.z=-1;
llanta1.rotation.z=1.57;
llanta1.position.z=-1;
llanta1.position.x=-3.5
llanta2.rotation.z=1.57;
llanta2.position.z=-1;
llanta2.position.x=3.5;
*/
step=.01;

escena=new THREE.Scene();
escena.add(arriba);
escena.add(abajo1);
/*escena.add(llanta1);
escena.add(llanta2);*/
camara=new THREE.PerspectiveCamera();
camara.position.z=20;
camara.position.x=2;
camara.position.y=5;

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);

clock=new THREE.Clock();
controls=new THREE.FirstPersonControls(abajo1);
controls.movementSpeed=10;
controls.lookSpeed=0.05;
controls.noFly=true;
controls.lookVertical=false;

}

function loop(){
requestAnimationFrame(loop);
renderer.render(escena,camara);
controls.update(clock.getDelta());

if(Math.abs(arriba.rotation.z)>.4)
step=-step;

arriba.rotation.z+=step;
}

var escena,camara,renderer;
var step,arriba;
var clock,controls;

setup();
loop();
