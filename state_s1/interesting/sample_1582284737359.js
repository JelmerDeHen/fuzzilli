function main() {
function v0(v1,v2) {
    let v6 = 0;
}
function v8(v9,v10,v11) {
}
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v14 = v13;
let v16 = undefined;
const v20 = new Uint16Array(1000);
// v20 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["every", "findIndex", "reduceRight", "some", "values", "find", "fill", "forEach", "map", "filter", "reduce", "join", "subarray", "includes", "lastIndexOf", "indexOf", "keys", "copyWithin", "sort", "set", "entries", "reverse", "slice"])
try {
    const v25 = {get:v0,set:v8};
    // v25 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
    const v27 = Object.defineProperty(v20,4294967297,v25);
    // v27 = .undefined
} catch(v28) {
    const v29 = {__proto__:v28,a:v0,...v20,...4294967296,...v28,...v20};
    // v29 = .object(ofGroup: Object, withProperties: ["buffer", "__proto__", "byteOffset", "byteLength", "constructor", "length"], withMethods: ["a", "filter", "find", "forEach", "values", "set", "keys", "some", "subarray", "indexOf", "sort", "includes", "fill", "reduceRight", "reverse", "join", "reduce", "slice", "lastIndexOf", "copyWithin", "every", "entries", "map", "findIndex"])
}
}
%NeverOptimizeFunction(main);
main();
