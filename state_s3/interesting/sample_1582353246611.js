function main() {
let v3 = -128;
const v6 = [-1000.0,-1000.0,-1000.0,-1000.0];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v7(v8,v9) {
    const v13 = new Uint8Array(1337);
    // v13 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "constructor", "length", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "includes", "every", "reduceRight", "find", "filter", "lastIndexOf", "indexOf", "subarray", "join", "fill", "sort", "slice", "findIndex", "reverse", "forEach", "reduce", "values", "copyWithin", "entries", "keys", "set", "some"])
    v13.constructor = Uint8ClampedArray;
    const v15 = v13.slice("arguments",1337);
    // v15 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "byteLength", "constructor", "byteOffset", "buffer", "length"], withMethods: ["keys", "reverse", "slice", "includes", "filter", "every", "find", "indexOf", "lastIndexOf", "entries", "join", "findIndex", "set", "values", "forEach", "subarray", "copyWithin", "reduceRight", "map", "reduce", "some", "sort", "fill"])
}
const v16 = v6.sort(v7);
// v16 = .undefined
}
%NeverOptimizeFunction(main);
main();
