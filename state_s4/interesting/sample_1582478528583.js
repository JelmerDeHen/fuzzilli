function main() {
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = [13.37,4294967297,4294967297,Int32Array];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = {__proto__:1337,d:4294967297,valueOf:13.37};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "d"])
const v9 = [1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v13 = new ArrayBuffer(1337);
// v13 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v15 = 0;
const v16 = v15 + 1;
// v16 = .primitive
const v19 = v13.slice(1024,1337);
// v19 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v21 = undefined;
const v22 = new DataView(v19,v9,v21);
// v22 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["setInt8", "setInt16", "setUint8", "getFloat64", "getInt16", "getUint32", "getUint8", "setFloat64", "getUint16", "setFloat32", "getInt8", "setUint32", "getFloat32", "setInt32", "getInt32", "setUint16"])
function v23(v24,v25) {
    let v27 = 0;
    let v30 = 0;
    const v31 = v30 + 1;
    // v31 = .primitive
    let v33 = -2;
    while (v33 < 1337) {
        v5[1337] = v23;
        const v34 = v33 + 1;
        // v34 = .primitive
        v33 = v34;
    }
    let v35 = v27;
    const v36 = v22.getInt16(v16,2454811828);
    // v36 = .integer
    const v37 = v6.__proto__;
    // v37 = .object()
    const v38 = v37.__proto__;
    // v38 = .unknown
    const v39 = v37[0];
    // v39 = .unknown
    return v3;
}
const v41 = [1337];
// v41 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v42 = v41;
const v43 = v23(v42);
// v43 = .unknown
const v44 = v23(v9);
// v44 = .unknown
}
%NeverOptimizeFunction(main);
main();
