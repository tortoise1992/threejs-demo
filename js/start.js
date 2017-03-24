/**
 * Created by Administrator on 2017/3/24.
 */
var w=window.innerWidth,h=window.innerHeight;
var stat=initStats();
var scene=new THREE.Scene();

var camera=new THREE.PerspectiveCamera(45,w/h,1,1000);
camera.position.set(-30,80,30);
camera.lookAt(scene.position);

var renderer=new THREE.WebGLRenderer();
renderer.setClearColor(0xcccccc);
renderer.setSize(w,h);
document.body.appendChild(renderer.domElement);



var controls=new function () {
    this.rotatespeed=0.02;
    this.addCube=function () {
        var cubesize=Math.ceil(Math.random()*3);
        var cubeg=new THREE.CubeGeometry(cubesize,cubesize,cubesize);
        var cubeM=new THREE.MeshLambertMaterial({color:Math.random()*0xffffff});
        var cube=new THREE.Mesh(cubeg,cubeM);
        cube.name='cube'+scene.children.length;
        cube.position.x=-30+Math.round(Math.random()*60);
        cube.position.y=Math.round(Math.random()*20);
        cube.position.x=-20+Math.round(Math.random()*40);
        scene.add(cube);
        this.numberOfObjects=scene.children.length;
    };

}
var gui=new dat.GUI();
gui.add(controls,'rotatespeed',0,0.5);
gui.add(controls,'addCube');



var planeG=new THREE.PlaneGeometry(60,40,1,1);
var planeM=new THREE.MeshLambertMaterial(0xffffff);
var plane=new THREE.Mesh(planeG,planeM);
scene.add(plane);
plane.rotation.x=-0.5*Math.PI;
var cubeg=new THREE.CubeGeometry(4,4,4);
var mat=new THREE.MeshLambertMaterial({color:0xff0000});
var cube=new THREE.Mesh(cubeg,mat);
cube.position.set(0,10,0);
scene.add(cube);
console.log(scene.children);
var spot=new THREE.SpotLight(0xffffff);
spot.position.set(-40,60,-10);
scene.add(spot);
// var ambil=new THREE.AmbientLight(0xffffff);
// scene.add(ambil);
scene.fog=new THREE.Fog(0xffffff,0.015,100);

function render() {
    stat.update();
    // rotate the cubes around its axes
    scene.traverse(function (e) {
        if (e instanceof THREE.Mesh && e != plane) {

            e.rotation.x += controls.rotatespeed;
            e.rotation.y += controls.rotatespeed;
            e.rotation.z += controls.rotatespeed;
        }
    });
    requestAnimationFrame(render)
    renderer.render(scene,camera);
}

render();
