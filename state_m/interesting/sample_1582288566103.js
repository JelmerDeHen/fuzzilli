function main() {
let v1 = 13.37;
const v3 = [9007199254740991];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = new ArrayBuffer(1337);
// v7 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v11 = v7.slice(1024,1337);
// v11 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v12 = new DataView(v11,127,v1);
// v12 = .object(ofGroup: DataView, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset"], withMethods: ["setUint32", "getUint16", "setUint8", "getInt16", "getInt32", "getFloat32", "setInt32", "setFloat32", "setUint16", "setFloat64", "setInt16", "getFloat64", "getUint8", "getUint32", "getInt8", "setInt8"])
let v15 = 0;
const v16 = v15 + 1;
// v16 = .primitive
v15 = v16;
let v20 = 0;
let v27 = 0;
const v29 = [13.37,13.37,13.37,13.37,13.37];
// v29 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v30 = v29;
const v31 = v27 + 1;
// v31 = .primitive
v27 = v31;
const v32 = v20 + 1;
// v32 = .primitive
v20 = v32;
v3.__proto__ = v12;
let v35 = 0;
const v36 = v35 + 1;
// v36 = .primitive
v35 = v36;
}
%NeverOptimizeFunction(main);
main();
