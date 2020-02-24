function main() {
const v3 = [13.37,13.37,"function"];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
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
