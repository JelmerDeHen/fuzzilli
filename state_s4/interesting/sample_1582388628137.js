function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v6(v7,v8,v9,v10) {
    'use strict'
}
const v11 = v6 + 1;
// v11 = .primitive
try {
    const v15 = new ArrayBuffer(1337);
    // v15 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    v15.constructor = v11;
    const v19 = typeof v15;
    // v19 = .string
    const v21 = v19 === "boolean";
    // v21 = .boolean
    v4.valueOf = parseFloat;
    delete v15.byteLength;
    function v22(v23,v24,v25) {
        const v26 = "byteLength".trim();
        // v26 = .undefined
        return 0;
    }
    const v27 = "byteLength" + 100;
    // v27 = .primitive
    const v30 = v15.slice(1024,1337);
    // v30 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
} catch(v31) {
}
const v32 = [1337];
// v32 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v33 = [1337];
// v33 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v34 = {__proto__:parseFloat,a:v32,toString:"byteLength",length:13.37};
// v34 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "a", "length"], withMethods: ["__proto__"])
const v35 = {__proto__:parseFloat,c:v33,e:v32};
// v35 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "e"], withMethods: ["__proto__"])
let v36 = v35;
let v42 = 0;
const v44 = new Uint16Array(1337);
// v44 = .object(ofGroup: Uint16Array, withProperties: ["length", "byteLength", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["fill", "findIndex", "filter", "entries", "map", "find", "sort", "every", "reduce", "join", "set", "copyWithin", "subarray", "reverse", "some", "indexOf", "includes", "reduceRight", "lastIndexOf", "values", "slice", "keys", "forEach"])
v44.constructor = Int32Array;
const v45 = v44.slice(Int32Array,100);
// v45 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "__proto__", "length", "byteOffset", "byteLength", "constructor"], withMethods: ["findIndex", "subarray", "values", "slice", "entries", "sort", "filter", "includes", "every", "some", "reduceRight", "reverse", "fill", "forEach", "copyWithin", "set", "join", "keys", "find", "lastIndexOf", "reduce", "indexOf", "map"])
let v48 = 0;
const v49 = new Int32Array(v44);
// v49 = .object(ofGroup: Int32Array, withProperties: ["length", "__proto__", "constructor", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "copyWithin", "forEach", "subarray", "entries", "find", "reduceRight", "set", "filter", "keys", "indexOf", "some", "slice", "reverse", "values", "reduce", "findIndex", "includes", "sort", "fill", "every", "lastIndexOf", "join"])
const v50 = v45.__proto__;
// v50 = .object()
with (v33) {
    const v52 = v49.buffer;
    // v52 = .object()
}
let v53 = v48;
const v54 = parseFloat("byteLength");
// v54 = .float
const v55 = v33.length;
// v55 = .integer
v4.length = 1;
for (let v60 = 0; v60 < 9; v60++) {
    for (const v61 in v44) {
        const v62 = [...v61];
        // v62 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    }
}
const v63 = parseFloat("byteLength");
// v63 = .float
const v64 = v11 - v54;
// v64 = .number
const v65 = parseFloat % 1337;
// v65 = .number
let v68 = 0;
do {
    const v69 = v32[8];
    // v69 = .unknown
    const v70 = v68 + 1;
    // v70 = .primitive
    v68 = v70;
} while (v68 < 7);
for (let v74 = 0; v74 < 100; v74++) {
    const v75 = v6(v50,v6,v48);
    // v75 = .unknown
}
const v76 = v6(0,1337);
// v76 = .unknown
}
%NeverOptimizeFunction(main);
main();
