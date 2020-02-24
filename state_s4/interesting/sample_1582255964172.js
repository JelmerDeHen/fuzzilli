function main() {
function v3(v4,v5) {
    const v6 = ~-1024;
    // v6 = .boolean
    let v13 = 0;
    for (const v14 in "boolean") {
        let v17 = 0;
        do {
            try {
                let v20 = 0;
                const v23 = DataView(28997);
                // v23 = .unknown
            } catch(v24) {
                const v28 = [];
                // v28 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
                let v31 = 0;
                const v32 = Reflect.get(Object,v24,v28);
                // v32 = .unknown
                const v33 = v31 + 1;
                // v33 = .primitive
                v31 = v33;
            }
            const v41 = v17 + 1;
            // v41 = .primitive
            v17 = v41;
        } while (v17 < 8);
    }
    const v42 = v13 + 1;
    // v42 = .primitive
    v13 = v42;
}
const v45 = [1337];
// v45 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v46 = v45;
const v47 = v3(v46);
// v47 = .unknown
}
%NeverOptimizeFunction(main);
main();
