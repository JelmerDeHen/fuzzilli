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
                const v16 = v7 << 1024;
                // v16 = .integer
                v1 = v16;
                let v19 = 0;
                v13 = v14;
            } while (v13 < 7);
            const v22 = v10 + 1;
            // v22 = .primitive
            v10 = v22;
        } while (v10 < 8);
    }
}
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v26 = v25;
const v27 = v3(v26);
// v27 = .unknown
}
%NeverOptimizeFunction(main);
main();
