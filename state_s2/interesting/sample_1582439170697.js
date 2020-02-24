function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
function v4(v5,v6) {
    let v10 = 0;
    const v11 = v10 + 1;
    // v11 = .primitive
    v10 = v11;
    const v14 = Symbol.toStringTag;
    // v14 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    const v15 = Symbol[v14];
    // v15 = .unknown
    const v16 = {getPrototypeOf:v15,get:v15};
    // v16 = .object(ofGroup: Object, withProperties: ["get", "getPrototypeOf", "__proto__"])
    v5[8] = v11;
    const v18 = new gc(eval,v16);
    // v18 = .object()
    this.__proto__ = v18;
    return v4;
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v23 = v22;
const v24 = v4(v23);
// v24 = .unknown
for (const v25 of v22) {
    const v26 = new v24(1337,v25);
    // v26 = .object()
}
}
%NeverOptimizeFunction(main);
main();
