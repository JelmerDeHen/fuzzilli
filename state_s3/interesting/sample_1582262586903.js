function main() {
const v2 = Array(2815038421);
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
for (const v4 in "object") {
    const v6 = {c:1337};
    // v6 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
    function v7(v8,v9) {
        for (const v12 in "boolean") {
            let v15 = 0;
            do {
                let v18 = 0;
                const v19 = v18 + 1;
                // v19 = .primitive
                v18 = v19;
                const v20 = 1337 in v6;
                // v20 = .boolean
                const v21 = v15 + 1;
                // v21 = .primitive
                v15 = v21;
            } while (v15 < 8);
        }
    }
    const v23 = [1337];
    // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v24 = v23;
    const v25 = v7(v24);
    // v25 = .unknown
    const v27 = {get:v7};
    // v27 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
    const v29 = Object.defineProperty(v6,-1687751422,v27);
    // v29 = .undefined
    const v30 = v7();
    // v30 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
