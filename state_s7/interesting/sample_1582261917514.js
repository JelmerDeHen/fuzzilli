function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = {e:-4294967296,constructor:v6,c:v4,valueOf:v6};
// v7 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "valueOf", "constructor", "e"])
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
            // v26 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
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
