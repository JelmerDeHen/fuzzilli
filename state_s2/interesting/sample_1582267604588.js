function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = new Uint8ClampedArray(52889);
// v5 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteLength", "__proto__", "byteOffset", "constructor", "length", "buffer"], withMethods: ["entries", "every", "lastIndexOf", "values", "reverse", "map", "copyWithin", "subarray", "reduce", "filter", "sort", "find", "keys", "reduceRight", "join", "forEach", "fill", "set", "indexOf", "some", "includes", "findIndex", "slice"])
const v6 = v5[2479833249];
// v6 = .unknown
const v7 = {isExtensible:v6,ownKeys:v6,defineProperty:v6};
// v7 = .object(ofGroup: Object, withProperties: ["ownKeys", "defineProperty", "isExtensible", "__proto__"])
const v9 = new Proxy(v1,v7);
// v9 = .unknown
for (const v10 of "N0Xx92zvHQ") {
    v9.valueOf = v10;
}
}
%NeverOptimizeFunction(main);
main();
