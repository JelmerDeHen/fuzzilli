function main() {
const v3 = [1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = v3.flat(1337);
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = typeof 1337;
// v5 = .string
const v7 = v5 === "boolean";
// v7 = .boolean
const v8 = {e:Reflect,a:v5,d:v5,toString:1337,constructor:v5,...v4,...v7,...13.37};
// v8 = .object(ofGroup: Object, withProperties: ["d", "toString", "__proto__", "length", "constructor", "a", "e"], withMethods: ["some", "reduce", "reduceRight", "fill", "flatMap", "flat", "includes", "findIndex", "push", "reverse", "toLocaleString", "toString", "values", "every", "copyWithin", "find", "join", "slice", "pop", "indexOf", "sort", "forEach", "entries", "concat", "unshift", "map", "filter", "shift", "splice", "lastIndexOf", "keys"])
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
}
%NeverOptimizeFunction(main);
main();
