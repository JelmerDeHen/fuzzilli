function main() {
const v10 = Object();
// v10 = .object()
const v12 = [1337,1337];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v13 = [v12,v12,v12];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v22 = [13.37,13.37];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v24 = [13.37,v22];
// v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
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
// v36 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "d", "length", "constructor"], withMethods: ["flat", "values", "pop", "reduceRight", "findIndex", "fill", "lastIndexOf", "filter", "push", "reverse", "slice", "keys", "flatMap", "splice", "shift", "entries", "find", "toString", "includes", "map", "copyWithin", "forEach", "some", "unshift", "sort", "reduce", "toLocaleString", "join", "indexOf", "concat", "every"])
const v37 = v34 + 1;
// v37 = .primitive
v34 = v37;
}
%NeverOptimizeFunction(main);
main();
