function main() {
let v1 = -849961.8330764936;
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = {length:v3};
// v4 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
v1 = NaN;
const v9 = [1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v10 = [1337,13.37,2];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v11 = v9;
const v13 = {get:NaN};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
const v15 = Object.seal(v10,1000,v13);
// v15 = .object()
const v16 = Object.freeze(v15);
// v16 = .undefined
const v18 = v10.includes(v1,v11,v10,"name",v4);
// v18 = .boolean
}
%NeverOptimizeFunction(main);
main();
