function main() {
const v4 = [13.37,"hasInstance",13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = [13.37,v4,-2,Float32Array];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
