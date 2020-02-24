function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v10 = 0;
let v13 = 0;
Array.prototype = 1;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
const v15 = v10 + 1;
// v15 = .primitive
v10 = v15;
const v17 = {__proto__:2815038421,valueOf:Array,a:v1,c:Array,toString:Array,...2815038421,...2815038421,...0};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__", "a"], withMethods: ["toString", "valueOf", "c"])
let v20 = 0;
const v21 = v17.a;
// v21 = .unknown
const v22 = v20 + 1;
// v22 = .primitive
v20 = v22;
const v25 = [1337,1337];
// v25 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v26 = [v25,v25,v25];
// v26 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v27 = new WeakSet(v26);
// v27 = .object(ofGroup: WeakSet, withProperties: ["__proto__"], withMethods: ["has", "add", "delete"])
const v30 = gc();
// v30 = .undefined
const v31 = gc();
// v31 = .undefined
}
%NeverOptimizeFunction(main);
main();
