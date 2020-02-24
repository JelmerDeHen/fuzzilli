function main() {
const v3 = [1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = v3.flat(1337);
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = typeof 1337;
// v5 = .string
const v7 = v5 === "boolean";
// v7 = .boolean
const v8 = {e:Reflect,a:v5,d:v5,toString:1337,constructor:v5,...v4,...v7,...13.37};
// v8 = .object(ofGroup: Object, withProperties: ["e", "d", "length", "toString", "constructor", "__proto__", "a"], withMethods: ["find", "forEach", "unshift", "slice", "values", "filter", "reduce", "every", "keys", "copyWithin", "lastIndexOf", "push", "toString", "fill", "some", "map", "pop", "sort", "toLocaleString", "includes", "splice", "findIndex", "join", "flatMap", "concat", "flat", "reverse", "indexOf", "reduceRight", "entries", "shift"])
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
}
%NeverOptimizeFunction(main);
main();
