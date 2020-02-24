function main() {
const v3 = [1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = v3.flat(1337);
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = typeof 1337;
// v5 = .string
const v7 = v5 === "boolean";
// v7 = .boolean
const v8 = {e:Reflect,a:v5,d:v5,toString:1337,constructor:v5,...v4,...v7,...13.37};
// v8 = .object(ofGroup: Object, withProperties: ["d", "a", "length", "__proto__", "constructor", "toString", "e"], withMethods: ["flat", "shift", "concat", "toString", "sort", "find", "reverse", "includes", "entries", "slice", "flatMap", "keys", "some", "splice", "forEach", "push", "indexOf", "every", "lastIndexOf", "toLocaleString", "pop", "map", "copyWithin", "findIndex", "join", "filter", "unshift", "values", "reduce", "fill", "reduceRight"])
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
}
%NeverOptimizeFunction(main);
main();
