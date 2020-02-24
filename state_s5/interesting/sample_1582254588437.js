function main() {
const v3 = {length:13.37};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v4 = {length:"N0Xx92zvHQ"};
// v4 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v7 = new Uint8ClampedArray(52889);
// v7 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "length", "byteLength", "constructor", "__proto__", "byteOffset"], withMethods: ["join", "values", "reduceRight", "find", "reverse", "fill", "indexOf", "entries", "forEach", "subarray", "findIndex", "every", "set", "reduce", "slice", "filter", "copyWithin", "keys", "lastIndexOf", "sort", "map", "some", "includes"])
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
