function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v2 = v1;
let v4 = undefined;
const v6 = [13.37,13.37,13.37,13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v7 = v6;
let v9 = 0;
Array[v9] = Array;
const v13 = Object.seal(Array);
// v13 = .object()
let v17 = 0;
const v21 = [13.37,13.37,-4294967297,13.37];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v22 = {length:v21,d:Uint8Array};
// v22 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "d"])
let v24 = 8;
let v26 = 0;
const v27 = v17 + 1;
// v27 = .primitive
v17 = v27;
const v30 = [13.37,13.37,13.37,13.37];
// v30 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v31 = {__proto__:"hasInstance",d:v30};
// v31 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v33 = {call:v31};
// v33 = .object(ofGroup: Object, withProperties: ["__proto__", "call"])
const v35 = new Proxy(Array,v33);
// v35 = .unknown
for (const v36 in v35) {
}
}
%NeverOptimizeFunction(main);
main();
