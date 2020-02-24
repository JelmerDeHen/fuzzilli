function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v6 = v5;
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
let v11 = undefined;
for (const v13 in "boolean") {
    let v16 = 0;
    do {
        const v19 = {constructor:"symbol",length:9007199254740993};
        // v19 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"])
        const v21 = [13.37,13.37,13.37];
        // v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v24 = [1337];
        // v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        let v25 = v24;
        let v27 = undefined;
        for (const v31 in "boolean") {
            let v34 = 0;
            do {
                let v37 = 0;
                const v38 = v37 + 1;
                // v38 = .primitive
                v37 = v38;
                const v42 = [1337,1337,1337];
                // v42 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
                const v45 = v42.unshift(13.37,-9007199254740992,-9007199254740992);
                // v45 = .integer
                const v51 = [1337,1337,1337];
                // v51 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
                const v54 = v34 + 1;
                // v54 = .primitive
                v34 = v54;
            } while (v34 < 8);
        }
        v11 = v13;
        const v55 = v16 + 1;
        // v55 = .primitive
        v16 = v55;
    } while (v16 < 8);
}
}
%NeverOptimizeFunction(main);
main();
