function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v3 = {e:"+*kxi9KE+d",length:v2,a:v2};
// v3 = .object(ofGroup: Object, withProperties: ["e", "a", "length", "__proto__"])
let v7 = 13.37;
const v9 = [13.37,"unscopable"];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v10 = {a:v9};
// v10 = .object(ofGroup: Object, withProperties: ["a", "__proto__"])
v7 = v3;
const v14 = [eval,13.37,-4294967296];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
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
