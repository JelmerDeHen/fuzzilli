function main() {
const v4 = new ArrayBuffer(1337);
// v4 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v8 = v4.slice(1024,1337);
// v8 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v10 = undefined;
const v11 = new DataView(v8,127,v10);
// v11 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "__proto__", "byteLength"], withMethods: ["getUint8", "getInt8", "getInt32", "setInt16", "setFloat32", "getFloat64", "getUint32", "setInt32", "getInt16", "setUint8", "getUint16", "setUint32", "setInt8", "setUint16", "getFloat32", "setFloat64"])
for (const v13 in "boolean") {
    let v16 = 0;
    let v27 = 0;
    const v29 = [13.37,13.37,13.37,13.37,13.37];
    // v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v30 = v29;
    const v31 = v27 + 1;
    // v31 = .primitive
    v27 = v31;
    const v32 = v16 + 1;
    // v32 = .primitive
    v16 = v32;
    const v35 = new Int8Array(236809597);
    // v35 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reduce", "sort", "copyWithin", "set", "fill", "slice", "reverse", "includes", "lastIndexOf", "join", "find", "entries", "findIndex", "indexOf", "keys", "forEach", "filter", "map", "every", "subarray", "some", "reduceRight", "values"])
}
const v36 = 1337 < ArrayBuffer;
// v36 = .boolean
}
%NeverOptimizeFunction(main);
main();
