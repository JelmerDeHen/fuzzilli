function main() {
const v9 = [13.37,13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v11 = [1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v12 = [v11,v11,v11];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v13 = {d:"undefined",e:v9,__proto__:v11,c:v11,toString:v12};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d", "toString", "c"])
let v14 = v13;
v14 = v13;
let v28 = 0;
const v29 = v28 + 1;
// v29 = .primitive
v28 = v29;
let v42 = 0;
const v43 = v42 + 1;
// v43 = .primitive
v42 = v43;
}
%NeverOptimizeFunction(main);
main();