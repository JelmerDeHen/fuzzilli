function main() {
function v1(v2,v3) {
    for (const v5 in "undefined") {
        let v8 = 0;
        do {
            let v11 = 0;
            do {
                const v12 = "object" + 1;
                // v12 = .primitive
                v11 = v12;
            } while (v11 < 7);
            let v14 = 0;
            const v15 = v14 + 1;
            // v15 = .primitive
            v14 = v15;
            let v18 = 128;
            do {
                const v19 = v18 + 1;
                // v19 = .primitive
                v18 = v19;
            } while (v18 < 3);
            const v20 = v8 + 1;
            // v20 = .primitive
            v8 = v20;
        } while (v8 < 8);
    }
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v23 = v22;
const v24 = v1(v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
