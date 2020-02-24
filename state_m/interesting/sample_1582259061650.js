function main() {
const v1 = {};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = {a:-4294967297,valueOf:"function",b:1337,length:v6,d:13.37};
// v7 = .object(ofGroup: Object, withProperties: ["b", "a", "length", "__proto__", "valueOf", "d"])
function v9(v10,v11) {
    for (const v13 in "boolean") {
        let v16 = 0;
        do {
            const v17 = v7 + "function";
            // v17 = .primitive
            v1.toString = v10;
            const v19 = [1337,1337,1337,1337];
            // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
            const v21 = [v16,7];
            // v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
            const v22 = isNaN(v7);
            // v22 = .boolean
            const v23 = v22.length;
            // v23 = .unknown
            const v24 = v16 + 1;
            // v24 = .primitive
            v16 = v24;
        } while (v16 < 8);
    }
}
const v26 = v9(1024,4.0);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
