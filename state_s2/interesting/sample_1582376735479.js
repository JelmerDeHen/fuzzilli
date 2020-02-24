function main() {
let v3 = 13.37;
const v5 = [13.37,"unscopable"];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = {a:v5};
// v6 = .object(ofGroup: Object, withProperties: ["a", "__proto__"])
const v9 = [eval,13.37,v5];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v10 = "toStringTag";
const v12 = {get:eval};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v14 = Object.freeze(v9,1337,v12);
// v14 = .undefined
const v16 = v9.indexOf(v3,v10,v9,"name",v6);
// v16 = .integer
}
%NeverOptimizeFunction(main);
main();
