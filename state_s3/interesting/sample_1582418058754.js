function main() {
const v4 = (-2.2250738585072014e-308).toLocaleString();
// v4 = .unknown
const v7 = new ArrayBuffer(1337);
// v7 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v10 = v7.slice(-2588121454,v4);
// v10 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
v12 = v13;
function v16(v17,v18,v19,v20) {
    'use strict'
    const v23 = Float32Array(19873);
    // v23 = .unknown
    let v26 = 0;
    let v29 = 0;
}
let v31 = 0;
const v32 = v31 + 1;
// v32 = .primitive
v31 = v32;
}
%NeverOptimizeFunction(main);
main();
