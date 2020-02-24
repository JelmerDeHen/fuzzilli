function main() {
let v2 = 0;
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
try {
    const v8 = new ArrayBuffer(DataView);
    // v8 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    const v12 = v8.slice(1024,1337);
    // v12 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    let v13 = 1337;
    const v14 = new DataView(v12,127,v13);
    // v14 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["setInt8", "setInt16", "setUint8", "getFloat64", "getInt16", "getUint32", "getUint8", "setFloat64", "getUint16", "setFloat32", "getInt8", "setUint32", "getFloat32", "setInt32", "getInt32", "setUint16"])
} catch(v15) {
}
}
%NeverOptimizeFunction(main);
main();
