function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v5 = "undefined".__proto__;
// v5 = .object()
v5[3133106106] = v5;
const v9 = [13.37,13.37,13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v11 = [v9,471091797,DataView];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v12 = {c:1337};
// v12 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
const v13 = {constructor:v9,toString:v12,__proto__:471091797,length:v11};
// v13 = .object(ofGroup: Object, withProperties: ["length", "toString", "constructor", "__proto__"])
const v16 = typeof v13;
// v16 = .string
const v18 = v16 === "object";
// v18 = .boolean
const v19 = "D.FBUTswEx"[512];
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
