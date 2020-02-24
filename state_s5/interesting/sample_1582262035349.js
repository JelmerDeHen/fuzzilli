function main() {
let v2 = 0;
const v5 = [1337,1337,1337,v2];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = {b:2147483647};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
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
