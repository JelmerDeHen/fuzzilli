function main() {
function v0(v1,v2) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            length = 0;
            let v11 = 0;
            do {
                const v12 = v11 + 1;
                // v12 = .primitive
                v11 = v12;
            } while (v11 < 7);
            const v13 = v8 + 1;
            // v13 = .primitive
            v8 = v13;
        } while (v8 < 8);
    }
}
const v15 = [1337];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v16 = v15;
const v17 = v0(v16);
// v17 = .unknown
}
%NeverOptimizeFunction(main);
main();