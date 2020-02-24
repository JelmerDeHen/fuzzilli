function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v2 = v1;
let v4 = undefined;
let v11 = 0;
let v14 = 0;
const v15 = v14 + 1;
// v15 = .primitive
v14 = v15;
do {
    const v19 = v11 + 1;
    // v19 = .primitive
    const v24 = [13.37,13.37,13.37];
    // v24 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v26 = [1337,1337,1337,1337,1337];
    // v26 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v27 = {e:-4294967296,constructor:v26,c:v24,valueOf:v26};
    // v27 = .object(ofGroup: Object, withProperties: ["constructor", "c", "__proto__", "e", "valueOf"])
    let v28 = v27;
    function v29(v30,v31,v32,v33,v34) {
        'use strict'
        let v36 = 0;
        const v37 = v36 + 1;
        // v37 = .primitive
        for (const v39 in "boolean") {
            let v42 = 0;
            do {
                const v43 = v42 + 1;
                // v43 = .primitive
                const v46 = eval(1337);
                // v46 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
                v42 = v43;
            } while (v42 < 8);
        }
    }
    const v47 = v29();
    // v47 = .unknown
    const v48 = -4294967296 & -4294967296;
    // v48 = .integer
    const v49 = v29(v28,v48,parseInt,v24,"replace");
    // v49 = .unknown
    let v54 = 0;
    const v55 = v54 + 1;
    // v55 = .primitive
    v54 = v55;
    const v67 = gc();
    // v67 = .undefined
    v11 = v19;
} while (v11 < 3);
}
%NeverOptimizeFunction(main);
main();
