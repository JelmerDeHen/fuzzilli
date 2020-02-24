function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v8 = v2;
            const v9 = v8 + 1;
            // v9 = .primitive
            const v11 = [1337,1337];
            // v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            let v14 = 0;
            const v17 = [1337,1337,1337,1337];
            // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
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
// v28 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v29 = v28;
const v30 = v0(v29);
// v30 = .unknown
const v31 = v0();
// v31 = .unknown
const v33 = [13.37,13.37,13.37];
// v33 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
}
%NeverOptimizeFunction(main);
main();
