varying vec2 vUv;
// varying float vSize;

// uniform vec3 customColor;
uniform float time;
uniform vec2 resolution;

attribute float indexNum;


void main() {
  vUv = position.xy;
  vec3 pos = position;
  pos.x += sin(time * 1.3 - position.y * 1.25) * sin(time * 0.03) * 1.22;
  pos.y += sin(time * 0.94 - position.x * 0.85) * 0.3;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 0.8);
}
