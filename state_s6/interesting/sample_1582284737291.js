function main() {
function v0(v1,v2) {
    let v6 = 0;
}
function v8(v9,v10,v11) {
}
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v14 = v13;
let v16 = undefined;
const v20 = new Uint16Array(1000);
// v20 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset", "constructor", "length"], withMethods: ["set", "filter", "some", "sort", "reduce", "lastIndexOf", "fill", "indexOf", "slice", "keys", "reverse", "every", "includes", "values", "entries", "findIndex", "subarray", "reduceRight", "map", "copyWithin", "find", "join", "forEach"])
try {
    const v25 = {get:v0,set:v8};
    // v25 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
    const v27 = Object.defineProperty(v20,4294967297,v25);
    // v27 = .undefined
} catch(v28) {
    const v29 = {__proto__:v28,a:v0,...v20,...4294967296,...v28,...v20};
    // v29 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "byteLength", "constructor", "byteOffset", "buffer"], withMethods: ["reduceRight", "findIndex", "forEach", "lastIndexOf", "subarray", "reduce", "some", "includes", "copyWithin", "indexOf", "a", "keys", "map", "find", "entries", "every", "values", "set", "sort", "reverse", "filter", "join", "slice", "fill"])
}
}
%NeverOptimizeFunction(main);
main();
