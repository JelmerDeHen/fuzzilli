function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v5 = [13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v6(v7,v8) {
    const v12 = new Int8Array(1337);
    // v12 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reduce", "sort", "copyWithin", "set", "fill", "slice", "reverse", "includes", "lastIndexOf", "join", "find", "entries", "findIndex", "indexOf", "keys", "forEach", "filter", "map", "every", "subarray", "some", "reduceRight", "values"])
    v12.constructor = Uint8ClampedArray;
    const v15 = v12.slice(1000,1337);
    // v15 = .object(ofGroup: Int8Array, withProperties: ["__proto__", "byteLength", "length", "constructor", "buffer", "byteOffset"], withMethods: ["map", "some", "copyWithin", "findIndex", "entries", "every", "indexOf", "sort", "lastIndexOf", "reverse", "find", "subarray", "keys", "includes", "reduce", "set", "fill", "values", "join", "slice", "reduceRight", "forEach", "filter"])
}
const v16 = v5.sort(v6);
// v16 = .undefined
}
%NeverOptimizeFunction(main);
main();
