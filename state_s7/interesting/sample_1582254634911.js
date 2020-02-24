function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = Array(2815038421);
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = Symbol("object");
// v7 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
const v12 = {constructor:7,toString:v7,...v4,...v1,...v10};
// v12 = .object(ofGroup: Object, withProperties: ["toString", "length", "constructor", "__proto__"], withMethods: ["indexOf", "flat", "sort", "fill", "reduce", "entries", "keys", "push", "slice", "findIndex", "values", "splice", "toString", "map", "every", "forEach", "concat", "flatMap", "reduceRight", "reverse", "find", "lastIndexOf", "filter", "toLocaleString", "some", "shift", "join", "unshift", "pop", "includes", "copyWithin"])
}
%NeverOptimizeFunction(main);
main();
