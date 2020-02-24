function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = {e:-4294967296,constructor:v6,c:v4,valueOf:v6};
// v7 = .object(ofGroup: Object, withProperties: ["constructor", "e", "valueOf", "c", "__proto__"])
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
            // v26 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
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
