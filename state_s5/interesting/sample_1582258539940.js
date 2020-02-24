function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v10 = 0;
            function v11(v12,v13) {
                for (const v18 in "boolean") {
                }
                return v10;
            }
            let v22 = 0;
            const v24 = [1337];
            // v24 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            let v25 = v24;
            const v26 = v11(v25);
            // v26 = .unknown
            const v27 = v7 + 1;
            // v27 = .primitive
            v7 = v27;
        } while (v7 < 8);
    }
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v30 = v29;
const v31 = v0(v30);
// v31 = .unknown
const v35 = v0();
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
