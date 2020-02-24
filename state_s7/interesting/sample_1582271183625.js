function main() {
const v1 = {};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v2 = [v1,v1];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
// v12 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "constructor", "buffer", "byteLength", "__proto__", "length"], withMethods: ["values", "copyWithin", "fill", "join", "keys", "sort", "entries", "forEach", "subarray", "some", "map", "reduceRight", "reduce", "lastIndexOf", "filter", "findIndex", "reverse", "every", "set", "includes", "find", "slice", "indexOf"])
const v18 = new Uint32Array(50325);
// v18 = .object(ofGroup: Uint32Array, withProperties: ["length", "buffer", "byteOffset", "byteLength", "__proto__", "constructor"], withMethods: ["includes", "reduceRight", "slice", "indexOf", "every", "reduce", "reverse", "map", "some", "sort", "values", "fill", "copyWithin", "subarray", "join", "find", "forEach", "lastIndexOf", "entries", "filter", "set", "keys", "findIndex"])
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
