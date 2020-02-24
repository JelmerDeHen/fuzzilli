function main() {
let v3 = 13.37;
const v5 = [13.37,"unscopable"];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = {b:v5};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v11 = [2,1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v12 = [NaN,13.37,2];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v13 = v11;
const v15 = {get:NaN};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
const v17 = Object.seal(v12,1337,v15);
// v17 = .object()
const v19 = v12.indexOf(v3,v13,v12,"name",v6);
// v19 = .integer
}
%NeverOptimizeFunction(main);
main();
