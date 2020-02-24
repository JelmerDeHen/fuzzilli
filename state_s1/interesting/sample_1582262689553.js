function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = [1337,13.37,v2,-1155643050];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v5 = v2;
const v6 = v4[-3357639552];
// v6 = .unknown
let v10 = 0;
v5[5] = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
const v13 = {get:v6};
// v13 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
const v15 = Object.defineProperty(v2,1,v13);
// v15 = .undefined
}
%NeverOptimizeFunction(main);
main();
