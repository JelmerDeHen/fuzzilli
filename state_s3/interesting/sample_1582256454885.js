function main() {
const v2 = ["d",isFinite,isFinite,isFinite];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = {a:isFinite};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
const v5 = [13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = {b:2147483647};
// v7 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
function v8(v9,v10) {
    for (const v12 in "boolean") {
        let v15 = 3239597223;
        do {
            v3.__proto__ = v2;
            let v18 = 0;
            do {
                const v19 = v18 + 1;
                // v19 = .primitive
                v18 = v19;
            } while (v18 < 7);
            const v20 = v15 + 1;
            // v20 = .primitive
            v15 = v20;
        } while (v15 < 8);
    }
}
const v21 = v5.forEach(v8,v7);
// v21 = .undefined
}
%NeverOptimizeFunction(main);
main();
