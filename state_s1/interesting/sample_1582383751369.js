function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            const v8 = v7 + 1;
            // v8 = .primitive
            v7 = v8;
            const v10 = Symbol.toStringTag;
            // v10 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            const v11 = Symbol[v10];
            // v11 = .unknown
            const v12 = {getPrototypeOf:v11,get:v11};
            // v12 = .object(ofGroup: Object, withProperties: ["getPrototypeOf", "__proto__", "get"])
            if (v2) {
            } else {
                v7 = Int8Array;
            }
            if (v1) {
                const v14 = v0();
                // v14 = .unknown
            } else {
            }
        } while (v7 < 8);
    }
}
const v16 = [1337];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v17 = v16;
const v18 = v0(v17);
// v18 = .unknown
}
%NeverOptimizeFunction(main);
main();
