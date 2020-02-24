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
// v10 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "buffer", "constructor", "byteOffset", "length", "byteLength"], withMethods: ["reduceRight", "slice", "filter", "fill", "keys", "reverse", "indexOf", "reduce", "lastIndexOf", "includes", "find", "copyWithin", "map", "forEach", "some", "join", "subarray", "values", "every", "entries", "set", "findIndex", "sort"])
v10.constructor = Uint16Array;
const v13 = v10.slice(-2147483649,1337);
// v13 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "constructor", "buffer", "byteOffset", "length", "byteLength"], withMethods: ["forEach", "every", "reduce", "entries", "filter", "join", "lastIndexOf", "some", "findIndex", "values", "subarray", "map", "keys", "reverse", "reduceRight", "sort", "set", "copyWithin", "find", "includes", "slice", "indexOf", "fill"])
}
%NeverOptimizeFunction(main);
main();
