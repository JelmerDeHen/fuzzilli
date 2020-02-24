function main() {
const v2 = [13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = v2.__proto__;
// v4 = .object()
let v6 = this;
let v7 = v6;
const v10 = new Proxy(v7,Object);
// v10 = .unknown
let v13 = 0;
do {
    const v15 = Symbol.isConcatSpreadable;
    // v15 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    v4[v15] = 1337;
    const v16 = v13 + 1;
    // v16 = .primitive
    v13 = v16;
} while (v13 < 3);
}
%NeverOptimizeFunction(main);
main();
