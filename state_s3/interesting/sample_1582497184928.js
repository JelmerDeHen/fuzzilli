function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v7 = "size";
        do {
            const v8 = v7 - 1;
            // v8 = .primitive
            const v10 = Symbol.toStringTag;
            // v10 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            const v11 = Symbol[v10];
            // v11 = .unknown
            const v12 = {getPrototypeOf:v11,get:v11};
            // v12 = .object(ofGroup: Object, withProperties: ["get", "getPrototypeOf", "__proto__"])
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
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v17 = v16;
const v18 = v1(v17);
// v18 = .unknown
}
%NeverOptimizeFunction(main);
main();
