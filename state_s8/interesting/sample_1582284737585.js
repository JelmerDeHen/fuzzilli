function main() {
function v0(v1,v2) {
    let v6 = 0;
}
function v8(v9,v10,v11) {
}
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v14 = v13;
let v16 = undefined;
const v20 = new Uint16Array(1000);
// v20 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "byteOffset", "buffer", "byteLength", "length"], withMethods: ["fill", "reverse", "keys", "forEach", "set", "indexOf", "subarray", "lastIndexOf", "sort", "reduce", "findIndex", "map", "every", "entries", "join", "find", "some", "slice", "values", "includes", "filter", "reduceRight", "copyWithin"])
try {
    const v25 = {get:v0,set:v8};
    // v25 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
    const v27 = Object.defineProperty(v20,4294967297,v25);
    // v27 = .undefined
} catch(v28) {
    const v29 = {__proto__:v28,a:v0,...v20,...4294967296,...v28,...v20};
    // v29 = .object(ofGroup: Object, withProperties: ["__proto__", "byteLength", "buffer", "constructor", "length", "byteOffset"], withMethods: ["findIndex", "reduce", "a", "filter", "fill", "map", "find", "includes", "subarray", "join", "reduceRight", "lastIndexOf", "some", "entries", "reverse", "indexOf", "set", "slice", "forEach", "values", "every", "copyWithin", "keys", "sort"])
}
}
%NeverOptimizeFunction(main);
main();
