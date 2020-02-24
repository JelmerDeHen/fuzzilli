function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v9 = 0;
            const v10 = v9 + 1;
            // v10 = .primitive
            const v12 = [1337,1337];
            // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            const v16 = [1337,1337,1337,1337];
            // v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            const v17 = v12.shift();
            // v17 = .unknown
            const v19 = Symbol.toPrimitive;
            // v19 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            v19[1337] = v16;
            const v20 = 1024 % 13.37;
            // v20 = .number
            let v23 = 0;
            do {
                const v24 = v23 + 1;
                // v24 = .primitive
                v23 = v24;
            } while (v23 < 7);
            const v25 = v20 + 1;
            // v25 = .primitive
            v7 = v25;
        } while (v7 < 8);
    }
}
const v27 = [1337];
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v28 = v27;
const v29 = v0(v28);
// v29 = .unknown
const v30 = v0();
// v30 = .unknown
const v31 = v0();
// v31 = .unknown
}
%NeverOptimizeFunction(main);
main();
