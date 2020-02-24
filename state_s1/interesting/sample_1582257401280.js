function main() {
let v1 = "unscopable";
const v5 = [13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {length:v7,a:v5,toString:v5,b:Int8Array,e:1337,constructor:-274804284};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "a", "b", "toString", "__proto__", "length", "e"])
const v12 = "N0Xx92zvHQ".split(v1);
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v15 = 0;
const v19 = v8.a;
// v19 = .unknown
const v20 = v15 + 1;
// v20 = .primitive
v15 = v20;
let v23 = 0;
const v24 = Number("object");
// v24 = .number
const v25 = v23 + 1;
// v25 = .primitive
v23 = v25;
}
%NeverOptimizeFunction(main);
main();
