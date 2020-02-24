function main() {
const v3 = [1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = v3.flat(1337);
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = typeof 1337;
// v5 = .string
const v7 = v5 === "boolean";
// v7 = .boolean
const v8 = {e:Reflect,a:v5,d:v5,toString:1337,constructor:v5,...v4,...v7,...13.37};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "length", "e", "d", "constructor", "__proto__", "a"], withMethods: ["find", "reduce", "includes", "flatMap", "shift", "unshift", "toLocaleString", "keys", "reverse", "concat", "fill", "entries", "join", "slice", "map", "copyWithin", "toString", "values", "flat", "sort", "some", "every", "lastIndexOf", "forEach", "findIndex", "splice", "filter", "reduceRight", "pop", "push", "indexOf"])
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
}
%NeverOptimizeFunction(main);
main();
