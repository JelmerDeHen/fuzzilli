function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            const v12 = [1337,1337,1337];
            // v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            const v13 = typeof Array;
            // v13 = .string
            const v15 = v13 < "undefined";
            // v15 = .boolean
            let v18 = 0;
            const v20 = v18 + 1;
            // v20 = .primitive
            v18 = v20;
            let v21 = 0;
            do {
                const v22 = v21 + 1;
                // v22 = .primitive
                v21 = v22;
            } while (v21 < 7);
            const v23 = v7 + 1;
            // v23 = .primitive
            v7 = v23;
        } while (v7 < 8);
    }
}
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v26 = v25;
const v27 = v0(v26);
// v27 = .unknown
}
%NeverOptimizeFunction(main);
main();
