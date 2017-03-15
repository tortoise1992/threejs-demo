/**
 * Created by Administrator on 2017/3/14.
 */
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
    // var geo=new THREE.SphereGeometry(6.5,20,20);
    // var mat=new THREE.MeshLambertMaterial();
    // var cube=new THREE.Mesh(geo,mat);
    // cube.position.set(2,2,2);
    // scene.add(cube);
    //
    // for(var i=0;i<cube.geometry.faces.length;i++){
    //     var face=cube.geometry.faces[i];
    //     var arrow=new THREE.ArrowHelper(face.normal,face.centerline,2,0x000000);
    //     cube.add(arrow)
    // }
    var group=new THREE.Mesh();
    var mats=[];
    mats.push(new THREE.MeshLambertMaterial({color:0x009e60}));
    mats.push(new THREE.MeshLambertMaterial({color:0x0a9e60}));
    mats.push(new THREE.MeshLambertMaterial({color:0x009e20}));
    mats.push(new THREE.MeshLambertMaterial({color:0xff9e60}));
    mats.push(new THREE.MeshLambertMaterial({color:0x0dde60}));
    mats.push(new THREE.MeshLambertMaterial({color:0x009ecc}));
    var faceMat=new THREE.MeshFaceMaterial(mats);
    for(var x=0;x<3;x++){
        for(var y=0;y<3;y++){
            for(var z=0;z<3;z++){
                var cubegeo=new THREE.BoxGeometry(2,2,2);
                var cube=new THREE.Mesh(cubegeo,faceMat);
                cube.position.set(new THREE.Vector3(x*3,y*3,z*3));
                group.add(cube)
            }
        }
    }
    console.log(group)
    group.position.set(0,0,0);
    // scene.add(group)
    camera.position.set(50,50,50);
    camera.lookAt(scene.position);
    var pointLight=new THREE.PointLight(0xff0000);
    pointLight.position.set(10,50,10);
    // pointLight.distance=30;
    pointLight.intensity=2;
    scene.add(pointLight)


    document.body.appendChild(renderer.domElement);
    renderer.render(scene,camera);
}

window.onload=init;