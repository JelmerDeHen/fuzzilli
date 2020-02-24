function main() {
const v19 = {};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v25 = [];
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v31 = "object".constructor;
// v31 = .function()
const v33 = v31(v25,v19,"symbol",Reflect);
// v33 = .unknown
const v45 = 1337 & 13.37;
// v45 = .integer
let v49 = 0;
const v50 = v49 + 1;
// v50 = .primitive
v49 = v50;
}
%NeverOptimizeFunction(main);
main();
