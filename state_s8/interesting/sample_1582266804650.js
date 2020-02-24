function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = {e:2676202182,valueOf:v3,b:2676202182,a:Float32Array};
// v4 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "__proto__", "b", "e"])
let v5 = v4;
const v7 = [13.37,13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v9 = [1337,v7];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v11(v12,v13) {
    for (const v15 in "boolean") {
        const v17 = [13.37,13.37,13.37,13.37];
        // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v19 = {b:2147483647};
        // v19 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
        function v20(v21,v22) {
            v17.toString = v20;
            for (const v23 in v21) {
                const v26 = v21 & v15;
                // v26 = .integer
                for (const v27 of v19) {
                }
            }
        }
        const v32 = v17.forEach(v20,v19);
        // v32 = .undefined
        let v35 = 0;
        do {
            const v36 = {};
            // v36 = .object(ofGroup: Object, withProperties: ["__proto__"])
            v36.a = "boolean";
            let v39 = 0;
            do {
            } while (v39 < 0);
            const v40 = v35 + 1;
            // v40 = .primitive
            v35 = v40;
            v39 = v5;
        } while (v35 < 8);
    }
}
const v42 = [1337];
// v42 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v43 = v42;
const v44 = v11(v43);
// v44 = .unknown
const v45 = v11(v9);
// v45 = .unknown
}
%NeverOptimizeFunction(main);
main();
