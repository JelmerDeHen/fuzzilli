function main() {
const v1 = {};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v2 = [v1,v1];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
// v12 = .object(ofGroup: Int8Array, withProperties: ["__proto__", "buffer", "byteOffset", "constructor", "length", "byteLength"], withMethods: ["some", "fill", "copyWithin", "values", "reduceRight", "lastIndexOf", "findIndex", "slice", "join", "indexOf", "reverse", "sort", "forEach", "map", "find", "subarray", "reduce", "every", "keys", "includes", "entries", "filter", "set"])
const v18 = new Uint32Array(50325);
// v18 = .object(ofGroup: Uint32Array, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["lastIndexOf", "slice", "keys", "map", "sort", "indexOf", "set", "join", "forEach", "reverse", "filter", "fill", "reduce", "every", "values", "copyWithin", "entries", "some", "subarray", "find", "findIndex", "includes", "reduceRight"])
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
