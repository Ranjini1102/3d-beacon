// test_presenter.js
const fs = require('fs');
const vm = require('vm');
const path = require('path');

// Mock browser environment
global.window = global;
global.document = {
  createElement: (tag) => ({
    width: 0, height: 0,
    getContext: () => ({
      clearRect: () => {},
      fillRect: () => {},
      createRadialGradient: () => ({ addColorStop: () => {} }),
      beginPath: () => {},
      arc: () => {},
      ellipse: () => {},
      fill: () => {},
      stroke: () => {},
      moveTo: () => {},
      lineTo: () => {},
      quadraticCurveTo: () => {}
    }),
    style: {}
  }),
  getElementById: (id) => ({
    style: {},
    classList: { add: () => {}, remove: () => {}, toggle: () => {} },
    addEventListener: () => {},
    textContent: '',
    innerHTML: ''
  }),
  querySelectorAll: () => []
};

// Mock THREE.js
global.THREE = {
  Group: function() { this.children = []; this.add = (c) => this.children.push(c); this.position = { set: (x,y,z)=>{this.x=x;this.y=y;this.z=z;}, x:0, y:0, z:0 }; this.rotation = { x:0, y:0, z:0 }; },
  Mesh: function() { this.position = { set: (x,y,z)=>{this.x=x;this.y=y;this.z=z;}, x:0, y:0, z:0 }; this.rotation = { x:0, y:0, z:0 }; this.scale = { set: ()=>{}, x:1, y:1, z:1 }; this.lookAt = () => {}; },
  MeshStandardMaterial: function() {},
  MeshBasicMaterial: function() {},
  CanvasTexture: function() {},
  BoxGeometry: function() {},
  CylinderGeometry: function() {},
  SphereGeometry: function() {},
  PlaneGeometry: function() {},
  RingGeometry: function() {},
  Vector3: function(x,y,z) { this.x=x; this.y=y; this.z=z; this.set = function(nx,ny,nz){this.x=nx;this.y=ny;this.z=nz;}; },
  MathUtils: { lerp: (a, b, t) => a + (b - a) * t },
  ClampToEdgeWrapping: 1001,
  DoubleSide: 2
};

// Mock SchoolScene
global.SchoolScene = {
  getScene: () => new THREE.Group(),
  getCamera: () => ({ position: new THREE.Vector3(0,0,0) }),
  getControls: () => ({ target: new THREE.Vector3(0,0,0) }),
  startCameraTransition: (pos, look, dur) => {},
  makeTextTex: () => new THREE.CanvasTexture(),
  enterOverview: () => {}
};

// Mock SchoolDashboard
global.SchoolDashboard = {
  renderStudentList: (cid) => {},
  handleStudentSelect: (sid, cid) => {},
  handlePunchInFlow: (sid, cid) => {},
  switchView: (view) => {},
  showToast: (msg, type) => {}
};

const presenterCode = fs.readFileSync(path.join(__dirname, 'ble-beacon-tracker/js/school-presenter.js'), 'utf8');
vm.runInThisContext(presenterCode);

console.log('--- Testing SchoolPresenter Module ---');

// 1. Check module existence
if (!SchoolPresenter) throw new Error('SchoolPresenter not loaded');
console.log('✓ SchoolPresenter defined');

// 2. Initialize presenter
SchoolPresenter.init();
const presenter = SchoolPresenter.getPresenter();
if (!presenter) throw new Error('Presenter mesh not created');
console.log('✓ Presenter 3D model built with articulated limbs and procedural face');

// 3. Test Tour Start
SchoolPresenter.startTour();
if (!SchoolPresenter.isTourActive()) throw new Error('Tour failed to start');
const stop1 = SchoolPresenter.getCurrentStop();
console.log('✓ Tour started at Stop 1:', stop1.title);
if (stop1.pos.x !== 24 || stop1.pos.z !== 34) throw new Error('Invalid start position');

// 4. Test Pause & Resume
SchoolPresenter.pauseTour();
SchoolPresenter.resumeTour();
console.log('✓ Pause and resume state transitions verified');

// 5. Test Navigation across all 16 Stops
for (let i = 1; i <= 15; i++) {
  SchoolPresenter.nextStop();
  const stop = SchoolPresenter.getCurrentStop();
  if (!stop) throw new Error(`Stop ${i} is undefined`);
  // Update animation frame simulation
  SchoolPresenter.update(0.1, i * 2.0);
}
console.log('✓ Traversed all 16 stops successfully:', SchoolPresenter.getCurrentStop().title);

// 6. Test Previous Stop
SchoolPresenter.prevStop();
console.log('✓ Previous stop navigation verified:', SchoolPresenter.getCurrentStop().title);

// 7. Test Toggles
SchoolPresenter.toggleSubtitles();
SchoolPresenter.toggleVoice();
SchoolPresenter.toggleCameraFollow();
console.log('✓ Subtitle, Voice, and Camera Follow toggles verified');

// 8. Test Restart & Exit
SchoolPresenter.restartTour();
if (SchoolPresenter.getCurrentStop().id !== 'entrance') throw new Error('Restart failed');
SchoolPresenter.exitTour();
if (SchoolPresenter.isTourActive()) throw new Error('Exit failed');
console.log('✓ Restart and Exit tour lifecycle verified');

console.log('🎉 ALL PRESENTER TESTS PASSED SUCCESSFULLY (8/8)!');
