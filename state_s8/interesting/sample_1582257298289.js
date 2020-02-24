function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            let v10 = v9;
            const v11 = 0 >> v10;
            // v11 = .integer
            const v14 = {constructor:"symbol",length:9007199254740993};
            // v14 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
            const v15 = v14[3196103978];
            // v15 = .unknown
            v10 = v11;
            let v18 = 0;
            do {
                const v19 = v18 + 1;
                // v19 = .primitive
                v18 = v19;
            } while (v18 < 7);
            const v20 = v9 + 1;
            // v20 = .primitive
            v9 = v20;
        } while (v9 < 8);
    }
}
const v21 = v2();
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
