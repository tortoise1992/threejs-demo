/**
 * Created by Administrator on 2017/3/14.
 */
var w=window.innerWidth,
    h=window.innerHeight;
function init() {
    var scene=new THREE.Scene();
    var camera=new THREE.PerspectiveCamera(45,w/h,0.1,1000);
    var renderer=new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000);
    renderer.setSize(w,h);
    var axes=new THREE.AxisHelper(20);
    scene.add(axes)
    // var geo=new THREE.CubeGeometry(4,4,4);
    var geo=new THREE.SphereGeometry(6.5,20,20);
    var mat=new THREE.MeshLambertMaterial();
    var cube=new THREE.Mesh(geo,mat);
    cube.position.set(2,2,2);
    scene.add(cube);

    camera.position.set(50,50,50);
    camera.lookAt(scene.position);
    // var pointLight=new THREE.SpotLight(0xffffff);
    // pointLight.position.set(10,10,10);
    // scene.add(pointLight);

    // var ambis=new THREE.DirectionalLight(0xff0000);
    // ambis.position.set(40,40,40);
    // scene.add(ambis);

    var pointLight=new THREE.PointLight(0xff0000);
    pointLight.position.set(10,50,10);
    // pointLight.distance=30;
    pointLight.intensity=2;
    scene.add(pointLight)
    // var hemiLight=new THREE.HemisphereLight(0xffffff,0xfee000,0.6);
    // hemiLight.position.set(20,10,10);
    // scene.add(hemiLight);

    document.body.appendChild(renderer.domElement);

    renderer.render(scene,camera);


}

window.onload=init;