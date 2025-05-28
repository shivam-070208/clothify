// Import necessary modules from Three.js
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Loads a GLB model into a specified HTML div element.
 * @param {string} containerId - The ID of the div element to render the model in.
 * @param {string} modelPath - The path to the .glb model file.
 */
export function loadGLBModel(containerId, modelPath) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with id "${containerId}" not found.`);
    return;
  }

  // Scene setup
const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdddddd);

  // Camera setup
  const camera = new THREE.PerspectiveCamera(
    60,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 1.5, 3);

  // Renderer setup
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  // Load the GLB model
    const loader = new GLTFLoader();
  loader.load(
    modelPath,
    function (gltf) {
      const model = gltf.scene;
      scene.add(model);

      // Compute the bounding box to center the model
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      model.position.sub(center); // Center the model

      // Adjust camera to fit the model
      const size = box.getSize(new THREE.Vector3()).length();
      const distance = size * 1.0;
      camera.position.set(0, size / 2, distance);
      camera.lookAt(0, 0, 0);
    },
    undefined,
    function (error) {
      console.error('An error occurred while loading the model:', error);
    }
  );

  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}
