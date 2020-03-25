
;(function(){
var markerRoot1 = scene.getObjectByName('Hydrogen');
var markerRoot2 = scene.getObjectByName('Helium');
var markerRoot3 = scene.getObjectByName('Lithium');
var markerRoot4 = scene.getObjectByName('Beryllium');
var markerRoot5 = scene.getObjectByName('Bore');
var markerRoot6 = scene.getObjectByName('Carbon');
var markerRoot7 = scene.getObjectByName('Azote');
var markerRoot8 = scene.getObjectByName('Oxygen');
var markerRoot9 = scene.getObjectByName('Fluor');
var markerRoot10 = scene.getObjectByName('Neon');

var container = new THREE.Group
scene.add(container)

// update container.visible and scanningSpinner visibility
onRenderFcts.push(function(){
	if( markerRoot1.visible === true && markerRoot2.visible === true ){
		container.visible = true
		document.querySelector('.scanningSpinner').style.display = 'none'
	}else{
		container.visible = false
		document.querySelector('.scanningSpinner').style.display = ''
	}
})

//////////////////////////////////////////////////////////////////////////////
//		build lineMesh
//////////////////////////////////////////////////////////////////////////////
var material = new THREE.LineDashedMaterial( {
	dashSize: 1,
	gapSize: 1,
} );
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(1, 0, -3));
geometry.vertices.push(new THREE.Vector3(-1, 0, -3));
var lineMesh = new THREE.Line(geometry, material);
container.add(lineMesh)

// update lineMesh
onRenderFcts.push(function(){
	var geometry = lineMesh.geometry
	geometry.vertices[0].copy(markerRoot1.position)
	geometry.vertices[1].copy(markerRoot2.position)
	geometry.verticesNeedUpdate = true

	geometry.computeBoundingSphere();
	lineMesh.computeLineDistances();

	var length = markerRoot1.position.distanceTo(markerRoot2.position)
	lineMesh.material.scale = length * 10
	lineMesh.material.needsUpdate = true
})


//////////////////////////////////////////////////////////////////////////////
//		display the distance between the 2 markers
//////////////////////////////////////////////////////////////////////////////

// build texture
var canvas = document.createElement( 'canvas' );
canvas.width = 128;
canvas.height = 64;
var context = canvas.getContext( '2d' );
var texture = new THREE.CanvasTexture( canvas );

// build sprite
var material = new THREE.SpriteMaterial({
	map: texture,
	color: 0xffffff,
});
var sprite = new THREE.Sprite( material );
sprite.scale.multiplyScalar(0.5)
container.add(sprite)

// upload measure
onRenderFcts.push(function(){
	// update sprite position
	sprite.position.addVectors(markerRoot1.position, markerRoot2.position).multiplyScalar(1/2)

	// get the text to display
	var length = markerRoot1.position.distanceTo(markerRoot2.position)
	var text = length.toFixed(2)

	// put the text in the sprite
	context.font = '40px monospace';
	context.clearRect( 0, 0, canvas.width, canvas.height );
	context.fillStyle = '#fff';
	context.fillText(text, canvas.width/4, 3*canvas.height/4 )
	sprite.material.map.needsUpdate = true
})




})()

//////////////////////////////////////////////////////////////////////////////////
//		build videoTexture
//////////////////////////////////////////////////////////////////////////////////

// get videoTexture
if( arToolkitSource.domElement.nodeName === 'VIDEO' ){
	var videoTexture = new THREE.VideoTexture(arToolkitSource.domElement)
	// arToolkitSource.domElement.pause()
}else if( arToolkitSource.domElement.nodeName === 'IMG' ){
	var videoTexture = new THREE.Texture(arToolkitSource.domElement)
	videoTexture.needsUpdate = true
}else console.assert(false)
// TODO to remove if webgl2 - better visual ?
videoTexture.minFilter =  THREE.NearestFilter


//////////////////////////////////////////////////////////////////////////////
//	plane always in front of the camera, exactly as big as the viewport
//////////////////////////////////////////////////////////////////////////////
var videoInWebgl = new THREEx.ArVideoInWebgl(videoTexture)
scene.add(videoInWebgl.object3d);
arToolkitSource.domElement.style.visibility = 'hidden'

// TODO extract the fov from the projectionMatrix
// camera.fov = 43.1
// camera.fov = 42
onRenderFcts.push(function(){
	videoInWebgl.update(camera)
})

//////////////////////////////////////////////////////////////////////////////
//		Code Separator
//////////////////////////////////////////////////////////////////////////////
// var video = arToolkitSource.domElement;

// window.addEventListener('resize', function(){
// 	updateSeeThruAspectUv(seethruPlane)
// })
// video.addEventListener('canplaythrough', function(){
// 	updateSeeThruAspectUv(seethruPlane)
// })
// function updateSeeThruAspectUv(plane){

