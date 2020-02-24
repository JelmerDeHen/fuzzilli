function main() {
const v3 = [13.37,"b"];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [eval,13.37,v3];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
