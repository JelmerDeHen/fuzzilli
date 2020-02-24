function main() {
function v0(v1,v2) {
    let v6 = 0;
}
function v8(v9,v10,v11) {
}
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v14 = v13;
let v16 = undefined;
const v20 = new Uint16Array(1000);
// v20 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "constructor", "byteOffset"], withMethods: ["findIndex", "sort", "set", "entries", "lastIndexOf", "filter", "slice", "map", "forEach", "values", "indexOf", "reduceRight", "keys", "find", "subarray", "join", "reverse", "includes", "every", "some", "reduce", "copyWithin", "fill"])
try {
    const v25 = {get:v0,set:v8};
    // v25 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
    const v27 = Object.defineProperty(v20,4294967297,v25);
    // v27 = .undefined
} catch(v28) {
    const v29 = {__proto__:v28,a:v0,...v20,...4294967296,...v28,...v20};
    // v29 = .object(ofGroup: Object, withProperties: ["buffer", "length", "__proto__", "byteOffset", "byteLength", "constructor"], withMethods: ["copyWithin", "a", "keys", "reduceRight", "sort", "reverse", "findIndex", "set", "forEach", "subarray", "reduce", "slice", "fill", "includes", "filter", "every", "map", "indexOf", "lastIndexOf", "some", "values", "join", "find", "entries"])
}
}
%NeverOptimizeFunction(main);
main();
