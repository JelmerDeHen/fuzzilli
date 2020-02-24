function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,127,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {valueOf:1337,length:13.37,d:127,e:127};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "length", "e", "d"])
const v9 = {c:v7,valueOf:v8,d:Array,a:1337};
// v9 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "a", "__proto__"], withMethods: ["d"])
let v10 = v8;
const v49 = "object".constructor;
// v49 = .function()
let v54 = 0;
const v55 = v54 + 1;
// v55 = .primitive
v54 = v55;
let v61 = 0;
const v62 = v61 + 1;
// v62 = .primitive
v61 = v62;
const v65 = v49();
// v65 = .unknown
}
%NeverOptimizeFunction(main);
main();
