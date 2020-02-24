function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = new Uint8ClampedArray(52889);
// v5 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "__proto__", "buffer", "length", "byteLength", "constructor"], withMethods: ["every", "reduce", "indexOf", "reverse", "map", "join", "entries", "reduceRight", "subarray", "includes", "sort", "some", "values", "copyWithin", "filter", "lastIndexOf", "set", "fill", "find", "findIndex", "keys", "forEach", "slice"])
const v6 = v5[2479833249];
// v6 = .unknown
const v7 = {isExtensible:v6,ownKeys:v6,defineProperty:v6};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "ownKeys", "isExtensible", "defineProperty"])
const v9 = new Proxy(v1,v7);
// v9 = .unknown
for (const v10 of "N0Xx92zvHQ") {
    v9.valueOf = v10;
}
}
%NeverOptimizeFunction(main);
main();
