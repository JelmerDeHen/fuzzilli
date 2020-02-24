function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = Array(2815038421);
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = Symbol("object");
// v7 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
const v12 = {constructor:7,toString:v7,...v4,...v1,...v10};
// v12 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor", "toString"], withMethods: ["pop", "map", "join", "findIndex", "toLocaleString", "lastIndexOf", "toString", "some", "reduceRight", "reverse", "flat", "shift", "keys", "find", "forEach", "copyWithin", "reduce", "slice", "splice", "indexOf", "push", "includes", "filter", "unshift", "entries", "sort", "concat", "flatMap", "values", "fill", "every"])
}
%NeverOptimizeFunction(main);
main();
