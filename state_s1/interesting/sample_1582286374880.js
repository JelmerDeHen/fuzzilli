function main() {
const v4 = new ArrayBuffer(1337);
// v4 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v8 = v4.slice(1024,1337);
// v8 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v10 = undefined;
const v11 = new DataView(v8,127,v10);
// v11 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["setInt8", "setUint8", "setUint16", "setFloat64", "getUint16", "setInt32", "getFloat32", "setUint32", "getInt32", "getFloat64", "getInt16", "getInt8", "getUint8", "getUint32", "setInt16", "setFloat32"])
const v12 = gc();
// v12 = .undefined
const v13 = gc();
// v13 = .undefined
}
%NeverOptimizeFunction(main);
main();
