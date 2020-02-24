function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = Array(2815038421);
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = Symbol("object");
// v7 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
const v12 = {constructor:7,toString:v7,...v4,...v1,...v10};
// v12 = .object(ofGroup: Object, withProperties: ["toString", "constructor", "length", "__proto__"], withMethods: ["reverse", "fill", "entries", "filter", "splice", "concat", "reduceRight", "forEach", "findIndex", "map", "shift", "lastIndexOf", "flat", "reduce", "values", "pop", "keys", "find", "copyWithin", "push", "includes", "flatMap", "slice", "indexOf", "toLocaleString", "some", "toString", "join", "unshift", "every", "sort"])
}
%NeverOptimizeFunction(main);
main();
