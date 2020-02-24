function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v9 = [1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v10 = [1337,1337,v9];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v11 = {length:"eTm8XK*Max",d:13.37,e:"eTm8XK*Max",a:v9,constructor:"eTm8XK*Max"};
// v11 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "d", "a", "e", "length"])
const v12 = {__proto__:v9,toString:"eTm8XK*Max",e:v11,b:v10,a:v10,constructor:13.37};
// v12 = .object(ofGroup: Object, withProperties: ["a", "constructor", "e", "toString", "__proto__", "b"])
const v13 = new Float64Array(v12);
// v13 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "buffer", "__proto__", "length", "byteLength"], withMethods: ["fill", "sort", "reduceRight", "values", "every", "includes", "lastIndexOf", "findIndex", "copyWithin", "reverse", "keys", "entries", "some", "filter", "forEach", "set", "find", "subarray", "indexOf", "map", "reduce", "slice", "join"])
let v17 = 0;
}
%NeverOptimizeFunction(main);
main();
