function main() {
let v3 = 1337;
const v5 = [13.37,"b"];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = [eval,13.37,v5];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v9 = v8;
const v11 = {get:eval};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v13 = Object.freeze(v8,1337,v11);
// v13 = .undefined
const v15 = v8.indexOf(v3,v9,v8,"name","isConcatSpreadable");
// v15 = .integer
}
%NeverOptimizeFunction(main);
main();
