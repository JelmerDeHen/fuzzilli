function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            let v11 = 0;
            const v12 = v11 + 1;
            // v12 = .primitive
            v11 = v12;
            const v13 = v8 + 1;
            // v13 = .primitive
            v8 = v13;
        } while (v8 < 8);
    }
    return gc;
}
const v15 = [1337];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v16 = v15;
const v17 = v1(v16);
// v17 = .unknown
const v18 = v1();
// v18 = .unknown
const v19 = gc();
// v19 = .undefined
}
%NeverOptimizeFunction(main);
main();
