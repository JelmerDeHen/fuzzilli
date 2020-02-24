function main() {
let v2 = 13.37;
const v4 = [13.37,"unscopable"];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = {a:v4};
// v5 = .object(ofGroup: Object, withProperties: ["a", "__proto__"])
v2 = eval;
const v10 = [-4294967296,1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v11 = [eval,13.37,-4294967296];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v12 = v10;
const v14 = {get:eval};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v16 = Object.seal(v11,1337,v14);
// v16 = .object()
const v18 = v11.indexOf(v2,v12,v11,"name",v5);
// v18 = .integer
}
%NeverOptimizeFunction(main);
main();
