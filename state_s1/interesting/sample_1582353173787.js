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
// v10 = .object(ofGroup: Uint32Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["fill", "sort", "entries", "some", "map", "findIndex", "subarray", "values", "forEach", "filter", "indexOf", "find", "reduce", "keys", "reduceRight", "includes", "copyWithin", "set", "lastIndexOf", "slice", "every", "join", "reverse"])
v10.constructor = Uint16Array;
const v13 = v10.slice(-2147483649,1337);
// v13 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteOffset", "byteLength", "__proto__", "constructor", "length"], withMethods: ["some", "reduce", "copyWithin", "sort", "reduceRight", "every", "subarray", "slice", "includes", "set", "filter", "findIndex", "map", "join", "values", "indexOf", "find", "reverse", "entries", "fill", "forEach", "lastIndexOf", "keys"])
}
%NeverOptimizeFunction(main);
main();
