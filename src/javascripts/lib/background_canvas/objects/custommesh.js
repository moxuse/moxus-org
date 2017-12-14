import { Mesh, BufferGeometry, ShaderMaterial, BufferAttribute, Vector2, TriangleStripDrawMode } from 'three';

import vertex_shader from './shader/shader.vert';
import fragmental_shader from './shader/shader.frag';

export default class CustomMesh extends Mesh {
  constructor(uniforms) {
    const numPoint = 120;
    const radius = 3.5;
    const weight = 0.28;
    const geometry = new BufferGeometry();

    const vertices = CustomMesh.makeGeom(numPoint, radius, weight);
    geometry.addAttribute('position', new BufferAttribute(vertices.positions, 3));
    geometry.addAttribute('indexNum', new BufferAttribute(vertices.indices, 1));

    const material = new ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertex_shader,
      fragmentShader: fragmental_shader
    });

    super(geometry, material);
    this.uniforms = uniforms;
    this.drawMode = TriangleStripDrawMode;
  }

  static makeGeom(numPoint, radius, weight) {
    let arr = [];
    let i_arr = [];
    let capturedPt1 = new Vector2();
    let capturedPt2 = new Vector2();
    let p_deg = 360 / numPoint;
    for (let i = 0; i < numPoint + 1; i++) {
      const rad = p_deg * i * Math.PI / 180;
      const rad2 = p_deg * (i + 0.5) * Math.PI / 180;
      const pt1 = new Vector2(Math.sin(rad) * radius, Math.cos(-rad) * radius);
      const pt2 = new Vector2(Math.sin(rad2) * radius * (1.0 - weight), Math.cos(-rad2) * radius * (1.0 - weight));

      if (i === 0) {
        capturedPt1.copy(pt1);
        capturedPt2.copy(pt2);
      }

      if (i !== numPoint) {
        arr.push(pt1.x);
        arr.push(pt1.y);
        arr.push(0.0);

        arr.push(pt2.x);
        arr.push(pt2.y);
        arr.push(0.0);
      } else {
        arr.push(capturedPt1.x);
        arr.push(capturedPt1.y);
        arr.push(0.0);

        arr.push(capturedPt2.x);
        arr.push(capturedPt2.y);
        arr.push(0.0);
      }
      i_arr.push(i);
      i_arr.push(i + 1);
    }
    return {indices: new Uint16Array(i_arr), positions: new Float32Array(arr)};
  }
}
