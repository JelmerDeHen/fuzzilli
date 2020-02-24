function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        const v7 = {};
        // v7 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v11 = 0;
        while (v11 < 10) {
            v7.valueOf = Array;
            const v12 = v11 + 1;
            // v12 = .primitive
            v11 = v12;
        }
        let v14 = 0;
        do {
            let v17 = 0;
            while (v17 < 6) {
                const v18 = v17 + 1;
                // v18 = .primitive
                v17 = v18;
            }
            const v19 = v14 + 1;
            // v19 = .primitive
            v14 = v19;
        } while (v14 < 8);
    }
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v22 = v21;
const v23 = v0(v22);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
