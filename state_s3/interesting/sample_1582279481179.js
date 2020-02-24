function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [v6,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {__proto__:v6,toString:129,constructor:"byteOffset",b:v4};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "b", "toString"])
const v10 = {};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v11 = v6;
function v12(v13,v14,v15,v16,v17) {
    'use strict'
    const v19 = [13.37,13.37,13.37,13.37,13.37];
    // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v20 = v19;
    let v24 = 0;
    const v25 = v24 + 1;
    // v25 = .primitive
    v24 = v25;
    let v26 = 0;
    for (const v27 of v20) {
        let v30 = 0;
        const v31 = v30 + 1;
        // v31 = .primitive
        v30 = v31;
        let v34 = 0;
        const v38 = v34 + 1;
        // v38 = .primitive
        v34 = v38;
        const v40 = [1337,1337];
        // v40 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v41 = {};
        // v41 = .object(ofGroup: Object, withProperties: ["__proto__"])
        const v46 = gc();
        // v46 = .undefined
        let v50 = 0;
        let v53 = 0;
        const v55 = Symbol.toPrimitive;
        // v55 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        let v58 = 0;
        const v59 = JSON.stringify(v58);
        // v59 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
        v41[v55] = v26;
        let v62 = 0;
        const v63 = v62 + 1;
        // v63 = .primitive
        v62 = v63;
        for (const v65 in "object") {
            for (const v67 in "replace") {
            }
        }
    }
    return v19;
}
const v68 = v12();
// v68 = .unknown
}
%NeverOptimizeFunction(main);
main();
