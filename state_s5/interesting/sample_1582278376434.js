function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = {e:1337,valueOf:WeakMap,a:v2,__proto__:1337};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "e", "a"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v7(v8,v9) {
    for (const v11 in "boolean") {
        let v14 = 0;
        do {
            const v15 = [];
            // v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            const v17 = v15.map(v7,"boolean");
            // v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            for (let v21 = 0; v21 < 3; v21++) {
            }
            const v22 = v14 + 1;
            // v22 = .primitive
            v14 = v22;
        } while (v14 < 8);
        const v25 = {b:1337,e:1337,toString:v9,d:Uint16Array};
        // v25 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "toString", "d", "b"])
        const v27 = [v25,13.37,13.37,13.37,13.37];
        // v27 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        function v28(v29,v30) {
            'use strict'
            return v27;
        }
    }
}
let v33 = 0;
const v34 = v33 + 1;
// v34 = .primitive
v33 = v34;
const v35 = v7(v4);
// v35 = .unknown
const v36 = v6.sort(v7);
// v36 = .undefined
}
%NeverOptimizeFunction(main);
main();
