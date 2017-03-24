/**
 * Created by Administrator on 2017/3/24.
 */
function initStats() {
    var stas=new Stats();
    stas.setMode(0);
    stas.domElement.style.position='absolute';
    stas.domElement.style.left='0';
    stas.domElement.style.top='0';
    document.getElementById('stats-out').appendChild(stas.domElement);
    return stas;
}