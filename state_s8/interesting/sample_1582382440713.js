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
    let v20 = 0;
    let v23 = 0;
    const v24 = v23 + 1;
    // v24 = .primitive
    let v26 = -2;
    while (v26 < 1337) {
        const v27 = v26 + 1;
        // v27 = .primitive
        v26 = v27;
    }
    let v29 = v20;
    const v30 = v15.getInt16(v9,2454811828);
    // v30 = .integer
    const v31 = v29 + 1;
    // v31 = .primitive
    const v32 = v15.setInt32(v30,v18);
    // v32 = .undefined
    v29 = v31;
}
const v34 = [1337];
// v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v35 = v34;
const v36 = v16(v35);
// v36 = .unknown
const v37 = v16(v2);
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
