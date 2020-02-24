function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = new Uint8ClampedArray(52889);
// v5 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "length", "byteLength", "constructor", "__proto__", "byteOffset"], withMethods: ["join", "values", "reduceRight", "find", "reverse", "fill", "indexOf", "entries", "forEach", "subarray", "findIndex", "every", "set", "reduce", "slice", "filter", "copyWithin", "keys", "lastIndexOf", "sort", "map", "some", "includes"])
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
