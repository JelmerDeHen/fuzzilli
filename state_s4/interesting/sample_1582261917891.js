function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = {e:-4294967296,constructor:v6,c:v4,valueOf:v6};
// v7 = .object(ofGroup: Object, withProperties: ["valueOf", "c", "__proto__", "constructor", "e"])
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
            // v26 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
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
