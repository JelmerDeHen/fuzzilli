function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = new ArrayBuffer(1337);
// v6 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
const v12 = v6.slice(1024,1337);
// v12 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v14 = undefined;
const v15 = new DataView(v12,v2,v14);
// v15 = .object(ofGroup: DataView, withProperties: ["__proto__", "byteLength", "byteOffset", "buffer"], withMethods: ["getInt32", "setUint8", "getUint16", "getFloat32", "getUint8", "setFloat32", "setInt32", "setFloat64", "getInt16", "getFloat64", "setUint32", "setInt8", "setInt16", "getInt8", "getUint32", "setUint16"])
function v16(v17,v18) {
    let v21 = 0;
    const v22 = v21 + 1;
    // v22 = .primitive
    let v24 = -2;
    while (v24 < 1337) {
        const v25 = v24 + 1;
        // v25 = .primitive
        v24 = v25;
    }
    const v26 = v15.getInt8(v9,2454811828);
    // v26 = .integer
    const v27 = v15.setInt32(v26,v18);
    // v27 = .undefined
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v30 = v29;
const v31 = v16(v30);
// v31 = .unknown
const v32 = v16(v2);
// v32 = .unknown
}
%NeverOptimizeFunction(main);
main();
