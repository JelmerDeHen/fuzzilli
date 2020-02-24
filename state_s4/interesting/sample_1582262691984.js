function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = [1337,13.37,v2,-1155643050];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
