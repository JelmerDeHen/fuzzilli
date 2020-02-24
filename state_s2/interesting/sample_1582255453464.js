function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
const v11 = [13.37,13.37,13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v13 = [v11,471091797,DataView];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v14 = {c:1337};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v15 = {constructor:v11,e:v14,__proto__:471091797,length:v13};
// v15 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "constructor", "length"])
const v17 = typeof v15;
// v17 = .string
const v19 = v17 === "object";
// v19 = .boolean
const v21 = [1337,1337,1337,1337];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v22 = v21.unshift();
// v22 = .integer
const v25 = "pvU0UUjoya"[127];
// v25 = .unknown
let v32 = 0;
}
%NeverOptimizeFunction(main);
main();
