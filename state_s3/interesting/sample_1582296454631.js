function main() {
const v5 = [13.37,-65536,-0.0];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
v5[1337] = 0;
let v9 = 0;
while (v9 < 1337) {
    const v10 = v5.push(2.2250738585072014e-308);
    // v10 = .integer
    const v11 = v9 + 1;
    // v11 = .primitive
    v9 = v11;
}
const v12 = new Uint16Array(v5);
// v12 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "byteOffset", "length", "constructor", "buffer", "byteLength"], withMethods: ["entries", "join", "lastIndexOf", "forEach", "filter", "slice", "reduce", "reverse", "findIndex", "keys", "fill", "map", "every", "set", "reduceRight", "includes", "sort", "find", "subarray", "indexOf", "values", "some", "copyWithin"])
}
%NeverOptimizeFunction(main);
main();
