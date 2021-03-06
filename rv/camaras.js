function setup(){
THREE.ImageUtils.crossOrigin='';
var textura = THREE.ImageUtils.loadTexture('http://thumbs.dreamstime.com/t/tablero-de-ajedrez-vac%C3%ADo-en-el-fondo-blanco-28841334.jpg');
var material=new THREE.MeshBasicMaterial({map:textura});
var forma=new THREE.BoxGeometry(1,1,0.5);
malla=new THREE.Mesh(forma,material);
malla.rotation.z=0.75;


escena=new THREE.Scene();
escena.add(malla);


var tipo_evento='onKeyDown';
var listener= function ( event ) {
  if( event.keyCode == 112)
  sel=1;
  else
  sel=2;
}
window.addEventListener(tipo_evento,listener, false );


camara=new THREE.PerspectiveCamera();
camara.position.z=5;

camara2 = new THREE.OrthographicCamera( 5 / - 2, 5 / 2, 8 / 2, 8 / - 2, 1, 1000 );
camara2.position.z=5;
camara2.position.x=1;

//5 sobre 8 es ancho contra altura
camara3 = new THREE.PerspectiveCamera( 45, 5 / 8, 1, 1000 );
camara3.position.z=5;
camara3.position.x=1;

escena.add(camara2);
escena.add(camara3);

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}



function loop(){
requestAnimationFrame(loop);

 if( sel==1)
renderer.render(escena,camara3);
else
renderer.render(escena,camara2);


}

var camara,camara2,camara3,escena,renderer,malla;
var sel;
setup();
loop();
