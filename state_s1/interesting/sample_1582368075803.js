function main() {
const v3 = [1337,2147483648];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v8 = 0;
let v11 = -128;
const v12 = 3156875969 <= 8;
// v12 = .boolean
let v14 = v12;
const v17 = new ArrayBuffer(1337);
// v17 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v20 = v17.slice(1024,1337);
// v20 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v22 = undefined;
const v23 = new DataView(v20,v3,v22);
// v23 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["setInt8", "setUint8", "setUint16", "setFloat64", "getUint16", "setInt32", "getFloat32", "setUint32", "getInt32", "getFloat64", "getInt16", "getInt8", "getUint8", "getUint32", "setInt16", "setFloat32"])
let v25 = -2539122612;
function v26(v27,v28) {
    for (let v32 = 0; v32 < 100; v32++) {
        function v33(v34,v35) {
        }
    }
    const v36 = [v20];
    // v36 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v37 = v23.getUint32(v28,-747269.2674503227);
    // v37 = .integer
    if (v28) {
    } else {
        const v38 = v26(v25,v36);
        // v38 = .unknown
    }
}
const v40 = [-1024];
// v40 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v41 = v40;
const v42 = v26(v41);
// v42 = .unknown
}
%NeverOptimizeFunction(main);
main();
