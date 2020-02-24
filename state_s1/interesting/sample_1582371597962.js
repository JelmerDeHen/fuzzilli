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
        v17 = v18;
        const v20 = v11.getUint32(0,v14);
        // v20 = .integer
    }
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v23 = v22;
const v24 = v12(v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
