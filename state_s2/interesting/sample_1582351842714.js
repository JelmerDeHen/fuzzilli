function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v5 = [13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v6(v7,v8) {
    const v12 = new Int8Array(1337);
    // v12 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "byteOffset", "byteLength", "length", "buffer"], withMethods: ["reduce", "reverse", "values", "every", "some", "reduceRight", "join", "sort", "entries", "keys", "forEach", "filter", "copyWithin", "subarray", "lastIndexOf", "fill", "find", "slice", "findIndex", "includes", "indexOf", "set", "map"])
    v12.constructor = Uint8ClampedArray;
    const v15 = v12.slice(1000,1337);
    // v15 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "byteLength", "constructor", "__proto__", "length", "buffer"], withMethods: ["reverse", "fill", "includes", "reduceRight", "sort", "find", "filter", "lastIndexOf", "slice", "forEach", "reduce", "keys", "values", "indexOf", "some", "subarray", "copyWithin", "every", "join", "map", "findIndex", "entries", "set"])
}
const v16 = v5.sort(v6);
// v16 = .undefined
}
%NeverOptimizeFunction(main);
main();
