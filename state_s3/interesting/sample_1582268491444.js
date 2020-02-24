function main() {
const v3 = -4294967295 === "undefined";
// v3 = .boolean
let v4 = "boolean";
const v6 = [13.37,13.37,13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = [1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v9 = {e:13.37,valueOf:v6,__proto__:v8,toString:v8,a:v6,d:v6};
// v9 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "toString", "valueOf", "d", "e"])
with (v9) {
    const v12 = [1337,1337,1337,1337,1337];
    // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    function v13(v14,v15) {
        function v16(v17,v18,v19,v20,v21) {
            'use strict'
            let v25 = 0;
            const v26 = v25 + 1;
            // v26 = .primitive
            v25 = v26;
            const v28 = [1337];
            // v28 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            let v29 = v28;
            let v31 = undefined;
            let v34 = 0;
            const v38 = v34 + 1;
            // v38 = .primitive
            v4 = v38;
        }
        const v39 = v16();
        // v39 = .unknown
    }
    const v40 = v12.forEach(v13,"eeeRbEqfAO");
    // v40 = .undefined
}
}
%NeverOptimizeFunction(main);
main();
