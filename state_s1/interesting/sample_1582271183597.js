function main() {
const v1 = {};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v2 = [v1,v1];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
try {
    try {
        const v3 = "c"();
        // v3 = .unknown
    } catch(v4) {
        const v6 = {set:v4};
        // v6 = .object(ofGroup: Object, withProperties: ["__proto__", "set"])
        const v8 = Object.defineProperty(v4,"length",v6);
        // v8 = .undefined
    }
} catch(v9) {
}
const v12 = new Int8Array(61060);
// v12 = .object(ofGroup: Int8Array, withProperties: ["buffer", "__proto__", "byteOffset", "length", "constructor", "byteLength"], withMethods: ["fill", "set", "sort", "subarray", "slice", "reduce", "includes", "every", "some", "copyWithin", "reduceRight", "reverse", "indexOf", "lastIndexOf", "values", "entries", "keys", "join", "map", "find", "findIndex", "forEach", "filter"])
const v18 = new Uint32Array(50325);
// v18 = .object(ofGroup: Uint32Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["fill", "sort", "entries", "some", "map", "findIndex", "subarray", "values", "forEach", "filter", "indexOf", "find", "reduce", "keys", "reduceRight", "includes", "copyWithin", "set", "lastIndexOf", "slice", "every", "join", "reverse"])
let v22 = 0;
const v23 = v22 + 1;
// v23 = .primitive
v22 = v23;
let v26 = 0;
const v27 = v12 != null;
// v27 = .boolean
const v28 = v26 + 1;
// v28 = .primitive
v26 = v28;
let v31 = 0;
const v32 = v31 + 1;
// v32 = .primitive
v31 = v32;
}
%NeverOptimizeFunction(main);
main();
