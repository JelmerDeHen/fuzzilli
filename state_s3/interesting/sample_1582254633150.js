function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = Array(2815038421);
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = Symbol("object");
// v7 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
const v12 = {constructor:7,toString:v7,...v4,...v1,...v10};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor", "toString"], withMethods: ["copyWithin", "concat", "reduceRight", "filter", "every", "find", "fill", "unshift", "toString", "flatMap", "sort", "entries", "reduce", "slice", "splice", "shift", "pop", "flat", "push", "reverse", "includes", "values", "some", "forEach", "join", "toLocaleString", "keys", "lastIndexOf", "findIndex", "indexOf", "map"])
}
%NeverOptimizeFunction(main);
main();
