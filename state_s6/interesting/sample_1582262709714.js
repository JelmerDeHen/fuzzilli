function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = [1337,13.37,v2,-1155643050];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v5 = v2;
const v6 = v4[-3357639552];
// v6 = .unknown
let v10 = 0;
v5[5] = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
const v13 = {get:v6};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
const v15 = Object.defineProperty(v2,1,v13);
// v15 = .undefined
}
%NeverOptimizeFunction(main);
main();
