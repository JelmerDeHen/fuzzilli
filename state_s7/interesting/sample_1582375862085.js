function main() {
let v3 = 13.37;
const v5 = [13.37,"unscopable"];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = {a:v5};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "a"])
v3 = eval;
const v10 = [eval,13.37,-4294967296];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v11 = "toStringTag";
const v13 = {get:eval};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v15 = Object.freeze(v10,1337,v13);
// v15 = .undefined
const v17 = v10.indexOf(v3,v11,v10,"name",v6);
// v17 = .integer
}
%NeverOptimizeFunction(main);
main();
