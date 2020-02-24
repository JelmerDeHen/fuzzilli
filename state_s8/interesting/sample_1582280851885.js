function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {d:v6,c:Float64Array,b:v7};
// v8 = .object(ofGroup: Object, withProperties: ["d", "c", "__proto__", "b"])
const v9 = {c:"a",e:1337,b:v6,valueOf:1337,a:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "c", "a", "e", "valueOf"])
let v10 = 13.37;
const v15 = [13.37,13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v18 = [13.37,13.37,13.37,13.37];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v22(v23,v24) {
    const v27 = {set:v22,get:v22};
    // v27 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
    const v29 = Object.defineProperty(arguments,7,v27);
    // v29 = .undefined
    const v30 = Object.getOwnPropertyDescriptors(arguments);
    // v30 = .object()
}
const v31 = v18.sort(v22);
// v31 = .undefined
let v34 = 0;
let v37 = 0;
const v38 = v37 + 1;
// v38 = .primitive
v37 = v38;
const v39 = v34 + 1;
// v39 = .primitive
v34 = v39;
const v40 = [1337,1337,1337,1337,1337];
// v40 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v41 = {e:-4294967296,constructor:v40,c:v15,valueOf:v40};
// v41 = .object(ofGroup: Object, withProperties: ["constructor", "e", "c", "valueOf", "__proto__"])
let v42 = v41;
function v43(v44,v45,v46,v47,v48) {
    'use strict'
    let v50 = 0;
    const v51 = v50 + 1;
    // v51 = .primitive
    for (const v53 in "boolean") {
        let v56 = 0;
        do {
            const v57 = v56 + 1;
            // v57 = .primitive
            const v60 = eval(1337);
            // v60 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
            v56 = v57;
        } while (v56 < 8);
    }
}
const v61 = v43();
// v61 = .unknown
const v62 = -4294967296 & -4294967296;
// v62 = .integer
const v63 = v43(v42,v62,"replace",v15,"replace");
// v63 = .unknown
const v65 = [1337];
// v65 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v66 = v43(100,v65,Float64Array,v65,v41);
// v66 = .unknown
}
%NeverOptimizeFunction(main);
main();
