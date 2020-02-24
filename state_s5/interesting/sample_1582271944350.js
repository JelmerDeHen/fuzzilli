function main() {
function v0(v1,v2) {
    let v6 = 0;
    const v9 = new Int16Array(19873);
    // v9 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
    for (const v10 of v9) {
    }
    const v15 = [13.37,13.37,13.37];
    // v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v17 = [1337,1337,1337,1337,1337];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v18 = {e:-4294967296,constructor:v17,c:v15,valueOf:v17};
    // v18 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "valueOf", "e", "constructor"])
    let v19 = v18;
    function v20(v21,v22,v23,v24,v25) {
        'use strict'
        for (const v27 in "boolean") {
            let v30 = 0;
            do {
                const v31 = v30 + 1;
                // v31 = .primitive
                const v34 = eval(1337);
                // v34 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
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
// v38 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v39 = v38;
const v40 = v0(v39);
// v40 = .unknown
const v41 = v0();
// v41 = .unknown
}
%NeverOptimizeFunction(main);
main();
