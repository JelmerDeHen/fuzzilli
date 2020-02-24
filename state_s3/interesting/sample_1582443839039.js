function main() {
function v1(v2,v3) {
    let v6 = 0;
    const v7 = v6 + 1;
    // v7 = .primitive
    const v9 = (0).toStringTag;
    // v9 = .unknown
    const v10 = Symbol[v9];
    // v10 = .unknown
    const v11 = {getPrototypeOf:v10,get:v10};
    // v11 = .object(ofGroup: Object, withProperties: ["getPrototypeOf", "__proto__", "get"])
    v2[8] = v7;
    const v13 = new gc(0,v11);
    // v13 = .object()
    this.__proto__ = v13;
    return v1;
}
const v16 = [0];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v17 = v16;
const v18 = v1(v17);
// v18 = .unknown
for (const v19 of v16) {
    const v20 = new v18(1337,v19);
    // v20 = .object()
}
}
%NeverOptimizeFunction(main);
main();
