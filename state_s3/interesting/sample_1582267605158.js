function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = new Uint8ClampedArray(52889);
// v5 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["slice", "findIndex", "subarray", "fill", "sort", "forEach", "map", "find", "reverse", "copyWithin", "filter", "every", "reduceRight", "keys", "includes", "entries", "set", "indexOf", "lastIndexOf", "some", "reduce", "join", "values"])
const v6 = v5[2479833249];
// v6 = .unknown
const v7 = {isExtensible:v6,ownKeys:v6,defineProperty:v6};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "isExtensible", "defineProperty", "ownKeys"])
const v9 = new Proxy(v1,v7);
// v9 = .unknown
for (const v10 of "N0Xx92zvHQ") {
    v9.valueOf = v10;
}
}
%NeverOptimizeFunction(main);
main();
