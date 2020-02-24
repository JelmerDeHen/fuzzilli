function main() {
const v2 = {e:13.37,d:"d"};
// v2 = .object(ofGroup: Object, withProperties: ["e", "d", "__proto__"])
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            let v13 = 0;
            while (v13 < 5) {
                const v14 = v2 < 0;
                // v14 = .boolean
                const v15 = v13 + 1;
                // v15 = .primitive
                const v16 = v14 / v15;
                // v16 = .number
                const v17 = 0 & v16;
                // v17 = .integer
                v13 = v15;
            }
            const v18 = v10 + 1;
            // v18 = .primitive
            v10 = v18;
        } while (v10 < 8);
    }
}
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v21 = v20;
const v22 = v3(v21);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
