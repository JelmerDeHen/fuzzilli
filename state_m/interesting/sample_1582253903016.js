function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = [1337,v2,13.37,1024];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {c:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
const v9 = v7[1024];
// v9 = .unknown
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
v12 = v13;
let v16 = 0;
v8.valueOf = Number;
const v18 = {set:v9};
// v18 = .object(ofGroup: Object, withProperties: ["set", "__proto__"])
const v20 = Object.defineProperty(v4,"a",v18);
// v20 = .undefined
const v21 = v16 + 1;
// v21 = .primitive
v16 = v21;
}
%NeverOptimizeFunction(main);
main();
