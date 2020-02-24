function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = new ArrayBuffer(1337);
// v6 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
const v12 = v6.slice(1024,1337);
// v12 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v14 = undefined;
const v15 = new DataView(v12,v2,v14);
// v15 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["setInt8", "setUint8", "setUint16", "setFloat64", "getUint16", "setInt32", "getFloat32", "setUint32", "getInt32", "getFloat64", "getInt16", "getInt8", "getUint8", "getUint32", "setInt16", "setFloat32"])
function v16(v17,v18) {
    let v21 = -2;
    while (v21 < 1337) {
        const v22 = v21 + 1;
        // v22 = .primitive
        v21 = v22;
    }
    const v23 = v15.getUint8(v9,2454811828);
    // v23 = .integer
    const v24 = v15.setInt32(v23,v18);
    // v24 = .undefined
}
const v26 = [99551059];
// v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v27 = v26;
const v28 = v16(v27);
// v28 = .unknown
const v29 = v16(v2);
// v29 = .unknown
const v30 = v16();
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
