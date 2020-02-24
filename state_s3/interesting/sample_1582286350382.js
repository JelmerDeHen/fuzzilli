function main() {
const v19 = new ArrayBuffer(1337);
// v19 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v23 = v19.slice(1024,1337);
// v23 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v25 = undefined;
const v26 = new DataView(v23,127,v25);
// v26 = .object(ofGroup: DataView, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset"], withMethods: ["getUint8", "setUint32", "setUint16", "setInt16", "getInt8", "getInt16", "getInt32", "setFloat64", "getFloat64", "getFloat32", "setInt8", "setInt32", "getUint16", "setUint8", "setFloat32", "getUint32"])
const v27 = gc();
// v27 = .undefined
}
%NeverOptimizeFunction(main);
main();
