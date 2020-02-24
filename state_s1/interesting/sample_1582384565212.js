function main() {
const v3 = [13.37,"b"];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [eval,13.37,v3];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v7 = v6;
const v9 = {get:eval};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
v6.length = 127;
const v12 = Object.freeze(v6,1337,v9);
// v12 = .undefined
const v14 = v6.indexOf(v3,v7,v6,"name","isConcatSpreadable");
// v14 = .integer
}
%NeverOptimizeFunction(main);
main();
