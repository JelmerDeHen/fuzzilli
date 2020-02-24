function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = Array(2815038421);
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = Symbol("object");
// v7 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
const v12 = {constructor:7,toString:v7,...v4,...v1,...v10};
// v12 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "constructor", "length"], withMethods: ["join", "fill", "toLocaleString", "find", "every", "reverse", "lastIndexOf", "pop", "some", "shift", "copyWithin", "push", "splice", "concat", "findIndex", "filter", "flat", "values", "slice", "keys", "reduceRight", "indexOf", "sort", "entries", "toString", "map", "unshift", "flatMap", "forEach", "reduce", "includes"])
}
%NeverOptimizeFunction(main);
main();
