function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = {e:"+*kxi9KE+d",length:v2,a:v2};
// v3 = .object(ofGroup: Object, withProperties: ["a", "length", "e", "__proto__"])
let v7 = 13.37;
const v9 = [13.37,"unscopable"];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v10 = {a:v9};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "a"])
v7 = v3;
const v14 = [eval,13.37,-4294967296];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
