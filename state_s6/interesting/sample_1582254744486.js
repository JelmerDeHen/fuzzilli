function main() {
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
const v8 = "undefined".__proto__;
// v8 = .object()
v8[8] = 2;
v8[3133106106] = v8;
const v12 = [13.37,13.37,13.37,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v14 = [v12,471091797,DataView];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v15 = {c:1337};
// v15 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
const v16 = {constructor:v12,toString:v15,__proto__:471091797,length:v14};
// v16 = .object(ofGroup: Object, withProperties: ["length", "toString", "__proto__", "constructor"])
const v18 = typeof v16;
// v18 = .string
const v20 = v18 === "object";
// v20 = .boolean
for (const v21 in "object") {
    continue;
    let v24 = 0;
}
const v25 = "undefined".__proto__;
// v25 = .object()
v25[3133106106] = v25;
}
%NeverOptimizeFunction(main);
main();
