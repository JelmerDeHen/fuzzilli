function main() {
const v3 = [13.37,"b"];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [eval,13.37,v3];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
