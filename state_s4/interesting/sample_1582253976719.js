function main() {
const v10 = [];
// v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v14 = 2815038421 - 1;
// v14 = .primitive
Object.valueOf = Array;
Object["size"] = v14;
let v17 = 0;
const v18 = (1337)[v14];
// v18 = .unknown
const v19 = v17 + 1;
// v19 = .primitive
v17 = v19;
const v21 = {get:Array};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v23 = Object.defineProperty(v10,"b",v21);
// v23 = .undefined
}
%NeverOptimizeFunction(main);
main();
