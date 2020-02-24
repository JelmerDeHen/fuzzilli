function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            const v10 = v9 + 1;
            // v10 = .primitive
            v9 = v10;
            const v13 = Symbol.toStringTag;
            // v13 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
            const v14 = Symbol[v13];
            // v14 = .unknown
            const v15 = {getPrototypeOf:v14,get:v14};
            // v15 = .object(ofGroup: Object, withProperties: ["get", "__proto__", "getPrototypeOf"])
            const v17 = new gc(eval,v15);
            // v17 = .object()
            this.__proto__ = v17;
        } while (v9 < 8);
    }
    return v2;
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v22 = v21;
const v23 = v2(v22);
// v23 = .unknown
for (const v27 of v21) {
    const v28 = new v23(1337,v27);
    // v28 = .object()
}
}
%NeverOptimizeFunction(main);
main();
