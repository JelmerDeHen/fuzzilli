function main() {
let v1 = Promise;
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        while (v9 < 8) {
            const v10 = v9 + 1;
            // v10 = .primitive
            v9 = v10;
        }
        try {
            const v12 = v1();
            // v12 = .unknown
        } catch(v13) {
            v13.toString = v13;
        }
        for (let v17 = 0; v17 < 100; v17++) {
        }
    }
    return "boolean";
}
const v19 = [1337];
// v19 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v20 = v19;
const v21 = v2(v20);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
