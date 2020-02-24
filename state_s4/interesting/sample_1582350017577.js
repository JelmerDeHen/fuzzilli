function main() {
let v4 = 0;
const v9 = [13.37,13.37,13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v10(v11,v12) {
    let v15 = 0;
    const v16 = v15 + 1;
    // v16 = .primitive
    v15 = v16;
    const v20 = new Int8Array(1337);
    // v20 = .object(ofGroup: Int8Array, withProperties: ["__proto__", "buffer", "byteOffset", "constructor", "length", "byteLength"], withMethods: ["some", "fill", "copyWithin", "values", "reduceRight", "lastIndexOf", "findIndex", "slice", "join", "indexOf", "reverse", "sort", "forEach", "map", "find", "subarray", "reduce", "every", "keys", "includes", "entries", "filter", "set"])
    v20.constructor = Uint8ClampedArray;
    const v23 = v20.slice(-1,1337);
    // v23 = .object(ofGroup: Int8Array, withProperties: ["length", "__proto__", "constructor", "buffer", "byteOffset", "byteLength"], withMethods: ["find", "filter", "reverse", "sort", "map", "entries", "every", "set", "reduce", "findIndex", "join", "lastIndexOf", "keys", "forEach", "includes", "some", "subarray", "reduceRight", "values", "fill", "copyWithin", "indexOf", "slice"])
}
const v24 = v9.sort(v10);
// v24 = .undefined
}
%NeverOptimizeFunction(main);
main();
