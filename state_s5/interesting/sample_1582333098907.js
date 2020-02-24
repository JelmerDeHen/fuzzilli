function main() {
const v3 = [59446.68221467873];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = [v3,1337,-2547248489];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v6(v7,v8) {
    const v11 = [13.37,13.37];
    // v11 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v13 = v11.__proto__;
    // v13 = .object()
    let v15 = this;
    let v16 = v15;
    const v19 = new Proxy(v16,Object);
    // v19 = .unknown
    v13.__proto__ = v19;
    const v21 = Symbol.isConcatSpreadable;
    // v21 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
    v13[v21] = 1337;
    for (const v22 in "boolean") {
        for (const v24 of "pvU0UUjoya") {
        }
    }
}
const v25 = v6(RegExp);
// v25 = .unknown
const v27 = v6(gc,v5);
// v27 = .unknown
const v28 = v6();
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
