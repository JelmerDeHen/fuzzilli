function main() {
for (const v1 in "boolean") {
    const v3 = [1337];
    // v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v4 = v3;
    let v6 = undefined;
    const v9 = Symbol.toPrimitive;
    // v9 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
    const v10 = v9[v9];
    // v10 = .unknown
    let v13 = 0;
    const v14 = v13 + 1;
    // v14 = .primitive
    v13 = v14;
    delete v10.toString;
    v10.toString = Symbol;
}
let v17 = 0;
const v18 = v17 + 1;
// v18 = .primitive
v17 = v18;
}
%NeverOptimizeFunction(main);
main();
