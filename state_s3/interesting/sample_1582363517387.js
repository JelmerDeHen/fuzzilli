function main() {
let v2 = 13.37;
const v4 = [13.37,"unscopable"];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = {a:v4};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "a"])
v2 = eval;
const v10 = [-4294967296,1337];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v11 = [eval,13.37,-4294967296];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
