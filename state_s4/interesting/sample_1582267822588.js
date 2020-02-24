function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v10 = 0;
            do {
                const v11 = v10 + 1;
                // v11 = .primitive
                v10 = v11;
                const v13 = Math.acos(Math);
                // v13 = .number
            } while (v10 < 7);
            const v14 = v7 + 1;
            // v14 = .primitive
            v7 = v14;
        } while (v7 < 8);
    }
}
const v16 = [1337];
// v16 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v17 = v16;
const v18 = v0(v17);
// v18 = .unknown
}
%NeverOptimizeFunction(main);
main();
