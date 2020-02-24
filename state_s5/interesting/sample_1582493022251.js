function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v7 = "size";
        do {
            const v8 = ~v7;
            // v8 = .boolean
            const v10 = Symbol.toStringTag;
            // v10 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
            const v11 = Symbol[v10];
            // v11 = .unknown
            const v12 = {getPrototypeOf:v11,get:v11};
            // v12 = .object(ofGroup: Object, withProperties: ["get", "__proto__", "getPrototypeOf"])
            v7 = Int8Array;
            if (v2) {
                const v14 = v1();
                // v14 = .unknown
            } else {
            }
        } while (v7 < 8);
    }
}
const v16 = [1337];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v17 = v16;
const v18 = v1(v17);
// v18 = .unknown
}
%NeverOptimizeFunction(main);
main();
