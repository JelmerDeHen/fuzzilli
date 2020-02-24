function main() {
let v3 = 1337;
const v5 = [13.37,"b"];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = [eval,13.37,v5];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
