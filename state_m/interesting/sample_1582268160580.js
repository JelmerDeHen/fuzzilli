function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v2 = v1;
let v4 = undefined;
const v6 = [13.37,13.37,13.37,13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v7 = v6;
let v9 = 0;
Array[v9] = Array;
const v13 = Object.seal(Array);
// v13 = .object()
let v17 = 0;
const v21 = [13.37,13.37,-4294967297,13.37];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v22 = {length:v21,d:Uint8Array};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "length"])
let v24 = 8;
let v26 = 0;
const v27 = v17 + 1;
// v27 = .primitive
v17 = v27;
const v30 = [13.37,13.37,13.37,13.37];
// v30 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v31 = {__proto__:"hasInstance",d:v30};
// v31 = .object(ofGroup: Object, withProperties: ["d", "__proto__"])
const v33 = {call:v31};
// v33 = .object(ofGroup: Object, withProperties: ["__proto__", "call"])
const v35 = new Proxy(Array,v33);
// v35 = .unknown
for (const v36 in v35) {
}
}
%NeverOptimizeFunction(main);
main();
