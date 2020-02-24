function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = new Uint8ClampedArray(52889);
// v5 = .object(ofGroup: Uint8ClampedArray, withProperties: ["constructor", "byteLength", "__proto__", "buffer", "length", "byteOffset"], withMethods: ["slice", "reduceRight", "findIndex", "every", "copyWithin", "set", "fill", "sort", "forEach", "entries", "join", "values", "keys", "map", "reverse", "indexOf", "subarray", "reduce", "find", "includes", "lastIndexOf", "filter", "some"])
const v6 = v5[2479833249];
// v6 = .unknown
const v7 = {isExtensible:v6,ownKeys:v6,defineProperty:v6};
// v7 = .object(ofGroup: Object, withProperties: ["ownKeys", "__proto__", "isExtensible", "defineProperty"])
const v9 = new Proxy(v1,v7);
// v9 = .unknown
for (const v10 of "N0Xx92zvHQ") {
    v9.valueOf = v10;
}
}
%NeverOptimizeFunction(main);
main();
