function main() {
let v2 = -128;
while (v2 < 5) {
    const v3 = v2 + 1;
    // v3 = .primitive
    v2 = v3;
}
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
const v10 = new Uint32Array(v2);
// v10 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "byteLength", "length", "constructor", "byteOffset", "buffer"], withMethods: ["sort", "filter", "forEach", "set", "keys", "subarray", "reduceRight", "includes", "copyWithin", "reverse", "findIndex", "lastIndexOf", "join", "entries", "map", "some", "slice", "fill", "indexOf", "every", "find", "reduce", "values"])
v10.constructor = Uint16Array;
const v13 = v10.slice(-2147483649,1337);
// v13 = .object(ofGroup: Uint32Array, withProperties: ["byteLength", "constructor", "buffer", "__proto__", "length", "byteOffset"], withMethods: ["slice", "findIndex", "some", "copyWithin", "indexOf", "values", "includes", "forEach", "map", "sort", "entries", "filter", "every", "reduce", "reverse", "subarray", "reduceRight", "set", "join", "keys", "fill", "find", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
