function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v5 = [13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v6(v7,v8) {
    const v12 = new Int8Array(1337);
    // v12 = .object(ofGroup: Int8Array, withProperties: ["constructor", "buffer", "__proto__", "length", "byteOffset", "byteLength"], withMethods: ["indexOf", "includes", "fill", "entries", "forEach", "reduceRight", "set", "values", "find", "slice", "map", "some", "copyWithin", "findIndex", "reverse", "keys", "filter", "subarray", "reduce", "join", "sort", "lastIndexOf", "every"])
    v12.constructor = Uint8ClampedArray;
    const v15 = v12.slice(1000,1337);
    // v15 = .object(ofGroup: Int8Array, withProperties: ["buffer", "__proto__", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["every", "subarray", "set", "keys", "includes", "join", "lastIndexOf", "fill", "map", "find", "findIndex", "forEach", "reduceRight", "values", "entries", "slice", "copyWithin", "some", "indexOf", "reduce", "reverse", "sort", "filter"])
}
const v16 = v5.sort(v6);
// v16 = .undefined
}
%NeverOptimizeFunction(main);
main();
