function main() {
const v3 = [13.37,13.37,"function"];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = (13.37)[v3];
// v4 = .unknown
const v5 = Symbol.__proto__;
// v5 = .unknown
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
try {
    const v11 = Function(v5);
    // v11 = .unknown
} catch(v12) {
}
}
%NeverOptimizeFunction(main);
main();
