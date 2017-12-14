import { WebGLRenderer, Scene, PerspectiveCamera, Vector2 } from 'three';
import CustomMesh from './objects/custommesh.js';

export default function() {

  const width = window.innerWidth;
  const height = window.innerHeight;

  const renderer = new WebGLRenderer();
  renderer.setSize(width, height);
  renderer.setClearColor(0xffffff, 1);
  document.body.appendChild(renderer.domElement);
  renderer.domElement.style.position = 'fixed';
  renderer.domElement.className = 'background_canvas';
  renderer.domElement.style.top = 0;
  renderer.domElement.style.zIndex = -1;

  const camera = new PerspectiveCamera(40, width / height, 0.0001, 10000);
  camera.position.z = 12.0;
  const scene = new Scene();

  const uniforms = {
    time: { value: 1.0 },
    resolution: { value: new Vector2(width, height) }
  };

  const mesh = new CustomMesh(uniforms);

  function init() {
    scene.add(mesh);
  }

  function render() {
    renderer.render(scene, camera);
  }

  function animate() {
    uniforms.time.value += 0.05;
    render();
    requestAnimationFrame(animate);
  }

  init();
  animate();
}
