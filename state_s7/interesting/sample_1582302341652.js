function main() {
const v2 = [13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = v2.__proto__;
// v4 = .object()
let v6 = this;
let v7 = v6;
const v10 = new Proxy(v7,Object);
// v10 = .unknown
let v13 = 0;
do {
    const v15 = Symbol.isConcatSpreadable;
    // v15 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
    v4[v15] = 1337;
    const v16 = v13 + 1;
    // v16 = .primitive
    v13 = v16;
} while (v13 < 3);
}
%NeverOptimizeFunction(main);
main();
