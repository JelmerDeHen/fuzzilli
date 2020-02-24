function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = [1337,v2,13.37,1024];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [13.37,13.37,13.37,13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v7 = v6;
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
let v14 = 0;
const v15 = v14 + 1;
// v15 = .primitive
v14 = v15;
let v20 = 0;
let v23 = 0;
const v24 = {toString:v23,d:0,c:4,set:v23,__proto__:v4};
// v24 = .object(ofGroup: Object, withProperties: ["toString", "d", "__proto__", "set", "c"])
const v25 = v23 + 1;
// v25 = .primitive
v23 = v25;
const v26 = v20 + 1;
// v26 = .primitive
v20 = v26;
const v27 = v4.push();
// v27 = .integer
}
%NeverOptimizeFunction(main);
main();
