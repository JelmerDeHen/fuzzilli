function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v5 = v4;
let v7 = undefined;
const v13 = [3156875969,3156875969,127,DataView];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v14 = {constructor:v13,c:v13,e:13.37,d:127,a:3156875969,__proto__:"boolean"};
// v14 = .object(ofGroup: Object, withProperties: ["a", "constructor", "c", "e", "d", "__proto__"])
const v20 = {set:eval};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v22 = Object.defineProperty(v14,"__proto__",v20);
// v22 = .undefined
let v25 = 0;
const v26 = 13.37 + 1;
// v26 = .primitive
let v29 = 0;
const v30 = v29 + 1;
// v30 = .primitive
v29 = v30;
const v31 = v2[v25];
// v31 = .unknown
const v32 = v31 && "boolean";
// v32 = .boolean
v14.a = v32;
v25 = v26;
}
%NeverOptimizeFunction(main);
main();
