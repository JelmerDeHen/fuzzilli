function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v2 = {constructor:1337};
// v2 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
const v5 = [1337,Promise];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
let v14 = undefined;
let v18 = 0;
try {
    const v21 = "boolean".__proto__;
    // v21 = .object()
    const v26 = {};
    // v26 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v32 = {get:v21,set:Array};
    // v32 = .object(ofGroup: Object, withProperties: ["__proto__", "get"], withMethods: ["set"])
    const v34 = Object.defineProperty(v26,8,v32);
    // v34 = .undefined
    let v38 = 0;
} catch(v42) {
}
const v46 = v18 + 1;
// v46 = .primitive
v18 = v46;
}
%NeverOptimizeFunction(main);
main();
