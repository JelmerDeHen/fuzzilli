function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = {e:-4294967296,constructor:v6,c:v4,valueOf:v6};
// v7 = .object(ofGroup: Object, withProperties: ["constructor", "c", "e", "__proto__", "valueOf"])
let v8 = v7;
function v9(v10,v11,v12,v13,v14) {
    'use strict'
    let v16 = 0;
    const v17 = v16 + 1;
    // v17 = .primitive
    for (const v19 in "boolean") {
        let v22 = 0;
        do {
            const v23 = v22 + 1;
            // v23 = .primitive
            const v26 = eval(1337);
            // v26 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
            v22 = v23;
        } while (v22 < 8);
    }
}
const v27 = v9();
// v27 = .unknown
const v28 = -4294967296 & -4294967296;
// v28 = .integer
const v29 = v9(v8,v28,parseInt,v4,"replace");
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
