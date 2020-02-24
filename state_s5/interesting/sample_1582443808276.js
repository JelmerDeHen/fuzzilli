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
    // v11 = .object(ofGroup: Object, withProperties: ["get", "getPrototypeOf", "__proto__"])
    v2[8] = v7;
    const v13 = new gc(0,v11);
    // v13 = .object()
    this.__proto__ = v13;
    return v1;
}
const v16 = [0];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
