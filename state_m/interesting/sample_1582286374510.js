function main() {
const v4 = new ArrayBuffer(1337);
// v4 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v8 = v4.slice(1024,1337);
// v8 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v10 = undefined;
const v11 = new DataView(v8,127,v10);
// v11 = .object(ofGroup: DataView, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset"], withMethods: ["setUint32", "getUint16", "setUint8", "getInt16", "getInt32", "getFloat32", "setInt32", "setFloat32", "setUint16", "setFloat64", "setInt16", "getFloat64", "getUint8", "getUint32", "getInt8", "setInt8"])
const v12 = gc();
// v12 = .undefined
const v13 = gc();
// v13 = .undefined
}
%NeverOptimizeFunction(main);
main();
