import fragmentShaderSource from "./resources/frag";
import vertexShaderSource from "./resources/vert";

const canvas = <HTMLCanvasElement>document.querySelector("canvas");
const gl = <WebGL2RenderingContext>canvas.getContext('webgl2');

//function to create shaders
const createShader = (gl:WebGL2RenderingContext, type:number, source:string) => {
  var shader = <WebGLShader>gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }
 
  console.log(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
}

//create both shaders
var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

//create program to attach shaders
function createProgram(gl:WebGL2RenderingContext, vertexShader:WebGLShader, fragmentShader:WebGLShader) {
  var program = <WebGLProgram>gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  var success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }
 
  console.log(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
}

//call the program
var program = createProgram(gl, <WebGLShader>vertexShader, <WebGLShader>fragmentShader);
