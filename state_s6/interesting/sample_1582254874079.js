function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v8 = v2;
            const v9 = v8 + 1;
            // v9 = .primitive
            const v11 = [1337,1337];
            // v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            let v14 = 0;
            const v17 = [1337,1337,1337,1337];
            // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            const v18 = v11.shift();
            // v18 = .unknown
            const v20 = Symbol.toPrimitive;
            // v20 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            v20[v20] = v17;
            const v21 = 1024 % 13.37;
            // v21 = .number
            let v24 = 0;
            do {
                const v25 = v24 + 1;
                // v25 = .primitive
                v24 = v25;
            } while (v24 < 7);
            const v26 = v7 + 1;
            // v26 = .primitive
            v7 = v26;
        } while (v7 < 8);
    }
}
const v28 = [1337];
// v28 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v29 = v28;
const v30 = v0(v29);
// v30 = .unknown
const v31 = v0();
// v31 = .unknown
const v33 = [13.37,13.37,13.37];
// v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
}
%NeverOptimizeFunction(main);
main();
