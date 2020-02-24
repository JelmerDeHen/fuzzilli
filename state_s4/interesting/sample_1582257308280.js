function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            let v10 = v9;
            const v11 = 0 >> v10;
            // v11 = .integer
            const v14 = {constructor:"symbol",length:9007199254740993};
            // v14 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"])
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
