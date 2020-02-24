function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        const v8 = {b:1337};
        // v8 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
        const v9 = v8[1950467978];
        // v9 = .unknown
        let v12 = 0;
        let v14 = v9;
        do {
            let v16 = v12;
            let v19 = 0;
        } while (v14 < 7);
        let v21 = 0;
        const v22 = v21 + 1;
        // v22 = .primitive
        v21 = v22;
        for (const v23 of "object") {
            let v26 = 0;
            do {
                const v27 = v26 + 1;
                // v27 = .primitive
                v26 = v27;
            } while (v26 < 6);
        }
    }
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v30 = v29;
const v31 = v1(v30);
// v31 = .unknown
}
%NeverOptimizeFunction(main);
main();
