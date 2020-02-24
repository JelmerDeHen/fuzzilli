function main() {
const v3 = [13.37,13.37,"function"];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
