//////////////////////////////////////////////////////////////////////////////////
//		Init
//////////////////////////////////////////////////////////////////////////////////
var meshPlane, coreMesh, torusMesh;

// init renderer
var renderer	= new THREE.WebGLRenderer({
	// antialias	: true,
	alpha: true
});
renderer.setClearColor(new THREE.Color('lightgrey'), 0)
// renderer.setPixelRatio( 2 );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.domElement.style.position = 'absolute'
renderer.domElement.style.top = '0px'
renderer.domElement.style.left = '0px'
renderer.domElement.id = 'webcam-canvas';
document.body.appendChild( renderer.domElement );

// array of functions for the rendering loop
var onRenderFcts= [];

// init scene and camera
var scene	= new THREE.Scene();

var ambient = new THREE.AmbientLight( 0x666666 );
scene.add( ambient );

var directionalLight = new THREE.DirectionalLight( 0x887766 );
directionalLight.position.set( -1, 1, 1 ).normalize();
scene.add( directionalLight );

//////////////////////////////////////////////////////////////////////////////////
//		Initialize a basic camera
//////////////////////////////////////////////////////////////////////////////////

// Create a camera
// var camera = new THREE.Camera();
// scene.add(camera);

// Create a three.js camera.
var camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 100);
scene.add(camera);

//////////////////////////////////////////////////////////////////////////////
//		Code Separator
//////////////////////////////////////////////////////////////////////////////

// Apply VR stereo rendering to renderer.
var vrEffect = null
if( true ){
	vrEffect = new THREE.VREffect(renderer);
	vrEffect.setSize(window.innerWidth, window.innerHeight);
}

// Get the VRDisplay and save it for later.
var vrDisplay = null;
navigator.getVRDisplays().then(function(displays){
	if (displays.length > 0) {
		vrDisplay = displays[0];
	}
});
window.addEventListener('vrdisplaypresentchange', function onVRDisplayPresentChange() {
	onResize();
});

function togglePresent(){
	if( vrDisplay.capabilities.canPresent === false ){
		alert('You vr display can not present!')
		return
	}
	if( vrDisplay.isPresenting ){
		vrDisplay.exitPresent()
	}else{
		vrDisplay.requestPresent([{source: renderer.domElement}]);
	}
}
document.body.addEventListener('keypress', function(event){
	if( event.key === 'p' )	togglePresent()
})
document.getElementById("vrmode").addEventListener('click', function(event){
	togglePresent()
})

// Resize the WebGL canvas when we resize and also when we change modes.
window.addEventListener('resize', onResize);

function onResize() {
	// handle arToolkitSource resize
	arToolkitSource.onResizeElement(renderer.domElement)		

	// get width/height from arToolkitSource.domElement
	var elementWidth = parseFloat( arToolkitSource.domElement.style.width.replace(/px$/,''), 10 )
	var elementHeight = parseFloat( arToolkitSource.domElement.style.height.replace(/px$/,''), 10 )

	if( vrEffect !== null ){
		vrEffect.setSize(elementWidth, elementHeight);
	}

	if( camera instanceof THREE.PerspectiveCamera === true ){
		camera.aspect = elementWidth / elementHeight;
		camera.updateProjectionMatrix();
	}
}
////////////////////////////////////////////////////////////////////////////////
//          handle arToolkitSource
////////////////////////////////////////////////////////////////////////////////

var arToolkitSource = new THREEx.ArToolkitSource({
	// to read from the webcam
	sourceType : 'webcam',

	// // to read from an image
	// sourceType : 'image',
	// sourceUrl : THREEx.ArToolkitContext.baseURL + '../data/images/img.jpg',

	// // to read from a video
	// sourceType : 'video',
	// sourceUrl : THREEx.ArToolkitContext.baseURL + '../data/videos/headtracking.mp4',
})

arToolkitSource.init(function onReady(){
	onResize()
})

////////////////////////////////////////////////////////////////////////////////
//          initialize arToolkitContext
////////////////////////////////////////////////////////////////////////////////

// create atToolkitContext
var arToolkitContext = new THREEx.ArToolkitContext({
	cameraParametersUrl: THREEx.ArToolkitContext.baseURL + 'assets/patterns/camera_para.dat',
	detectionMode: 'mono',
	maxDetectionRate: 30,
	canvasWidth: 80*8,
	canvasHeight: 60*8,
	canvasWidth: 1920,
	canvasHeight: 1080,
})

// initialize it
arToolkitContext.init(function onCompleted(){
	if( camera instanceof THREE.PerspectiveCamera === false ){
		// copy projection matrix to camera
		camera.projectionMatrix.copy( arToolkitContext.getProjectionMatrix() );
	}
})

// update artoolkit on every frame
onRenderFcts.push(function(){
	if( arToolkitSource.ready === false )	return

	arToolkitContext.update( arToolkitSource.domElement )
});

