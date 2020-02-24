function main() {
for (const v1 in "boolean") {
    const v3 = [1337];
    // v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
