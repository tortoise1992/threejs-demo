/**
 * Created by Administrator on 2017/3/15.
 */
var w=window.innerWidth,
    h=window.innerHeight;
var scene,camera,renderer
function init() {
    initScene();
    initCamera();
    initRenderer();

    var planeG=new THREE.PlaneGeometry(40,20,3,3);
    var planeM=new THREE.MeshLambertMaterial(0xcccccc);
    var plane=new THREE.Mesh(planeG,planeM);
    plane.rotation.x=-0.5*Math.PI;
    scene.add(plane);

    var spotLight=new THREE.SpotLight(0xff0000);
    spotLight.position.set(0,40,0)
    scene.add(spotLight)

    document.body.appendChild(renderer.domElement);
    renderer.render(scene,camera);
}



function initScene() {
    scene=new THREE.Scene();
}
function initCamera() {
    camera=new THREE.PerspectiveCamera(45,w/h,0.1,1000);
    camera.position.set(50,50,50);
    camera.lookAt(scene.position)
}
function initRenderer() {
    renderer=new THREE.WebGLRenderer();
    renderer.setClearColor(0xeeeeee);
    renderer.setSize(w,h);
}

window.onload=init;