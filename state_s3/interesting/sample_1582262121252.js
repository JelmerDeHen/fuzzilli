function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [RegExp,v6,"NEGATIVE_INFINITY",13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {toString:v4,valueOf:2147483648,constructor:"NEGATIVE_INFINITY",length:RegExp,__proto__:RegExp,b:RegExp,d:13.37,a:2147483648,c:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["c", "d", "constructor", "valueOf", "a", "__proto__", "toString"], withMethods: ["length", "__proto__", "b"])
const v9 = {};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v10 = v7;
function v11(v12,v13) {
    for (const v15 in "boolean") {
        let v18 = 0;
        const v19 = v18 + 1;
        // v19 = .primitive
        v18 = v19;
        let v24 = 0;
        const v25 = v24 + 1;
        // v25 = .primitive
        v24 = v25;
        let v28 = 0;
        const v29 = v28 + 1;
        // v29 = .primitive
        v28 = v29;
        let v32 = 0;
        const v33 = v32 + 1;
        // v33 = .primitive
        v10 = v33;
        let v40 = 1073741824;
        const v44 = [1337,1337,1337];
        // v44 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        let v47 = 0;
        while (v47 < 8) {
            for (const v49 in "toString") {
                const v53 = "toString" & 4294967297;
                // v53 = .integer
            }
            const v54 = v47 + 1;
            // v54 = .primitive
            v47 = v54;
        }
        let v55 = 0;
        const v56 = v55 + 1;
        // v56 = .primitive
        v55 = 9;
    }
    return "boolean";
}
const v58 = [1337];
// v58 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v59 = v58;
const v60 = v11(v59);
// v60 = .unknown
}
%NeverOptimizeFunction(main);
main();
