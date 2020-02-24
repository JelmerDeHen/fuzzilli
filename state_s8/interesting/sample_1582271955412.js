function main() {
function v0(v1,v2) {
    let v6 = 0;
    const v9 = new Int16Array(19873);
    // v9 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
    for (const v10 of v9) {
    }
    const v15 = [13.37,13.37,13.37];
    // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v17 = [1337,1337,1337,1337,1337];
    // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v18 = {e:-4294967296,constructor:v17,c:v15,valueOf:v17};
    // v18 = .object(ofGroup: Object, withProperties: ["e", "valueOf", "c", "__proto__", "constructor"])
    let v19 = v18;
    function v20(v21,v22,v23,v24,v25) {
        'use strict'
        for (const v27 in "boolean") {
            let v30 = 0;
            do {
                const v31 = v30 + 1;
                // v31 = .primitive
                const v34 = eval(1337);
                // v34 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
                v30 = v31;
            } while (v30 < 8);
        }
    }
    const v35 = -4294967296 & -4294967296;
    // v35 = .integer
    const v36 = v20(v19,v35,parseInt,v15,"replace");
    // v36 = .unknown
}
const v38 = [1337];
// v38 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v39 = v38;
const v40 = v0(v39);
// v40 = .unknown
const v41 = v0();
// v41 = .unknown
}
%NeverOptimizeFunction(main);
main();
