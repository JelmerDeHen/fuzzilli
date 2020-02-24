function main() {
const v3 = {length:13.37};
// v3 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v4 = {length:"N0Xx92zvHQ"};
// v4 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v7 = new Uint8ClampedArray(52889);
// v7 = .object(ofGroup: Uint8ClampedArray, withProperties: ["__proto__", "buffer", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["copyWithin", "keys", "entries", "indexOf", "find", "subarray", "values", "sort", "some", "reduce", "filter", "slice", "every", "join", "fill", "map", "set", "reduceRight", "reverse", "forEach", "lastIndexOf", "findIndex", "includes"])
let v10 = 0;
const v11 = v7[2479833249];
// v11 = .unknown
const v12 = v10 + 1;
// v12 = .primitive
v10 = v12;
v7.__proto__ = Number;
v3.length = 4294967296;
}
%NeverOptimizeFunction(main);
main();
