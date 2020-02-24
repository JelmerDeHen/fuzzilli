function main() {
for (let v3 = 0; v3 < 100; v3++) {
}
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
const v9 = "undefined".__proto__;
// v9 = .object()
v9[8] = 2;
const v13 = [13.37,13.37,13.37,13.37];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v15 = [v13,471091797,DataView];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v16 = {c:1337};
// v16 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
const v17 = {constructor:v13,toString:v16,__proto__:471091797,length:v15};
// v17 = .object(ofGroup: Object, withProperties: ["toString", "constructor", "__proto__", "length"])
const v19 = typeof v17;
// v19 = .string
const v21 = v19 === "object";
// v21 = .boolean
}
%NeverOptimizeFunction(main);
main();
