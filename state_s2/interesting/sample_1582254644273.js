function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v5 = "undefined".__proto__;
// v5 = .object()
v5[3133106106] = v5;
const v9 = [13.37,13.37,13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v11 = [v9,471091797,DataView];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v12 = {c:1337};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v13 = {constructor:v9,toString:v12,__proto__:471091797,length:v11};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "toString", "constructor"])
const v16 = typeof v13;
// v16 = .string
const v18 = v16 === "object";
// v18 = .boolean
const v19 = "D.FBUTswEx"[512];
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
