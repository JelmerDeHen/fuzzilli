function main() {
function v1(v2,v3) {
    let v6 = -2908695906;
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            let v12 = 0;
            const v13 = v12 + 1;
            // v13 = .primitive
            const v15 = [1337,1337];
            // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            let v18 = 0;
            const v19 = v18 + 1;
            // v19 = .primitive
            const v22 = [1337,1337,1337,1337];
            // v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            const v23 = v15.shift();
            // v23 = .unknown
            const v25 = Symbol.toPrimitive;
            // v25 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            v25[v25] = v22;
            const v26 = 1024 % 13.37;
            // v26 = .number
            let v29 = 0;
            do {
                const v30 = v29 + 1;
                // v30 = .primitive
                v29 = v30;
            } while (v29 < 7);
            const v31 = v10 + 1;
            // v31 = .primitive
            v10 = v31;
        } while (v10 < 8);
    }
    const v32 = v6 + 1;
    // v32 = .primitive
    return "boolean";
}
const v34 = [1337];
// v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v35 = v34;
const v36 = v1(v35);
// v36 = .unknown
const v37 = v1();
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
