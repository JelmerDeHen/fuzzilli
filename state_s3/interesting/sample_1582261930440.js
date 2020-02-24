function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = {e:-4294967296,constructor:v6,c:v4,valueOf:v6};
// v7 = .object(ofGroup: Object, withProperties: ["e", "valueOf", "__proto__", "c", "constructor"])
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
            // v26 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
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
