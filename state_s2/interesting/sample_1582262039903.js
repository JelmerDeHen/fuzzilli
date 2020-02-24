function main() {
let v2 = 0;
const v5 = [1337,1337,1337,v2];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = {b:2147483647};
// v6 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
function v7(v8,v9) {
    for (const v10 in arguments) {
        for (let v14 = 0; v14 < 100; v14++) {
            const v15 = v7();
            // v15 = .unknown
        }
        let v18 = 0;
        const v19 = v18 + 1;
        // v19 = .primitive
        v18 = v19;
    }
}
const v20 = v5.findIndex(v7,v6);
// v20 = .integer
}
%NeverOptimizeFunction(main);
main();
