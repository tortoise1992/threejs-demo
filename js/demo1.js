/**
 * Created by Administrator on 2017/3/8.
 */
window.onload=init;
var w=window.innerWidth,
    h=window.innerHeight;

function init() {
    var stat=initStats();
    var scene=new THREE.Scene();
    var camera=new THREE.PerspectiveCamera(45,w/h,0.1,1000);
    var renderer=new THREE.WebGLRenderer();
    renderer.setClearColor(0xeeeeee);
    renderer.setSize(w,h);
    renderer.shadowMapEnabled=true;

    var axes=new THREE.AxisHelper(20);
    scene.add(axes);

    var planeG=new THREE.PlaneGeometry(40,20,1,1);
    var planeM=new THREE.MeshLambertMaterial({color:0xcccccc});
    var plane=new THREE.Mesh(planeG,planeM);
    plane.rotation.x=-0.5*Math.PI;
    plane.position.x=15;
    scene.add(plane);
    plane.receiveShadow=true;

    var cubeG=new THREE.CubeGeometry(4,4,4);
    var cubeM=new THREE.MeshLambertMaterial({color:0xff0000})
    var cube=new THREE.Mesh(cubeG,cubeM);
    scene.add(cube);
    setPosition(cube,-4,3,0);
    // cube.castShadow=true;

    var sephreG=new THREE.SphereGeometry(4,20,20);
    var sephreM=new THREE.MeshLambertMaterial({color:0xffe000})
    var sephre=new THREE.Mesh(sephreG,sephreM);
    scene.add(sephre)
    setPosition(sephre,30,4,2)
    sephre.castShadow=true;

    var spotLight=new THREE.PointLight(0xffffff);
    spotLight.distance=200;
    spotLight.intensity=4;
    scene.add(spotLight);
    setPosition(spotLight,0,60,50);
    // spotLight.castShadow=true;

    camera.position.x=-30;
    camera.position.y=40;
    camera.position.z=30;
    camera.lookAt(scene.position);
    document.body.appendChild(renderer.domElement);
    // var step=0;
    
    // var controls=new function () {
    //     this.rotateSpeed=0.02;
    //     this.bounceSpeed=0.03;
    // }
    var controls = new function () {
        this.rotationSpeed = 0.02;
        this.bouncingSpeed = 0.03;
    };
    // var gui = new dat.GUI();
    // gui.add(controls, 'rotationSpeed', 0, 0.5);
    // gui.add(controls, 'bouncingSpeed', 0, 0.5);

    // var gui=new dat.GUI();
    // gui.add(controls,'rotateSpeed',0,0.5)
    // gui.add(controls,'bounceSpeed',0,0.5)
    function renderScene() {
        stat.update();

        cube.rotation.x +=controls.rotationSpeed;
        cube.rotation.y +=controls.rotationSpeed;
        cube.rotation.z +=controls.rotationSpeed;
        // camera.position.y +=0.5;
        // step +=0.04;
        // sephre.position.x=20+(10*Math.cos(step));
        // sephre.position.y=2+(10*Math.abs(Math.sin(step)));
        requestAnimationFrame(renderScene)
        renderer.render(scene,camera);
    }
    renderScene();

    function initStats() {
        var stats=new Stats();
        stats.setMode(0);
        stats.domElement.style.position='absolute';
        stats.domElement.style.left='0px';
        stats.domElement.style.top='0px';
        document.getElementById('stats-output').appendChild(stats.domElement);
        return stats;
    }


}

function setPosition(obj,x,y,z) {
    obj.position.x=x;
    obj.position.y=y;
    obj.position.z=z;
}

