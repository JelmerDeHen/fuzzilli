function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = new ArrayBuffer(1337);
// v5 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v8 = v5.slice(1024,1337);
// v8 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v10 = undefined;
const v11 = new DataView(v8,v1,v10);
// v11 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["setInt8", "setUint8", "setUint16", "setFloat64", "getUint16", "setInt32", "getFloat32", "setUint32", "getInt32", "getFloat64", "getInt16", "getInt8", "getUint8", "getUint32", "setInt16", "setFloat32"])
function v12(v13,v14) {
    let v17 = -2;
    while (v17 < 1337) {
        const v18 = v17 + 1;
        // v18 = .primitive
        const v19 = v11.getFloat64(v14);
        // v19 = .float
        v17 = v18;
        const v21 = v11.setFloat32(0,v14);
        // v21 = .undefined
        const v25 = new Int16Array(64);
        // v25 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
        v25.constructor = Uint8Array;
        const v28 = v25.slice(10,1337);
        // v28 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "byteLength", "constructor", "length", "byteOffset"], withMethods: ["reduce", "fill", "subarray", "find", "keys", "filter", "some", "indexOf", "join", "findIndex", "entries", "slice", "reverse", "copyWithin", "sort", "includes", "map", "every", "lastIndexOf", "values", "reduceRight", "forEach", "set"])
    }
    return v1;
}
const v30 = [1337];
// v30 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v31 = v30;
const v32 = v12(v31);
// v32 = .unknown
}
%NeverOptimizeFunction(main);
main();
