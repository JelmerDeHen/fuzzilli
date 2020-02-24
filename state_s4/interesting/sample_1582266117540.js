function main() {
const v4 = ["d",isFinite,isFinite,isFinite];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = {a:isFinite};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
const v7 = [13.37,13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v9 = {b:2147483647};
// v9 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
function v10(v11,v12) {
    for (const v14 in "boolean") {
        let v17 = 3239597223;
        do {
            v5.c = v4;
            let v19 = 0;
            do {
                const v20 = v19 + 1;
                // v20 = .primitive
                v19 = v20;
            } while (v19 < 13.37);
            const v21 = v17 + 1;
            // v21 = .primitive
            v17 = v21;
        } while (v17 < 8);
    }
}
const v22 = v7.forEach(v10,v9);
// v22 = .undefined
}
%NeverOptimizeFunction(main);
main();
