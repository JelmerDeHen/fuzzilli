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
// v10 = .object(ofGroup: Uint32Array, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["lastIndexOf", "slice", "keys", "map", "sort", "indexOf", "set", "join", "forEach", "reverse", "filter", "fill", "reduce", "every", "values", "copyWithin", "entries", "some", "subarray", "find", "findIndex", "includes", "reduceRight"])
v10.constructor = Uint16Array;
const v13 = v10.slice(-2147483649,1337);
// v13 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteLength", "__proto__", "byteOffset", "length", "constructor"], withMethods: ["indexOf", "entries", "some", "fill", "filter", "reduceRight", "forEach", "keys", "copyWithin", "map", "every", "subarray", "reduce", "join", "values", "lastIndexOf", "sort", "set", "slice", "find", "findIndex", "reverse", "includes"])
}
%NeverOptimizeFunction(main);
main();
