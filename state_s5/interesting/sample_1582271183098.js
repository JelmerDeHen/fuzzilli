function main() {
const v1 = {};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v2 = [v1,v1];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
try {
    try {
        const v3 = "c"();
        // v3 = .unknown
    } catch(v4) {
        const v6 = {set:v4};
        // v6 = .object(ofGroup: Object, withProperties: ["set", "__proto__"])
        const v8 = Object.defineProperty(v4,"length",v6);
        // v8 = .undefined
    }
} catch(v9) {
}
const v12 = new Int8Array(61060);
// v12 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["join", "entries", "map", "reduceRight", "find", "lastIndexOf", "keys", "values", "fill", "reverse", "indexOf", "filter", "reduce", "includes", "some", "set", "findIndex", "copyWithin", "every", "subarray", "forEach", "slice", "sort"])
const v18 = new Uint32Array(50325);
// v18 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "byteLength", "constructor", "byteOffset", "__proto__"], withMethods: ["some", "copyWithin", "reduce", "lastIndexOf", "forEach", "indexOf", "findIndex", "fill", "slice", "every", "set", "join", "values", "filter", "reverse", "subarray", "sort", "reduceRight", "includes", "keys", "map", "find", "entries"])
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
