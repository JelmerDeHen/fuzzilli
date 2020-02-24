function main() {
let v2 = 13.37;
const v4 = [13.37,"unscopable"];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = {b:v4};
// v5 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
v2 = NaN;
const v10 = [2,1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v11 = [NaN,13.37,2];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v12 = v10;
const v14 = {get:NaN};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
const v16 = Object.seal(v11,1337,v14);
// v16 = .object()
const v18 = v11.indexOf(v2,v12,v11,"name",v5);
// v18 = .integer
}
%NeverOptimizeFunction(main);
main();
