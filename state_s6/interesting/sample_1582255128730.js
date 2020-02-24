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
    // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v22 = v21;
    const v23 = v3(v22);
    // v23 = .unknown
    const v24 = v2 + 1;
    // v24 = .primitive
    v2 = v24;
}
const v26 = Symbol.replace;
// v26 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
let v27 = v26;
let v30 = 0;
}
%NeverOptimizeFunction(main);
main();
