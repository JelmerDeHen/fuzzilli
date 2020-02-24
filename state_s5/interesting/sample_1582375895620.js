function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v3 = {e:"+*kxi9KE+d",length:v2,a:v2};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "a", "e"])
let v7 = 13.37;
const v9 = [13.37,"unscopable"];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v10 = {a:v9};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "a"])
v7 = v3;
const v14 = [eval,13.37,-4294967296];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v15 = "toStringTag";
const v17 = {get:eval};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v19 = Object.freeze(v14,1337,v17);
// v19 = .undefined
const v21 = v14.indexOf(v7,v15,v14,"name",v10);
// v21 = .integer
}
%NeverOptimizeFunction(main);
main();
