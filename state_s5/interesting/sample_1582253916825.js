function main() {
const v10 = Object();
// v10 = .object()
const v12 = [1337,1337];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v13 = [v12,v12,v12];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v22 = [13.37,13.37];
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v24 = [13.37,v22];
// v24 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v25 = WeakSet + v10;
// v25 = .primitive
const v26 = v22[1100416290];
// v26 = .unknown
let v29 = 0;
const v30 = v29 + 1;
// v30 = .primitive
v29 = v30;
let v34 = 0;
let v35 = v29;
const v36 = {d:v35,toString:v13,...v25,...v24};
// v36 = .object(ofGroup: Object, withProperties: ["length", "d", "toString", "__proto__", "constructor"], withMethods: ["toString", "values", "filter", "toLocaleString", "join", "shift", "entries", "keys", "reduceRight", "some", "flat", "pop", "fill", "every", "unshift", "indexOf", "reduce", "findIndex", "forEach", "copyWithin", "flatMap", "map", "slice", "concat", "includes", "reverse", "splice", "lastIndexOf", "find", "push", "sort"])
const v37 = v34 + 1;
// v37 = .primitive
v34 = v37;
}
%NeverOptimizeFunction(main);
main();
