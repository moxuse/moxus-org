varying vec2 vUv;
// varying float vSize;

uniform float time;
// uniform float alpha;

void main() {
  vec3 col = vec3(sin(vUv.x * 210.0 + time) * 0.8 * vUv.y , 2.5 - cos(vUv.y * 210.0 + time) * 0.5 * vUv.x + vUv.y, 2.0);
  gl_FragColor = vec4(col, 0.4); 
}
