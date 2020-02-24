function main() {
const v3 = {length:13.37};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v4 = {length:"N0Xx92zvHQ"};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v7 = new Uint8ClampedArray(52889);
// v7 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "buffer", "byteOffset", "__proto__", "byteLength"], withMethods: ["fill", "findIndex", "keys", "forEach", "slice", "some", "set", "copyWithin", "values", "join", "find", "entries", "lastIndexOf", "reverse", "includes", "reduceRight", "every", "indexOf", "sort", "filter", "map", "subarray", "reduce"])
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
