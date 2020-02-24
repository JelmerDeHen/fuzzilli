function main() {
const v3 = [13.37,13.37,"function"];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
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
