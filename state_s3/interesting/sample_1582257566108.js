function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            const v11 = {constructor:"symbol",length:"symbol"};
            // v11 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
            function v12(v13,v14) {
            }
            let v16 = v1;
            do {
                const v17 = {};
                // v17 = .object(ofGroup: Object, withProperties: ["__proto__"])
                let v18 = v17;
                const v20 = [1337,1337,1337,1337];
                // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
                delete v20[v18];
            } while (v16 < 7);
            for (let v26 = 0; v26 < 0; v26++) {
                const v27 = arguments(v26,1337,v26);
                // v27 = .unknown
            }
            const v28 = v9 + 1;
            // v28 = .primitive
            v9 = v28;
        } while (v9 < 8);
    }
}
const v30 = [1337];
// v30 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v31 = v30;
const v32 = v2(v31);
// v32 = .unknown
const v33 = v2();
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
