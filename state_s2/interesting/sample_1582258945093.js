function main() {
const v2 = {};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v3 = {e:1337,toString:Promise};
// v3 = .object(ofGroup: Object, withProperties: ["e", "toString", "__proto__"])
function v4(v5,v6) {
    for (const v8 in "boolean") {
        let v18 = 0;
        const v19 = v18 + 1;
        // v19 = .primitive
        v18 = v19;
        for (const v20 in v3) {
            const v21 = v2[v20];
            // v21 = .unknown
        }
        let v23 = 0;
        do {
            let v26 = 0;
            let v30 = 0;
            do {
                const v31 = v26 + 1;
                // v31 = .primitive
                v26 = v31;
            } while (v26 < 7);
            const v32 = v23 + 1;
            // v32 = .primitive
            v23 = v32;
        } while (v23 < 8);
    }
}
const v34 = [1337];
// v34 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v35 = new Promise(v4,Promise);
// v35 = .object()
let v36 = v34;
const v37 = v4(v36);
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
