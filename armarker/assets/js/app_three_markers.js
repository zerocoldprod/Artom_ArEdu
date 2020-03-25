
(function(){

var axesHelper = new THREE.AxesHelper(2);

//////////////////////////////////////////////////////////////////////////////
//		markerRoot1
//////////////////////////////////////////////////////////////////////////////

// build markerControls
var markerRoot1 = new THREE.Group
markerRoot1.name = 'Hydrogen'
scene.add(markerRoot1)
var markerControls = new THREEx.ArMarkerControls(arToolkitContext, markerRoot1, {
	type : 'pattern',
	patternUrl : THREEx.ArToolkitContext.baseURL + 'assets/patterns/pattern-1.patt',
	// patternUrl : THREEx.ArToolkitContext.baseURL + 'assets/patterns/patt.kanji',
})

// add a gizmo in the center of the marker
var geometry	= new THREE.PlaneGeometry(1.5,1.5,1.5);
var texture 	= THREE.ImageUtils.loadTexture('assets/patterns/pattern-1.png');
var material	= new THREE.MeshPhongMaterial({
	//wireframe: true,
	opacity: 1,
	map: texture
});

meshPlane	= new THREE.Mesh( geometry, material );
meshPlane.name = "plane";
meshPlane.rotation.x = -360;
meshPlane.position.y	= 0;
markerRoot1.add( meshPlane );

var core = new THREE.SphereGeometry(0.3,32,32);
core.radius = 2;
var texture 	= THREE.ImageUtils.loadTexture('assets/images/core/1.jpg');
var material	= new THREE.MeshPhongMaterial({
	//wireframe: true,
	opacity: 1,
	map: texture
});
coreMesh =  new THREE.Mesh( core, material );
coreMesh.position.y	= 1;
coreMesh.rotation.y	= -8;
coreMesh.rotation.z	= 0;
coreMesh.rotation.x = -90;
// coreMesh.add( axesHelper );
markerRoot1.add( coreMesh );


var torus = new THREE.TorusGeometry( 0.7, 0.015, 16, 100 );
var material = new THREE.MeshPhongMaterial( { color: 0xc0c0c0 } );
torusMesh =  new THREE.Mesh( torus, material );
torusMesh.position.y = 1;
torusMesh.rotation.x = 45;

var electronH1 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH1Mesh = new THREE.Mesh( electronH1, material );
electronH1Mesh.position.x	= 0;
electronH1Mesh.position.y	= 0.7;
torusMesh.add( electronH1Mesh );

// torusMesh.add( axesHelper );
markerRoot1.add( torusMesh );


var loader = new THREE.FontLoader();
loader.load( 'assets/fonts/helvetiker_regular.typeface.json', function ( font ) {

	var geometryTXT = new THREE.TextGeometry( 'Hydrogen Atom', {
		font: font,
		size: 0.2,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt = new THREE.MeshPhongMaterial( { color: 0xf5f5f5 } );
	textMesh = new THREE.Mesh( geometryTXT, materialTxt );
	textMesh.position.z	= -0.5;
	textMesh.position.x	= -3;
	textMesh.rotation.x = -90;

	var geometryTXT2 = new THREE.TextGeometry( 'Protons : 1', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt2 = new THREE.MeshPhongMaterial( { color: 0x2962ff } );
	textMesh2 = new THREE.Mesh( geometryTXT2, materialTxt2 );
	textMesh2.position.z	= -0.25;
	textMesh2.position.x	= -3;
	textMesh2.rotation.x = -90;

	var geometryTXT3 = new THREE.TextGeometry( 'Neutrons : 0', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt3 = new THREE.MeshPhongMaterial( { color: 0xed1941 } );
	textMesh3 = new THREE.Mesh( geometryTXT3, materialTxt3 );
	textMesh3.position.z	= 0;
	textMesh3.position.x	= -3;
	textMesh3.rotation.x = -90;


	var geometryTXT4 = new THREE.TextGeometry( 'Electrons : 1', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt4 = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
	textMesh4 = new THREE.Mesh( geometryTXT4, materialTxt4 );
	textMesh4.position.z	= 0.25;
	textMesh4.position.x	= -3;
	textMesh4.rotation.x = -90;

	// textMesh.add( axesHelper );
	markerRoot1.add( textMesh );
	markerRoot1.add( textMesh2 );
	markerRoot1.add( textMesh3 );
	markerRoot1.add( textMesh4 );
} );

//////////////////////////////////////////////////////////////////////////////
//		markerRoot2
//////////////////////////////////////////////////////////////////////////////

// build markerControls
var markerRoot2 = new THREE.Group
markerRoot2.name = 'Helium'
scene.add(markerRoot2)
var markerControls = new THREEx.ArMarkerControls(arToolkitContext, markerRoot2, {
	type : 'pattern',
	// patternUrl : THREEx.ArToolkitContext.baseURL + 'assets/patterns/patt.hiro',
	patternUrl : THREEx.ArToolkitContext.baseURL + 'assets/patterns/pattern-2.patt',
})


// add a gizmo in the center of the marker
var geometry	= new THREE.PlaneGeometry(1.5,1.5,1.5);
var texture 	= THREE.ImageUtils.loadTexture('assets/patterns/pattern-2.png');
var material	= new THREE.MeshPhongMaterial({
	//wireframe: true,
	opacity: 1,
	map: texture
});

meshPlane	= new THREE.Mesh( geometry, material );
meshPlane.name = "plane";
meshPlane.rotation.x = -360;
meshPlane.position.y	= 0;
markerRoot2.add( meshPlane );

var core = new THREE.SphereGeometry(0.3,32,32);
core.radius = 2;
var texture 	= THREE.ImageUtils.loadTexture('assets/images/core/2.jpg');
var material	= new THREE.MeshPhongMaterial({
	//wireframe: true,
	opacity: 1,
	map: texture
});
coreMesh =  new THREE.Mesh( core, material );
coreMesh.position.y	= 1;
coreMesh.rotation.y	= -8;
coreMesh.rotation.z	= 0;
coreMesh.rotation.x = -90;
markerRoot2.add( coreMesh );

var torus = new THREE.TorusGeometry( 0.7, 0.015, 16, 100 );
var material = new THREE.MeshPhongMaterial( { color: 0xc0c0c0 } );
torusMesh =  new THREE.Mesh( torus, material );
torusMesh.position.y = 1;
torusMesh.rotation.x = 45;

var electronH1 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH1Mesh = new THREE.Mesh( electronH1, material );
electronH1Mesh.position.x	= 0;
electronH1Mesh.position.y	= 0.7;
torusMesh.add( electronH1Mesh );


var electronH2 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH2Mesh = new THREE.Mesh( electronH2, material );
electronH2Mesh.position.x	= 0;
electronH2Mesh.position.y	= -0.7;
torusMesh.add( electronH2Mesh );

// torusMesh.add( axesHelper );
markerRoot2.add( torusMesh );

var loader = new THREE.FontLoader();
loader.load( 'assets/fonts/helvetiker_regular.typeface.json', function ( font ) {

	var geometryTXT = new THREE.TextGeometry( 'Helium Atom', {
		font: font,
		size: 0.2,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt = new THREE.MeshPhongMaterial( { color: 0xf5f5f5 } );
	textMesh = new THREE.Mesh( geometryTXT, materialTxt );
	textMesh.position.z	= -0.5;
	textMesh.position.x	= -3;
	textMesh.rotation.x = -90;

	var geometryTXT2 = new THREE.TextGeometry( 'Protons : 2', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt2 = new THREE.MeshPhongMaterial( { color: 0x2962ff } );
	textMesh2 = new THREE.Mesh( geometryTXT2, materialTxt2 );
	textMesh2.position.z	= -0.25;
	textMesh2.position.x	= -3;
	textMesh2.rotation.x = -90;

	var geometryTXT3 = new THREE.TextGeometry( 'Neutrons : 2', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt3 = new THREE.MeshPhongMaterial( { color: 0xed1941 } );
	textMesh3 = new THREE.Mesh( geometryTXT3, materialTxt3 );
	textMesh3.position.z	= 0;
	textMesh3.position.x	= -3;
	textMesh3.rotation.x = -90;


	var geometryTXT4 = new THREE.TextGeometry( 'Electrons : 2', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt4 = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
	textMesh4 = new THREE.Mesh( geometryTXT4, materialTxt4 );
	textMesh4.position.z	= 0.25;
	textMesh4.position.x	= -3;
	textMesh4.rotation.x = -90;

	// textMesh.add( axesHelper );
	markerRoot2.add( textMesh );
	markerRoot2.add( textMesh2 );
	markerRoot2.add( textMesh3 );
	markerRoot2.add( textMesh4 );
} );

//////////////////////////////////////////////////////////////////////////////
//		markerRoot3
//////////////////////////////////////////////////////////////////////////////

// build markerControls
var markerRoot3 = new THREE.Group
markerRoot3.name = 'Lithium'
scene.add(markerRoot3)
var markerControls = new THREEx.ArMarkerControls(arToolkitContext, markerRoot3, {
	type : 'pattern',
	// patternUrl : THREEx.ArToolkitContext.baseURL + 'assets/patterns/patt.hiro',
	patternUrl : THREEx.ArToolkitContext.baseURL + 'assets/patterns/pattern-3.patt',
})


// add a gizmo in the center of the marker
var geometry	= new THREE.PlaneGeometry(1.5,1.5,1.5);
var texture 	= THREE.ImageUtils.loadTexture('assets/patterns/pattern-3.png');
var material	= new THREE.MeshPhongMaterial({
	//wireframe: true,
	opacity: 1,
	map: texture
});

meshPlane	= new THREE.Mesh( geometry, material );
meshPlane.name = "plane";
meshPlane.rotation.x = -360;
meshPlane.position.y	= 0;
markerRoot3.add( meshPlane );

var core = new THREE.SphereGeometry(0.3,32,32);
core.radius = 2;
var texture 	= THREE.ImageUtils.loadTexture('assets/images/core/3.jpg');
var material	= new THREE.MeshPhongMaterial({
	//wireframe: true,
	opacity: 1,
	map: texture
});
coreMesh =  new THREE.Mesh( core, material );
coreMesh.position.y	= 1;
coreMesh.rotation.y	= -8;
coreMesh.rotation.z	= 0;
coreMesh.rotation.x = -90;
markerRoot3.add( coreMesh );


var torus = new THREE.TorusGeometry( 0.7, 0.015, 16, 100 );
var material = new THREE.MeshPhongMaterial( { color: 0xc0c0c0 } );
torusMesh =  new THREE.Mesh( torus, material );
torusMesh.position.y = 1;
torusMesh.rotation.x = 45;

var torus2 = new THREE.TorusGeometry( 1.2, 0.015, 16, 100 );
var material = new THREE.MeshPhongMaterial( { color: 0xc0c0c0 } );
torus2Mesh =  new THREE.Mesh( torus2, material );
torus2Mesh.position.y = 1;
torus2Mesh.rotation.x = 45;

var electronH1 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH1Mesh = new THREE.Mesh( electronH1, material );
electronH1Mesh.position.x	= 0;
electronH1Mesh.position.y	= 0.7;
torusMesh.add( electronH1Mesh );

var electronH2 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH2Mesh = new THREE.Mesh( electronH2, material );
electronH2Mesh.position.x	= 0;
electronH2Mesh.position.y	= -0.7;
torusMesh.add( electronH2Mesh );

var electronH3 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH3Mesh = new THREE.Mesh( electronH3, material );
electronH3Mesh.position.x	= 0;
electronH3Mesh.position.y	= 1.2;
torus2Mesh.add( electronH3Mesh );

// torusMesh.add( axesHelper );
markerRoot3.add( torusMesh );
markerRoot3.add( torus2Mesh );

var loader = new THREE.FontLoader();
loader.load( 'assets/fonts/helvetiker_regular.typeface.json', function ( font ) {

	var geometryTXT = new THREE.TextGeometry( 'Lithium Atom', {
		font: font,
		size: 0.2,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt = new THREE.MeshPhongMaterial( { color: 0xf5f5f5 } );
	textMesh = new THREE.Mesh( geometryTXT, materialTxt );
	textMesh.position.z	= -0.5;
	textMesh.position.x	= -3;
	textMesh.rotation.x = -90;

	var geometryTXT2 = new THREE.TextGeometry( 'Protons : 3', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt2 = new THREE.MeshPhongMaterial( { color: 0x2962ff } );
	textMesh2 = new THREE.Mesh( geometryTXT2, materialTxt2 );
	textMesh2.position.z	= -0.25;
	textMesh2.position.x	= -3;
	textMesh2.rotation.x = -90;

	var geometryTXT3 = new THREE.TextGeometry( 'Neutrons : 4', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt3 = new THREE.MeshPhongMaterial( { color: 0xed1941 } );
	textMesh3 = new THREE.Mesh( geometryTXT3, materialTxt3 );
	textMesh3.position.z	= 0;
	textMesh3.position.x	= -3;
	textMesh3.rotation.x = -90;


	var geometryTXT4 = new THREE.TextGeometry( 'Electrons : 3', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt4 = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
	textMesh4 = new THREE.Mesh( geometryTXT4, materialTxt4 );
	textMesh4.position.z	= 0.25;
	textMesh4.position.x	= -3;
	textMesh4.rotation.x = -90;

	// textMesh.add( axesHelper );
	markerRoot3.add( textMesh );
	markerRoot3.add( textMesh2 );
	markerRoot3.add( textMesh3 );
	markerRoot3.add( textMesh4 );
} );

//////////////////////////////////////////////////////////////////////////////
//		markerRoot4
//////////////////////////////////////////////////////////////////////////////

// build markerControls
var markerRoot4 = new THREE.Group
markerRoot4.name = 'Beryllium'
scene.add(markerRoot4)
var markerControls = new THREEx.ArMarkerControls(arToolkitContext, markerRoot4, {
	type : 'pattern',
	// patternUrl : THREEx.ArToolkitContext.baseURL + 'assets/patterns/patt.hiro',
	patternUrl : THREEx.ArToolkitContext.baseURL + 'assets/patterns/pattern-4.patt',
})


// add a gizmo in the center of the marker
var geometry	= new THREE.PlaneGeometry(1.5,1.5,1.5);
var texture 	= THREE.ImageUtils.loadTexture('assets/patterns/pattern-4.png');
var material	= new THREE.MeshPhongMaterial({
	//wireframe: true,
	opacity: 1,
	map: texture
});

meshPlane	= new THREE.Mesh( geometry, material );
meshPlane.name = "plane";
meshPlane.rotation.x = -360;
meshPlane.position.y	= 0;
markerRoot4.add( meshPlane );

var core = new THREE.SphereGeometry(0.3,32,32);
core.radius = 2;
var texture 	= THREE.ImageUtils.loadTexture('assets/images/core/4.jpg');
var material	= new THREE.MeshPhongMaterial({
	//wireframe: true,
	opacity: 1,
	map: texture
});
coreMesh =  new THREE.Mesh( core, material );
coreMesh.position.y	= 1;
coreMesh.rotation.y	= -8;
coreMesh.rotation.z	= 0;
coreMesh.rotation.x = -90;
markerRoot4.add( coreMesh );


var torus = new THREE.TorusGeometry( 0.7, 0.015, 16, 100 );
var material = new THREE.MeshPhongMaterial( { color: 0xc0c0c0 } );
torusMesh =  new THREE.Mesh( torus, material );
torusMesh.position.y = 1;
torusMesh.rotation.x = 45;

var torus2 = new THREE.TorusGeometry( 1.2, 0.015, 16, 100 );
var material = new THREE.MeshPhongMaterial( { color: 0xc0c0c0 } );
torus2Mesh =  new THREE.Mesh( torus2, material );
torus2Mesh.position.y = 1;
torus2Mesh.rotation.x = 45;

var electronH1 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH1Mesh = new THREE.Mesh( electronH1, material );
electronH1Mesh.position.x	= 0;
electronH1Mesh.position.y	= 0.7;
torusMesh.add( electronH1Mesh );

var electronH2 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH2Mesh = new THREE.Mesh( electronH2, material );
electronH2Mesh.position.x	= 0;
electronH2Mesh.position.y	= -0.7;
torusMesh.add( electronH2Mesh );

var electronH3 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH3Mesh = new THREE.Mesh( electronH3, material );
electronH3Mesh.position.x	= 0;
electronH3Mesh.position.y	= 1.2;
torus2Mesh.add( electronH3Mesh );

var electronH4 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH4Mesh = new THREE.Mesh( electronH4, material );
electronH4Mesh.position.x	= 0;
electronH4Mesh.position.y	= -1.2;
torus2Mesh.add( electronH4Mesh );

// torusMesh.add( axesHelper );
markerRoot4.add( torusMesh );
markerRoot4.add( torus2Mesh );

var loader = new THREE.FontLoader();
loader.load( 'assets/fonts/helvetiker_regular.typeface.json', function ( font ) {

	var geometryTXT = new THREE.TextGeometry( 'Beryllium Atom', {
		font: font,
		size: 0.2,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt = new THREE.MeshPhongMaterial( { color: 0xf5f5f5 } );
	textMesh = new THREE.Mesh( geometryTXT, materialTxt );
	textMesh.position.z	= -0.5;
	textMesh.position.x	= -3;
	textMesh.rotation.x = -90;

	var geometryTXT2 = new THREE.TextGeometry( 'Protons : 4', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt2 = new THREE.MeshPhongMaterial( { color: 0x2962ff } );
	textMesh2 = new THREE.Mesh( geometryTXT2, materialTxt2 );
	textMesh2.position.z	= -0.25;
	textMesh2.position.x	= -3;
	textMesh2.rotation.x = -90;

	var geometryTXT3 = new THREE.TextGeometry( 'Neutrons : 5', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt3 = new THREE.MeshPhongMaterial( { color: 0xed1941 } );
	textMesh3 = new THREE.Mesh( geometryTXT3, materialTxt3 );
	textMesh3.position.z	= 0;
	textMesh3.position.x	= -3;
	textMesh3.rotation.x = -90;


	var geometryTXT4 = new THREE.TextGeometry( 'Electrons : 4', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt4 = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
	textMesh4 = new THREE.Mesh( geometryTXT4, materialTxt4 );
	textMesh4.position.z	= 0.25;
	textMesh4.position.x	= -3;
	textMesh4.rotation.x = -90;

	// textMesh.add( axesHelper );
	markerRoot4.add( textMesh );
	markerRoot4.add( textMesh2 );
	markerRoot4.add( textMesh3 );
	markerRoot4.add( textMesh4 );
} );

//////////////////////////////////////////////////////////////////////////////
//		markerRoot5
//////////////////////////////////////////////////////////////////////////////

// build markerControls
var markerRoot5 = new THREE.Group
markerRoot5.name = 'Bore'
scene.add(markerRoot5)
var markerControls = new THREEx.ArMarkerControls(arToolkitContext, markerRoot5, {
	type : 'pattern',
	// patternUrl : THREEx.ArToolkitContext.baseURL + 'assets/patterns/patt.hiro',
	patternUrl : THREEx.ArToolkitContext.baseURL + 'assets/patterns/pattern-5.patt',
})


// add a gizmo in the center of the marker
var geometry	= new THREE.PlaneGeometry(1.5,1.5,1.5);
var texture 	= THREE.ImageUtils.loadTexture('assets/patterns/pattern-5.png');
var material	= new THREE.MeshPhongMaterial({
	//wireframe: true,
	opacity: 1,
	map: texture
});

meshPlane	= new THREE.Mesh( geometry, material );
meshPlane.name = "plane";
meshPlane.rotation.x = -360;
meshPlane.position.y	= 0;
markerRoot5.add( meshPlane );

var core = new THREE.SphereGeometry(0.3,32,32);
core.radius = 2;
var texture 	= THREE.ImageUtils.loadTexture('assets/images/core/5.jpg');
var material	= new THREE.MeshPhongMaterial({
	//wireframe: true,
	opacity: 1,
	map: texture
});
coreMesh =  new THREE.Mesh( core, material );
coreMesh.position.y	= 1;
coreMesh.rotation.y	= -8;
coreMesh.rotation.z	= 0;
coreMesh.rotation.x = -90;
markerRoot5.add( coreMesh );



var torus = new THREE.TorusGeometry( 0.7, 0.015, 16, 100 );
var material = new THREE.MeshPhongMaterial( { color: 0xc0c0c0 } );
torusMesh =  new THREE.Mesh( torus, material );
torusMesh.position.y = 1;
torusMesh.rotation.x = 45;

var torus2 = new THREE.TorusGeometry( 1.2, 0.015, 16, 100 );
var material = new THREE.MeshPhongMaterial( { color: 0xc0c0c0 } );
torus2Mesh =  new THREE.Mesh( torus2, material );
torus2Mesh.position.y = 1;
torus2Mesh.rotation.x = 45;

var electronH1 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH1Mesh = new THREE.Mesh( electronH1, material );
electronH1Mesh.position.x	= 0;
electronH1Mesh.position.y	= 0.7;
torusMesh.add( electronH1Mesh );

var electronH2 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH2Mesh = new THREE.Mesh( electronH2, material );
electronH2Mesh.position.x	= 0;
electronH2Mesh.position.y	= -0.7;
torusMesh.add( electronH2Mesh );

var electronH3 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH3Mesh = new THREE.Mesh( electronH3, material );
electronH3Mesh.position.x	= 0;
electronH3Mesh.position.y	= 1.2;
torus2Mesh.add( electronH3Mesh );

var electronH4 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH4Mesh = new THREE.Mesh( electronH4, material );
electronH4Mesh.position.x	= 0;
electronH4Mesh.position.y	= -1.2;
torus2Mesh.add( electronH4Mesh );

var electronH5 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH5Mesh = new THREE.Mesh( electronH5, material );
electronH5Mesh.position.x	= 1.2;
electronH5Mesh.position.y	= 0;
torus2Mesh.add( electronH5Mesh );

// torusMesh.add( axesHelper );
markerRoot5.add( torusMesh );
markerRoot5.add( torus2Mesh );

var loader = new THREE.FontLoader();
loader.load( 'assets/fonts/helvetiker_regular.typeface.json', function ( font ) {

	var geometryTXT = new THREE.TextGeometry( 'Bore Atom', {
		font: font,
		size: 0.2,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt = new THREE.MeshPhongMaterial( { color: 0xf5f5f5 } );
	textMesh = new THREE.Mesh( geometryTXT, materialTxt );
	textMesh.position.z	= -0.5;
	textMesh.position.x	= -3;
	textMesh.rotation.x = -90;

	var geometryTXT2 = new THREE.TextGeometry( 'Protons : 5', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt2 = new THREE.MeshPhongMaterial( { color: 0x2962ff } );
	textMesh2 = new THREE.Mesh( geometryTXT2, materialTxt2 );
	textMesh2.position.z	= -0.25;
	textMesh2.position.x	= -3;
	textMesh2.rotation.x = -90;

	var geometryTXT3 = new THREE.TextGeometry( 'Neutrons : 4', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt3 = new THREE.MeshPhongMaterial( { color: 0xed1941 } );
	textMesh3 = new THREE.Mesh( geometryTXT3, materialTxt3 );
	textMesh3.position.z	= 0;
	textMesh3.position.x	= -3;
	textMesh3.rotation.x = -90;


	var geometryTXT4 = new THREE.TextGeometry( 'Electrons : 5', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt4 = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
	textMesh4 = new THREE.Mesh( geometryTXT4, materialTxt4 );
	textMesh4.position.z	= 0.25;
	textMesh4.position.x	= -3;
	textMesh4.rotation.x = -90;

	// textMesh.add( axesHelper );
	markerRoot5.add( textMesh );
	markerRoot5.add( textMesh2 );
	markerRoot5.add( textMesh3 );
	markerRoot5.add( textMesh4 );
} );

//////////////////////////////////////////////////////////////////////////////
//		markerRoot6
//////////////////////////////////////////////////////////////////////////////

// build markerControls
var markerRoot6 = new THREE.Group
markerRoot6.name = 'Carbon'
scene.add(markerRoot6)
var markerControls = new THREEx.ArMarkerControls(arToolkitContext, markerRoot6, {
	type : 'pattern',
	// patternUrl : THREEx.ArToolkitContext.baseURL + 'assets/patterns/patt.hiro',
	patternUrl : THREEx.ArToolkitContext.baseURL + 'assets/patterns/pattern-6.patt',
})


// add a gizmo in the center of the marker
var geometry	= new THREE.PlaneGeometry(1.5,1.5,1.5);
var texture 	= THREE.ImageUtils.loadTexture('assets/patterns/pattern-6.png');
var material	= new THREE.MeshPhongMaterial({
	//wireframe: true,
	opacity: 1,
	map: texture
});

meshPlane	= new THREE.Mesh( geometry, material );
meshPlane.name = "plane";
meshPlane.rotation.x = -360;
meshPlane.position.y	= 0;
markerRoot6.add( meshPlane );

var core = new THREE.SphereGeometry(0.3,32,32);
core.radius = 2;
var texture 	= THREE.ImageUtils.loadTexture('assets/images/core/6.jpg');
var material	= new THREE.MeshPhongMaterial({
	//wireframe: true,
	opacity: 1,
	map: texture
});
coreMesh =  new THREE.Mesh( core, material );
coreMesh.position.y	= 1;
coreMesh.rotation.y	= -8;
coreMesh.rotation.z	= 0;
coreMesh.rotation.x = -90;
markerRoot6.add( coreMesh );

var torus = new THREE.TorusGeometry( 0.7, 0.015, 16, 100 );
var material = new THREE.MeshPhongMaterial( { color: 0xc0c0c0 } );
torusMesh =  new THREE.Mesh( torus, material );
torusMesh.position.y = 1;
torusMesh.rotation.x = 45;

var torus2 = new THREE.TorusGeometry( 1.2, 0.015, 16, 100 );
var material = new THREE.MeshPhongMaterial( { color: 0xc0c0c0 } );
torus2Mesh =  new THREE.Mesh( torus2, material );
torus2Mesh.position.y = 1;
torus2Mesh.rotation.x = 45;

var electronH1 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH1Mesh = new THREE.Mesh( electronH1, material );
electronH1Mesh.position.x	= 0;
electronH1Mesh.position.y	= 0.7;
torusMesh.add( electronH1Mesh );

var electronH2 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH2Mesh = new THREE.Mesh( electronH2, material );
electronH2Mesh.position.x	= 0;
electronH2Mesh.position.y	= -0.7;
torusMesh.add( electronH2Mesh );

var electronH3 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH3Mesh = new THREE.Mesh( electronH3, material );
electronH3Mesh.position.x	= 0;
electronH3Mesh.position.y	= 1.2;
torus2Mesh.add( electronH3Mesh );

var electronH4 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH4Mesh = new THREE.Mesh( electronH4, material );
electronH4Mesh.position.x	= 0;
electronH4Mesh.position.y	= -1.2;
torus2Mesh.add( electronH4Mesh );

var electronH5 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH5Mesh = new THREE.Mesh( electronH5, material );
electronH5Mesh.position.x	= 1.2;
electronH5Mesh.position.y	= 0;
torus2Mesh.add( electronH5Mesh );

var electronH6 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH6Mesh = new THREE.Mesh( electronH6, material );
electronH6Mesh.position.x	= -1.2;
electronH6Mesh.position.y	= 0;
torus2Mesh.add( electronH6Mesh );

// torusMesh.add( axesHelper );
markerRoot6.add( torusMesh );
markerRoot6.add( torus2Mesh );

var loader = new THREE.FontLoader();
loader.load( 'assets/fonts/helvetiker_regular.typeface.json', function ( font ) {

	var geometryTXT = new THREE.TextGeometry( 'Carbon Atom', {
		font: font,
		size: 0.2,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt = new THREE.MeshPhongMaterial( { color: 0xf5f5f5 } );
	textMesh = new THREE.Mesh( geometryTXT, materialTxt );
	textMesh.position.z	= -0.5;
	textMesh.position.x	= -3;
	textMesh.rotation.x = -90;

	var geometryTXT2 = new THREE.TextGeometry( 'Protons : 6', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt2 = new THREE.MeshPhongMaterial( { color: 0x2962ff } );
	textMesh2 = new THREE.Mesh( geometryTXT2, materialTxt2 );
	textMesh2.position.z	= -0.25;
	textMesh2.position.x	= -3;
	textMesh2.rotation.x = -90;

	var geometryTXT3 = new THREE.TextGeometry( 'Neutrons : 6', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt3 = new THREE.MeshPhongMaterial( { color: 0xed1941 } );
	textMesh3 = new THREE.Mesh( geometryTXT3, materialTxt3 );
	textMesh3.position.z	= 0;
	textMesh3.position.x	= -3;
	textMesh3.rotation.x = -90;


	var geometryTXT4 = new THREE.TextGeometry( 'Electrons : 6', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt4 = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
	textMesh4 = new THREE.Mesh( geometryTXT4, materialTxt4 );
	textMesh4.position.z	= 0.25;
	textMesh4.position.x	= -3;
	textMesh4.rotation.x = -90;

	// textMesh.add( axesHelper );
	markerRoot6.add( textMesh );
	markerRoot6.add( textMesh2 );
	markerRoot6.add( textMesh3 );
	markerRoot6.add( textMesh4 );
} );

//////////////////////////////////////////////////////////////////////////////
//		markerRoot7
//////////////////////////////////////////////////////////////////////////////

// build markerControls
var markerRoot7 = new THREE.Group
markerRoot7.name = 'Azote'
scene.add(markerRoot7)
var markerControls = new THREEx.ArMarkerControls(arToolkitContext, markerRoot7, {
	type : 'pattern',
	// patternUrl : THREEx.ArToolkitContext.baseURL + 'assets/patterns/patt.hiro',
	patternUrl : THREEx.ArToolkitContext.baseURL + 'assets/patterns/pattern-7.patt',
})


// add a gizmo in the center of the marker
var geometry	= new THREE.PlaneGeometry(1.5,1.5,1.5);
var texture 	= THREE.ImageUtils.loadTexture('assets/patterns/pattern-7.png');
var material	= new THREE.MeshPhongMaterial({
	//wireframe: true,
	opacity: 1,
	map: texture
});

meshPlane	= new THREE.Mesh( geometry, material );
meshPlane.name = "plane";
meshPlane.rotation.x = -360;
meshPlane.position.y	= 0;
markerRoot7.add( meshPlane );

var core = new THREE.SphereGeometry(0.3,32,32);
core.radius = 2;
var texture 	= THREE.ImageUtils.loadTexture('assets/images/core/7.jpg');
var material	= new THREE.MeshPhongMaterial({
	//wireframe: true,
	opacity: 1,
	map: texture
});
coreMesh =  new THREE.Mesh( core, material );
coreMesh.position.y	= 1;
coreMesh.rotation.y	= -8;
coreMesh.rotation.z	= 0;
coreMesh.rotation.x = -90;
markerRoot7.add( coreMesh );


var torus = new THREE.TorusGeometry( 0.7, 0.015, 16, 100 );
var material = new THREE.MeshPhongMaterial( { color: 0xc0c0c0 } );
torusMesh =  new THREE.Mesh( torus, material );
torusMesh.position.y = 1;
torusMesh.rotation.x = 45;

var torus2 = new THREE.TorusGeometry( 1.2, 0.015, 16, 100 );
var material = new THREE.MeshPhongMaterial( { color: 0xc0c0c0 } );
torus2Mesh =  new THREE.Mesh( torus2, material );
torus2Mesh.position.y = 1;
torus2Mesh.rotation.x = 45;

var electronH1 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH1Mesh = new THREE.Mesh( electronH1, material );
electronH1Mesh.position.x	= 0;
electronH1Mesh.position.y	= 0.7;
torusMesh.add( electronH1Mesh );

var electronH2 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH2Mesh = new THREE.Mesh( electronH2, material );
electronH2Mesh.position.x	= 0;
electronH2Mesh.position.y	= -0.7;
torusMesh.add( electronH2Mesh );

var electronH3 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH3Mesh = new THREE.Mesh( electronH3, material );
electronH3Mesh.position.x	= 0;
electronH3Mesh.position.y	= 1.2;
torus2Mesh.add( electronH3Mesh );

var electronH4 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH4Mesh = new THREE.Mesh( electronH4, material );
electronH4Mesh.position.x	= 0;
electronH4Mesh.position.y	= -1.2;
torus2Mesh.add( electronH4Mesh );

var electronH5 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH5Mesh = new THREE.Mesh( electronH5, material );
electronH5Mesh.position.x	= 1.2;
electronH5Mesh.position.y	= 0;
torus2Mesh.add( electronH5Mesh );

var electronH6 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH6Mesh = new THREE.Mesh( electronH6, material );
electronH6Mesh.position.x	= -1.2;
electronH6Mesh.position.y	= 0;
torus2Mesh.add( electronH6Mesh );

var electronH7 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH7Mesh = new THREE.Mesh( electronH7, material );
electronH7Mesh.position.x	= 0.85;
electronH7Mesh.position.y	= 0.85;
torus2Mesh.add( electronH7Mesh );

// torusMesh.add( axesHelper );
markerRoot7.add( torusMesh );
markerRoot7.add( torus2Mesh );

var loader = new THREE.FontLoader();
loader.load( 'assets/fonts/helvetiker_regular.typeface.json', function ( font ) {

	var geometryTXT = new THREE.TextGeometry( 'Azote Atom', {
		font: font,
		size: 0.2,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt = new THREE.MeshPhongMaterial( { color: 0xf5f5f5 } );
	textMesh = new THREE.Mesh( geometryTXT, materialTxt );
	textMesh.position.z	= -0.5;
	textMesh.position.x	= -3;
	textMesh.rotation.x = -90;

	var geometryTXT2 = new THREE.TextGeometry( 'Protons : 7', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt2 = new THREE.MeshPhongMaterial( { color: 0x2962ff } );
	textMesh2 = new THREE.Mesh( geometryTXT2, materialTxt2 );
	textMesh2.position.z	= -0.25;
	textMesh2.position.x	= -3;
	textMesh2.rotation.x = -90;

	var geometryTXT3 = new THREE.TextGeometry( 'Neutrons : 7', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt3 = new THREE.MeshPhongMaterial( { color: 0xed1941 } );
	textMesh3 = new THREE.Mesh( geometryTXT3, materialTxt3 );
	textMesh3.position.z	= 0;
	textMesh3.position.x	= -3;
	textMesh3.rotation.x = -90;


	var geometryTXT4 = new THREE.TextGeometry( 'Electrons : 7', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt4 = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
	textMesh4 = new THREE.Mesh( geometryTXT4, materialTxt4 );
	textMesh4.position.z	= 0.25;
	textMesh4.position.x	= -3;
	textMesh4.rotation.x = -90;

	// textMesh.add( axesHelper );
	markerRoot7.add( textMesh );
	markerRoot7.add( textMesh2 );
	markerRoot7.add( textMesh3 );
	markerRoot7.add( textMesh4 );
} );

//////////////////////////////////////////////////////////////////////////////
//		markerRoot8
//////////////////////////////////////////////////////////////////////////////

// build markerControls
var markerRoot8 = new THREE.Group
markerRoot8.name = 'Oxygen'
scene.add(markerRoot8)
var markerControls = new THREEx.ArMarkerControls(arToolkitContext, markerRoot8, {
	type : 'pattern',
	// patternUrl : THREEx.ArToolkitContext.baseURL + 'assets/patterns/patt.hiro',
	patternUrl : THREEx.ArToolkitContext.baseURL + 'assets/patterns/pattern-8.patt',
})


// add a gizmo in the center of the marker
var geometry	= new THREE.PlaneGeometry(1.5,1.5,1.5);
var texture 	= THREE.ImageUtils.loadTexture('assets/patterns/pattern-8.png');
var material	= new THREE.MeshPhongMaterial({
	//wireframe: true,
	opacity: 1,
	map: texture
});

meshPlane	= new THREE.Mesh( geometry, material );
meshPlane.name = "plane";
meshPlane.rotation.x = -360;
meshPlane.position.y	= 0;
markerRoot8.add( meshPlane );

var core = new THREE.SphereGeometry(0.3,32,32);
core.radius = 2;
var texture 	= THREE.ImageUtils.loadTexture('assets/images/core/8.jpg');
var material	= new THREE.MeshPhongMaterial({
	//wireframe: true,
	opacity: 1,
	map: texture
});
coreMesh =  new THREE.Mesh( core, material );
coreMesh.position.y	= 1;
coreMesh.rotation.y	= -8;
coreMesh.rotation.z	= 0;
coreMesh.rotation.x = -90;
markerRoot8.add( coreMesh );

var torus = new THREE.TorusGeometry( 0.7, 0.015, 16, 100 );
var material = new THREE.MeshPhongMaterial( { color: 0xc0c0c0 } );
torusMesh =  new THREE.Mesh( torus, material );
torusMesh.position.y = 1;
torusMesh.rotation.x = 45;

var torus2 = new THREE.TorusGeometry( 1.2, 0.015, 16, 100 );
var material = new THREE.MeshPhongMaterial( { color: 0xc0c0c0 } );
torus2Mesh =  new THREE.Mesh( torus2, material );
torus2Mesh.position.y = 1;
torus2Mesh.rotation.x = 45;

var electronH1 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH1Mesh = new THREE.Mesh( electronH1, material );
electronH1Mesh.position.x	= 0;
electronH1Mesh.position.y	= 0.7;
torusMesh.add( electronH1Mesh );

var electronH2 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH2Mesh = new THREE.Mesh( electronH2, material );
electronH2Mesh.position.x	= 0;
electronH2Mesh.position.y	= -0.7;
torusMesh.add( electronH2Mesh );

var electronH3 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH3Mesh = new THREE.Mesh( electronH3, material );
electronH3Mesh.position.x	= 0;
electronH3Mesh.position.y	= 1.2;
torus2Mesh.add( electronH3Mesh );

var electronH4 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH4Mesh = new THREE.Mesh( electronH4, material );
electronH4Mesh.position.x	= 0;
electronH4Mesh.position.y	= -1.2;
torus2Mesh.add( electronH4Mesh );

var electronH5 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH5Mesh = new THREE.Mesh( electronH5, material );
electronH5Mesh.position.x	= 1.2;
electronH5Mesh.position.y	= 0;
torus2Mesh.add( electronH5Mesh );

var electronH6 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH6Mesh = new THREE.Mesh( electronH6, material );
electronH6Mesh.position.x	= -1.2;
electronH6Mesh.position.y	= 0;
torus2Mesh.add( electronH6Mesh );

var electronH7 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH7Mesh = new THREE.Mesh( electronH7, material );
electronH7Mesh.position.x	= 0.85;
electronH7Mesh.position.y	= 0.85;
torus2Mesh.add( electronH7Mesh );

var electronH8 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH8Mesh = new THREE.Mesh( electronH8, material );
electronH8Mesh.position.x	= -0.85;
electronH8Mesh.position.y	= -0.85;
torus2Mesh.add( electronH8Mesh );

// torusMesh.add( axesHelper );
markerRoot8.add( torusMesh );
markerRoot8.add( torus2Mesh );

var loader = new THREE.FontLoader();
loader.load( 'assets/fonts/helvetiker_regular.typeface.json', function ( font ) {

	var geometryTXT = new THREE.TextGeometry( 'Oxygen Atom', {
		font: font,
		size: 0.2,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt = new THREE.MeshPhongMaterial( { color: 0xf5f5f5 } );
	textMesh = new THREE.Mesh( geometryTXT, materialTxt );
	textMesh.position.z	= -0.5;
	textMesh.position.x	= -3;
	textMesh.rotation.x = -90;

	var geometryTXT2 = new THREE.TextGeometry( 'Protons : 8', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt2 = new THREE.MeshPhongMaterial( { color: 0x2962ff } );
	textMesh2 = new THREE.Mesh( geometryTXT2, materialTxt2 );
	textMesh2.position.z	= -0.25;
	textMesh2.position.x	= -3;
	textMesh2.rotation.x = -90;

	var geometryTXT3 = new THREE.TextGeometry( 'Neutrons : 8', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt3 = new THREE.MeshPhongMaterial( { color: 0xed1941 } );
	textMesh3 = new THREE.Mesh( geometryTXT3, materialTxt3 );
	textMesh3.position.z	= 0;
	textMesh3.position.x	= -3;
	textMesh3.rotation.x = -90;


	var geometryTXT4 = new THREE.TextGeometry( 'Electrons : 8', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt4 = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
	textMesh4 = new THREE.Mesh( geometryTXT4, materialTxt4 );
	textMesh4.position.z	= 0.25;
	textMesh4.position.x	= -3;
	textMesh4.rotation.x = -90;

	// textMesh.add( axesHelper );
	markerRoot8.add( textMesh );
	markerRoot8.add( textMesh2 );
	markerRoot8.add( textMesh3 );
	markerRoot8.add( textMesh4 );
} );

//////////////////////////////////////////////////////////////////////////////
//		markerRoot9
//////////////////////////////////////////////////////////////////////////////

// build markerControls
var markerRoot9 = new THREE.Group
markerRoot9.name = 'Fluor'
scene.add(markerRoot9)
var markerControls = new THREEx.ArMarkerControls(arToolkitContext, markerRoot9, {
	type : 'pattern',
	// patternUrl : THREEx.ArToolkitContext.baseURL + 'assets/patterns/patt.hiro',
	patternUrl : THREEx.ArToolkitContext.baseURL + 'assets/patterns/pattern-9.patt',
})


// add a gizmo in the center of the marker
var geometry	= new THREE.PlaneGeometry(1.5,1.5,1.5);
var texture 	= THREE.ImageUtils.loadTexture('assets/patterns/pattern-9.png');
var material	= new THREE.MeshPhongMaterial({
	//wireframe: true,
	opacity: 1,
	map: texture
});

meshPlane	= new THREE.Mesh( geometry, material );
meshPlane.name = "plane";
meshPlane.rotation.x = -360;
meshPlane.position.y	= 0;
markerRoot9.add( meshPlane );

var core = new THREE.SphereGeometry(0.3,32,32);
core.radius = 2;
var texture 	= THREE.ImageUtils.loadTexture('assets/images/core/9.jpg');
var material	= new THREE.MeshPhongMaterial({
	//wireframe: true,
	opacity: 1,
	map: texture
});
coreMesh =  new THREE.Mesh( core, material );
coreMesh.position.y	= 1;
coreMesh.rotation.y	= -8;
coreMesh.rotation.z	= 0;
coreMesh.rotation.x = -90;
markerRoot9.add( coreMesh );


var torus = new THREE.TorusGeometry( 0.7, 0.015, 16, 100 );
var material = new THREE.MeshPhongMaterial( { color: 0xc0c0c0 } );
torusMesh =  new THREE.Mesh( torus, material );
torusMesh.position.y = 1;
torusMesh.rotation.x = 45;

var torus2 = new THREE.TorusGeometry( 1.2, 0.015, 16, 100 );
var material = new THREE.MeshPhongMaterial( { color: 0xc0c0c0 } );
torus2Mesh =  new THREE.Mesh( torus2, material );
torus2Mesh.position.y = 1;
torus2Mesh.rotation.x = 45;

var electronH1 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH1Mesh = new THREE.Mesh( electronH1, material );
electronH1Mesh.position.x	= 0;
electronH1Mesh.position.y	= 0.7;
torusMesh.add( electronH1Mesh );

var electronH2 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH2Mesh = new THREE.Mesh( electronH2, material );
electronH2Mesh.position.x	= 0;
electronH2Mesh.position.y	= -0.7;
torusMesh.add( electronH2Mesh );

var electronH3 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH3Mesh = new THREE.Mesh( electronH3, material );
electronH3Mesh.position.x	= 0;
electronH3Mesh.position.y	= 1.2;
torus2Mesh.add( electronH3Mesh );

var electronH4 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH4Mesh = new THREE.Mesh( electronH4, material );
electronH4Mesh.position.x	= 0;
electronH4Mesh.position.y	= -1.2;
torus2Mesh.add( electronH4Mesh );

var electronH5 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH5Mesh = new THREE.Mesh( electronH5, material );
electronH5Mesh.position.x	= 1.2;
electronH5Mesh.position.y	= 0;
torus2Mesh.add( electronH5Mesh );

var electronH6 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH6Mesh = new THREE.Mesh( electronH6, material );
electronH6Mesh.position.x	= -1.2;
electronH6Mesh.position.y	= 0;
torus2Mesh.add( electronH6Mesh );

var electronH7 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH7Mesh = new THREE.Mesh( electronH7, material );
electronH7Mesh.position.x	= 0.85;
electronH7Mesh.position.y	= 0.85;
torus2Mesh.add( electronH7Mesh );

var electronH8 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH8Mesh = new THREE.Mesh( electronH8, material );
electronH8Mesh.position.x	= -0.85;
electronH8Mesh.position.y	= -0.85;
torus2Mesh.add( electronH8Mesh );

var electronH9 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH9Mesh = new THREE.Mesh( electronH9, material );
electronH9Mesh.position.x	= 0.85;
electronH9Mesh.position.y	= -0.85;
torus2Mesh.add( electronH9Mesh );

// torusMesh.add( axesHelper );
markerRoot9.add( torusMesh );
markerRoot9.add( torus2Mesh );

var loader = new THREE.FontLoader();
loader.load( 'assets/fonts/helvetiker_regular.typeface.json', function ( font ) {

	var geometryTXT = new THREE.TextGeometry( 'Fluor Atom', {
		font: font,
		size: 0.2,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt = new THREE.MeshPhongMaterial( { color: 0xf5f5f5 } );
	textMesh = new THREE.Mesh( geometryTXT, materialTxt );
	textMesh.position.z	= -0.5;
	textMesh.position.x	= -3;
	textMesh.rotation.x = -90;

	var geometryTXT2 = new THREE.TextGeometry( 'Protons : 9', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt2 = new THREE.MeshPhongMaterial( { color: 0x2962ff } );
	textMesh2 = new THREE.Mesh( geometryTXT2, materialTxt2 );
	textMesh2.position.z	= -0.25;
	textMesh2.position.x	= -3;
	textMesh2.rotation.x = -90;

	var geometryTXT3 = new THREE.TextGeometry( 'Neutrons : 10', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt3 = new THREE.MeshPhongMaterial( { color: 0xed1941 } );
	textMesh3 = new THREE.Mesh( geometryTXT3, materialTxt3 );
	textMesh3.position.z	= 0;
	textMesh3.position.x	= -3;
	textMesh3.rotation.x = -90;


	var geometryTXT4 = new THREE.TextGeometry( 'Electrons : 9', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt4 = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
	textMesh4 = new THREE.Mesh( geometryTXT4, materialTxt4 );
	textMesh4.position.z	= 0.25;
	textMesh4.position.x	= -3;
	textMesh4.rotation.x = -90;

	// textMesh.add( axesHelper );
	markerRoot9.add( textMesh );
	markerRoot9.add( textMesh2 );
	markerRoot9.add( textMesh3 );
	markerRoot9.add( textMesh4 );
} );

//////////////////////////////////////////////////////////////////////////////
//		markerRoot10
//////////////////////////////////////////////////////////////////////////////

// build markerControls
var markerRoot10 = new THREE.Group
markerRoot10.name = 'Neon'
scene.add(markerRoot10)
var markerControls = new THREEx.ArMarkerControls(arToolkitContext, markerRoot10, {
	type : 'pattern',
	// patternUrl : THREEx.ArToolkitContext.baseURL + 'assets/patterns/patt.hiro',
	patternUrl : THREEx.ArToolkitContext.baseURL + 'assets/patterns/pattern-10.patt',
})


// add a gizmo in the center of the marker
var geometry	= new THREE.PlaneGeometry(1.5,1.5,1.5);
var texture 	= THREE.ImageUtils.loadTexture('assets/patterns/pattern-10.png');
var material	= new THREE.MeshPhongMaterial({
	//wireframe: true,
	opacity: 1,
	map: texture
});

meshPlane	= new THREE.Mesh( geometry, material );
meshPlane.name = "plane";
meshPlane.rotation.x = -360;
meshPlane.position.y	= 0;
markerRoot10.add( meshPlane );

var core = new THREE.SphereGeometry(0.3,32,32);
core.radius = 2;
var texture 	= THREE.ImageUtils.loadTexture('assets/images/core/10.jpg');
var material	= new THREE.MeshPhongMaterial({
	//wireframe: true,
	opacity: 1,
	map: texture
});
coreMesh =  new THREE.Mesh( core, material );
coreMesh.position.y	= 1;
coreMesh.rotation.y	= -8;
coreMesh.rotation.z	= 0;
coreMesh.rotation.x = -90;
markerRoot10.add( coreMesh );



var torus = new THREE.TorusGeometry( 0.7, 0.015, 16, 100 );
var material = new THREE.MeshPhongMaterial( { color: 0xc0c0c0 } );
torusMesh =  new THREE.Mesh( torus, material );
torusMesh.position.y = 1;
torusMesh.rotation.x = 45;

var torus2 = new THREE.TorusGeometry( 1.2, 0.015, 16, 100 );
var material = new THREE.MeshPhongMaterial( { color: 0xc0c0c0 } );
torus2Mesh =  new THREE.Mesh( torus2, material );
torus2Mesh.position.y = 1;
torus2Mesh.rotation.x = 45;

var electronH1 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH1Mesh = new THREE.Mesh( electronH1, material );
electronH1Mesh.position.x	= 0;
electronH1Mesh.position.y	= 0.7;
torusMesh.add( electronH1Mesh );

var electronH2 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH2Mesh = new THREE.Mesh( electronH2, material );
electronH2Mesh.position.x	= 0;
electronH2Mesh.position.y	= -0.7;
torusMesh.add( electronH2Mesh );

var electronH3 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH3Mesh = new THREE.Mesh( electronH3, material );
electronH3Mesh.position.x	= 0;
electronH3Mesh.position.y	= 1.2;
torus2Mesh.add( electronH3Mesh );

var electronH4 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH4Mesh = new THREE.Mesh( electronH4, material );
electronH4Mesh.position.x	= 0;
electronH4Mesh.position.y	= -1.2;
torus2Mesh.add( electronH4Mesh );

var electronH5 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH5Mesh = new THREE.Mesh( electronH5, material );
electronH5Mesh.position.x	= 1.2;
electronH5Mesh.position.y	= 0;
torus2Mesh.add( electronH5Mesh );

var electronH6 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH6Mesh = new THREE.Mesh( electronH6, material );
electronH6Mesh.position.x	= -1.2;
electronH6Mesh.position.y	= 0;
torus2Mesh.add( electronH6Mesh );

var electronH7 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH7Mesh = new THREE.Mesh( electronH7, material );
electronH7Mesh.position.x	= 0.85;
electronH7Mesh.position.y	= 0.85;
torus2Mesh.add( electronH7Mesh );

var electronH8 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH8Mesh = new THREE.Mesh( electronH8, material );
electronH8Mesh.position.x	= -0.85;
electronH8Mesh.position.y	= -0.85;
torus2Mesh.add( electronH8Mesh );

var electronH9 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH9Mesh = new THREE.Mesh( electronH9, material );
electronH9Mesh.position.x	= 0.85;
electronH9Mesh.position.y	= -0.85;
torus2Mesh.add( electronH9Mesh );

var electronH10 = new THREE.SphereGeometry(0.07,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
electronH10Mesh = new THREE.Mesh( electronH10, material );
electronH10Mesh.position.x	= -0.85;
electronH10Mesh.position.y	= 0.85;
torus2Mesh.add( electronH10Mesh );


// torusMesh.add( axesHelper );
markerRoot10.add( torusMesh );
markerRoot10.add( torus2Mesh );

var loader = new THREE.FontLoader();
loader.load( 'assets/fonts/helvetiker_regular.typeface.json', function ( font ) {

	var geometryTXT = new THREE.TextGeometry( 'Neon Atom', {
		font: font,
		size: 0.2,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt = new THREE.MeshPhongMaterial( { color: 0xf5f5f5 } );
	textMesh = new THREE.Mesh( geometryTXT, materialTxt );
	textMesh.position.z	= -0.5;
	textMesh.position.x	= -3;
	textMesh.rotation.x = -90;

	var geometryTXT2 = new THREE.TextGeometry( 'Protons : 10', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt2 = new THREE.MeshPhongMaterial( { color: 0x2962ff } );
	textMesh2 = new THREE.Mesh( geometryTXT2, materialTxt2 );
	textMesh2.position.z	= -0.25;
	textMesh2.position.x	= -3;
	textMesh2.rotation.x = -90;

	var geometryTXT3 = new THREE.TextGeometry( 'Neutrons : 10', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt3 = new THREE.MeshPhongMaterial( { color: 0xed1941 } );
	textMesh3 = new THREE.Mesh( geometryTXT3, materialTxt3 );
	textMesh3.position.z	= 0;
	textMesh3.position.x	= -3;
	textMesh3.rotation.x = -90;


	var geometryTXT4 = new THREE.TextGeometry( 'Electrons : 10', {
		font: font,
		size: 0.125,
		height: 0.01,
		curveSegments: 12,
	} );
	var materialTxt4 = new THREE.MeshPhongMaterial( { color: 0xffdc5e } );
	textMesh4 = new THREE.Mesh( geometryTXT4, materialTxt4 );
	textMesh4.position.z	= 0.25;
	textMesh4.position.x	= -3;
	textMesh4.rotation.x = -90;

	// textMesh.add( axesHelper );
	markerRoot10.add( textMesh );
	markerRoot10.add( textMesh2 );
	markerRoot10.add( textMesh3 );
	markerRoot10.add( textMesh4 );
} );




onRenderFcts.push(function(){
	// console.log(markerRoot10.children[2]);
	//ONE TORUS
	markerRoot1.children[2].rotation.z += 0.2;
	markerRoot2.children[2].rotation.z += 0.2;
	//TWO TORUS
	markerRoot3.children[2].rotation.z += 0.2;
	markerRoot3.children[3].rotation.z += 0.14;
	markerRoot4.children[2].rotation.z += 0.2;
	markerRoot4.children[3].rotation.z += 0.14;
	markerRoot5.children[2].rotation.z += 0.2;
	markerRoot5.children[3].rotation.z += 0.14;
	markerRoot6.children[2].rotation.z += 0.2;
	markerRoot6.children[3].rotation.z += 0.14;
	markerRoot7.children[2].rotation.z += 0.2;
	markerRoot7.children[3].rotation.z += 0.14;
	markerRoot8.children[2].rotation.z += 0.2;
	markerRoot8.children[3].rotation.z += 0.14;
	markerRoot9.children[2].rotation.z += 0.2;
	markerRoot9.children[3].rotation.z += 0.14;
	markerRoot10.children[2].rotation.z += 0.2;
	markerRoot10.children[3].rotation.z += 0.14;
	meshPlane.rotation.x = options.PlaneRotX;
	coreMesh.rotation.y = options.CoreRotY;
})

})()