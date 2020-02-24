function main() {
const v3 = new ArrayBuffer(1337);
// v3 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v7 = v3.slice(128,3379460722);
// v7 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v9 = undefined;
const v10 = new DataView(v7,127,v9);
// v10 = .object(ofGroup: DataView, withProperties: ["__proto__", "byteLength", "byteOffset", "buffer"], withMethods: ["getInt32", "setUint8", "getUint16", "getFloat32", "getUint8", "setFloat32", "setInt32", "setFloat64", "getInt16", "getFloat64", "setUint32", "setInt8", "setInt16", "getInt8", "getUint32", "setUint16"])
const v11 = v10.buffer;
// v11 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
}
%NeverOptimizeFunction(main);
main();
