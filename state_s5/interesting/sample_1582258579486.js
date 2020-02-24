function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            let v13 = 0;
            do {
                const v14 = v13 + 1;
                // v14 = .primitive
                const v17 = [1337,1337,1337,1337];
                // v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
                const v18 = {b:2147483647};
                // v18 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
                function v19(v20,v21) {
                    for (const v22 in v17) {
                    }
                    return v2;
                }
                const v23 = v17.findIndex(v19,v18);
                // v23 = .integer
                v13 = v14;
            } while (v13 < 7);
            const v24 = v10 + 1;
            // v24 = .primitive
            v10 = v24;
        } while (v10 < 8);
    }
}
for (let v29 = 0; v29 < 100; v29++) {
    const v30 = v3(1337);
    // v30 = .unknown
}
"symbol".valueOf = v3;
}
%NeverOptimizeFunction(main);
main();
