function main() {
let v2 = 0;
while (v2 < 8) {
    function v3(v4,v5) {
        let v12 = 2147483648;
        for (const v13 in "boolean") {
            let v16 = 0;
            do {
                const v18 = v16 + 1;
                // v18 = .primitive
                v16 = v18;
            } while (v16 < 8);
        }
        do {
            const v19 = v12 + 1;
            // v19 = .primitive
            v12 = v19;
        } while (v12 < 3);
    }
    const v21 = [1337];
    // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v22 = v21;
    const v23 = v3(v22);
    // v23 = .unknown
    const v24 = v2 + 1;
    // v24 = .primitive
    v2 = v24;
}
const v26 = Symbol.replace;
// v26 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
let v27 = v26;
let v30 = 0;
}
%NeverOptimizeFunction(main);
main();
