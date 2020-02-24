function main() {
let v4 = 0;
const v9 = [13.37,13.37,13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v10(v11,v12) {
    let v15 = 0;
    const v16 = v15 + 1;
    // v16 = .primitive
    v15 = v16;
    const v20 = new Int8Array(1337);
    // v20 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reduce", "sort", "copyWithin", "set", "fill", "slice", "reverse", "includes", "lastIndexOf", "join", "find", "entries", "findIndex", "indexOf", "keys", "forEach", "filter", "map", "every", "subarray", "some", "reduceRight", "values"])
    v20.constructor = Uint8ClampedArray;
    const v23 = v20.slice(-1,1337);
    // v23 = .object(ofGroup: Int8Array, withProperties: ["__proto__", "byteLength", "length", "constructor", "buffer", "byteOffset"], withMethods: ["map", "some", "copyWithin", "findIndex", "entries", "every", "indexOf", "sort", "lastIndexOf", "reverse", "find", "subarray", "keys", "includes", "reduce", "set", "fill", "values", "join", "slice", "reduceRight", "forEach", "filter"])
}
const v24 = v9.sort(v10);
// v24 = .undefined
}
%NeverOptimizeFunction(main);
main();
