function main() {
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            for (const v17 in "boolean") {
                let v20 = 0;
                const v21 = (1337)[1337];
                // v21 = .unknown
                const v22 = v21 % undefined;
                // v22 = .number
                const v23 = [v22,v17,3,13.37];
                // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
                const v24 = v20 + 1;
                // v24 = .primitive
                v20 = v24;
            }
            let v25 = 0;
            const v26 = v25 + 1;
            // v26 = .primitive
            v25 = v26;
            const v27 = v9 + 1;
            // v27 = .primitive
            v9 = v27;
        } while (v9 < 8);
    }
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v30 = v29;
const v31 = v2(v30);
// v31 = .unknown
const v34 = [13.37,13.37];
// v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v36 = [1337,1337,Float64Array,1337];
// v36 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v37 = [13.37];
// v37 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v38 = {d:v36,c:Float64Array,b:v37};
// v38 = .object(ofGroup: Object, withProperties: ["b", "c", "__proto__", "d"])
const v39 = {c:"a",e:1337,b:v36,valueOf:1337,a:13.37};
// v39 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "valueOf", "e", "c", "b"])
let v40 = 13.37;
const v42 = [v40];
// v42 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v43 = v37;
let v45 = undefined;
for (const v47 in "undefined") {
    let v50 = 0;
    do {
        let v53 = 0;
        do {
            const v54 = v53 + 1;
            // v54 = .primitive
            v53 = v54;
            const v56 = [13.37,13.37];
            // v56 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            function v58(v59,v60,v61) {
                'use strict'
                const v63 = Symbol.species;
                // v63 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
                v56[v63] = "object";
                return v58;
            }
            const v64 = v58();
            // v64 = .unknown
        } while (v53 < 7);
        const v65 = v50 + 1;
        // v65 = .primitive
        v50 = v65;
    } while (v50 < v38);
}
}
%NeverOptimizeFunction(main);
main();