// 	// if video isnt yet ready to play
// 	if( video.videoWidth === 0 || video.videoHeight === 0 )	return

// 	var faceVertexUvs = plane.geometry.faceVertexUvs[0]
// 	var screenAspect = window.innerWidth / window.innerHeight
// 	var videoAspect = video.videoWidth / video.videoHeight

// 	plane.geometry.uvsNeedUpdate = true
// 	if( screenAspect >= videoAspect ){
// 		var actualHeight = videoAspect / screenAspect;
// 		// faceVertexUvs y 0
// 		faceVertexUvs[0][1].y = 0.5 - actualHeight/2
// 		faceVertexUvs[1][0].y = 0.5 - actualHeight/2
// 		faceVertexUvs[1][1].y = 0.5 - actualHeight/2
// 		// faceVertexUvs y 1
// 		faceVertexUvs[0][0].y = 0.5 + actualHeight/2
// 		faceVertexUvs[0][2].y = 0.5 + actualHeight/2
// 		faceVertexUvs[1][2].y = 0.5 + actualHeight/2
// 	}else{
// 		var actualWidth = screenAspect / videoAspect;
// 		// faceVertexUvs x 0
// 		faceVertexUvs[0][0].x = 0.5 - actualWidth/2
// 		faceVertexUvs[0][1].x = 0.5 - actualWidth/2
// 		faceVertexUvs[1][0].x = 0.5 - actualWidth/2

// 		// faceVertexUvs x 1
// 		faceVertexUvs[0][2].x = 0.5 + actualWidth/2
// 		faceVertexUvs[1][1].x = 0.5 + actualWidth/2
// 		faceVertexUvs[1][2].x = 0.5 + actualWidth/2
// 	}
// }


//////////////////////////////////////////////////////////////////////////////////
//		add an object in the scene
//////////////////////////////////////////////////////////////////////////////////


// // add a torus knot
// var geometry	= new THREE.PlaneGeometry(1.5,1.5,1.5);
// texture = THREE.ImageUtils.loadTexture('assets/patterns/1.png');

// var material	= new THREE.MeshBasicMaterial({
// 	//transparent : true,
// 	opacity: 1,
// 	//side: THREE.DoubleSide,
// 	map: texture
// });

// var meshPlane	= new THREE.Mesh( geometry, material );
// meshPlane.name = "plane";
// meshPlane.rotation.x = -360;
// meshPlane.position.y	= 0;
// // meshPlane.position.z	= 1;
// var axesHelper = new THREE.AxesHelper(2);
// meshPlane.add( axesHelper );
// markerRoot.add( meshPlane );


//////////////////////////////////////////////////////////////////////////////////
//		render the whole thing on the page
//////////////////////////////////////////////////////////////////////////////////
var stats = new Stats();
document.body.appendChild( stats.dom );
// render the scene
onRenderFcts.push(function(){
	// Render the scene.
	if( vrEffect !== null ){
		vrEffect.render(scene, camera);
	}else{
		renderer.render( scene, camera );
	}
	stats.update();
})

// run the rendering loop
var lastTimeMsec= null
requestAnimationFrame(function animate(nowMsec){
	// keep looping
	requestAnimationFrame( animate );
	// measure time
	lastTimeMsec	= lastTimeMsec || nowMsec-1000/60
	var deltaMsec	= Math.min(200, nowMsec - lastTimeMsec)
	lastTimeMsec	= nowMsec
	// call each update function
	onRenderFcts.forEach(function(onRenderFct){
		onRenderFct(deltaMsec/1000, nowMsec/1000)
	})
})

/**
 * Position an object on a planet.
 * @param {THREE.Object3D} object - the object to place
 * @param {number} lat - latitude of the location
 * @param {number} lon - longitude of the location
 * @param {number} radius - radius of the planet
 */
function placeObjectOnPlanet(object, lat, lon, radius) {
    var latRad = lat * (Math.PI / 180);
    var lonRad = -lon * (Math.PI / 180);
    object.position.set(
        Math.cos(latRad) * Math.cos(lonRad) * radius,
        Math.sin(latRad) * radius,
        Math.cos(latRad) * Math.sin(lonRad) * radius
    );
    object.rotation.set(0.0, -lonRad, latRad - Math.PI * 0.5);
}


var options = {
  PlaneRotX: -360,
  CoreRotY: -90,
};

// DAT.GUI Related Stuff

var gui = new dat.GUI();
gui.domElement.id = 'gui';

var planeGUI = gui.addFolder('Plane');
planeGUI.add(options, 'PlaneRotX', -360, 360).name('Rotation X').listen();
planeGUI.open();

var coreGUI = gui.addFolder('Core');
coreGUI.add(options, 'CoreRotY', -360, 360).name('Rotation X').listen();
coreGUI.open();
