function main() {
const v3 = [1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = v3.flat(1337);
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = typeof 1337;
// v5 = .string
const v7 = v5 === "boolean";
// v7 = .boolean
const v8 = {e:Reflect,a:v5,d:v5,toString:1337,constructor:v5,...v4,...v7,...13.37};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "e", "a", "length", "toString", "d"], withMethods: ["unshift", "findIndex", "values", "filter", "shift", "concat", "indexOf", "lastIndexOf", "reduce", "entries", "keys", "slice", "splice", "sort", "push", "forEach", "fill", "some", "toLocaleString", "flatMap", "map", "join", "flat", "reverse", "every", "copyWithin", "pop", "toString", "reduceRight", "find", "includes"])
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
}
%NeverOptimizeFunction(main);
main();
