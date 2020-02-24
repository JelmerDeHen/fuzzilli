function main() {
function v0(v1,v2) {
    let v6 = 0;
}
function v8(v9,v10,v11) {
}
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v14 = v13;
let v16 = undefined;
const v20 = new Uint16Array(1000);
// v20 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "buffer", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["keys", "some", "sort", "includes", "join", "values", "reduceRight", "fill", "indexOf", "subarray", "reduce", "lastIndexOf", "findIndex", "find", "every", "copyWithin", "entries", "slice", "filter", "set", "forEach", "map", "reverse"])
try {
    const v25 = {get:v0,set:v8};
    // v25 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
    const v27 = Object.defineProperty(v20,4294967297,v25);
    // v27 = .undefined
} catch(v28) {
    const v29 = {__proto__:v28,a:v0,...v20,...4294967296,...v28,...v20};
    // v29 = .object(ofGroup: Object, withProperties: ["__proto__", "buffer", "byteLength", "length", "constructor", "byteOffset"], withMethods: ["some", "findIndex", "forEach", "entries", "lastIndexOf", "join", "set", "reduce", "subarray", "find", "keys", "fill", "every", "indexOf", "a", "reduceRight", "map", "filter", "reverse", "includes", "slice", "sort", "copyWithin", "values"])
}
}
%NeverOptimizeFunction(main);
main();
