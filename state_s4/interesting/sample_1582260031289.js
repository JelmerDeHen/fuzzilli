function main() {
let v1 = 1337;
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            let v13 = 0;
            do {
                const v14 = v13 + 1;
                // v14 = .primitive
                const v15 = v7 << 3;
                // v15 = .integer
                v1 = v15;
                v13 = v14;
            } while (v13 < 7);
            const v16 = v10 + 1;
            // v16 = .primitive
            v10 = v16;
        } while (v10 < 8);
    }
}
const v18 = [1337];
// v18 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v19 = v18;
const v20 = v3(v19);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
