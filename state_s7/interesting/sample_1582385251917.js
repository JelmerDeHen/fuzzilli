function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = new ArrayBuffer(1337);
// v6 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
const v12 = v6.slice(1024,1337);
// v12 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v14 = undefined;
const v15 = new DataView(v12,v2,v14);
// v15 = .object(ofGroup: DataView, withProperties: ["buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["setInt32", "getFloat32", "getFloat64", "setInt8", "getUint32", "setInt16", "getUint16", "getInt8", "getUint8", "setFloat64", "getInt32", "setUint8", "getInt16", "setUint32", "setUint16", "setFloat32"])
function v16(v17,v18) {
    let v21 = 0;
    const v22 = v21 + 1;
    // v22 = .primitive
    let v24 = -1;
    while (v24 < 1337) {
        const v25 = v24 + 1;
        // v25 = .primitive
        v24 = v25;
    }
    const v26 = v15.getInt32(v9,2454811828);
    // v26 = .integer
    const v27 = v15.setInt32(v26,v18);
    // v27 = .undefined
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v30 = v29;
const v31 = v16(v30);
// v31 = .unknown
const v32 = v16(v2);
// v32 = .unknown
let v36 = 0;
let v39 = 0;
}
%NeverOptimizeFunction(main);
main();
