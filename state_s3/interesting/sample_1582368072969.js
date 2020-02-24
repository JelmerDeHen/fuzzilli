function main() {
const v3 = [1337,2147483648];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v8 = 0;
let v11 = -128;
const v12 = 3156875969 <= 8;
// v12 = .boolean
let v14 = v12;
const v17 = new ArrayBuffer(1337);
// v17 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v20 = v17.slice(1024,1337);
// v20 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v22 = undefined;
const v23 = new DataView(v20,v3,v22);
// v23 = .object(ofGroup: DataView, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset"], withMethods: ["getUint8", "setUint32", "setUint16", "setInt16", "getInt8", "getInt16", "getInt32", "setFloat64", "getFloat64", "getFloat32", "setInt8", "setInt32", "getUint16", "setUint8", "setFloat32", "getUint32"])
let v25 = -2539122612;
function v26(v27,v28) {
    for (let v32 = 0; v32 < 100; v32++) {
        function v33(v34,v35) {
        }
    }
    const v36 = [v20];
    // v36 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v37 = v23.getUint32(v28,-747269.2674503227);
    // v37 = .integer
    if (v28) {
    } else {
        const v38 = v26(v25,v36);
        // v38 = .unknown
    }
}
const v40 = [-1024];
// v40 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v41 = v40;
const v42 = v26(v41);
// v42 = .unknown
}
%NeverOptimizeFunction(main);
main();
