function main() {
const v4 = [13.37,"hasInstance",13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = [13.37,v4,-2,Float32Array];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = {__proto__:"hasInstance",d:v4};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v7 = {__proto__:v6};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v8 = v7;
delete v6.d;
let v14 = 0;
const v15 = v14 + 1;
// v15 = .primitive
v14 = v15;
v8.toString = v5;
}
%NeverOptimizeFunction(main);
main();
