function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = Array(2815038421);
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = Symbol("object");
// v7 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
const v12 = {constructor:7,toString:v7,...v4,...v1,...v10};
// v12 = .object(ofGroup: Object, withProperties: ["constructor", "toString", "length", "__proto__"], withMethods: ["push", "indexOf", "forEach", "filter", "every", "shift", "flat", "values", "unshift", "copyWithin", "fill", "splice", "sort", "flatMap", "find", "pop", "lastIndexOf", "concat", "slice", "toString", "includes", "reduce", "toLocaleString", "reduceRight", "map", "some", "join", "reverse", "keys", "findIndex", "entries"])
}
%NeverOptimizeFunction(main);
main();
