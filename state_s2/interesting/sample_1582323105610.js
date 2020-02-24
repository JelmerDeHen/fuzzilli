function main() {
function v0(v1,v2,v3,v4) {
    'use strict'
}
const v5 = v0 + 1;
// v5 = .primitive
try {
    const v9 = new ArrayBuffer(1337);
    // v9 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
    v9.constructor = v5;
    const v15 = v9.slice(1024,1337);
    // v15 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
} catch(v16) {
}
}
%NeverOptimizeFunction(main);
main();
