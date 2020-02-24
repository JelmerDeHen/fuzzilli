function main() {
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
let v12 = 0;
let v15 = 0;
const v17 = [1337,1337,1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v18(v19,v20) {
    for (const v22 in "boolean") {
        function v23(v24,v25) {
            let v29 = 0;
            const v32 = [1337,1337,1337,1337];
            // v32 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
            function v33(v34,v35) {
                return v33;
            }
            const v37 = [1337];
            // v37 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
            let v38 = v37;
            const v39 = v33(v38);
            // v39 = .unknown
            const v41 = {get:gc};
            // v41 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
            const v43 = Object.defineProperty(v39,2743566176,v41);
            // v43 = .undefined
            const v44 = {toString:v33,...v32,...v43};
            // v44 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"], withMethods: ["reduce", "includes", "reduceRight", "every", "sort", "toString", "join", "values", "keys", "some", "shift", "find", "filter", "map", "pop", "flat", "findIndex", "unshift", "entries", "indexOf", "fill", "toLocaleString", "flatMap", "lastIndexOf", "push", "splice", "reverse", "concat", "copyWithin", "slice", "forEach"])
            const v45 = v29 + 1;
            // v45 = .primitive
            v29 = v45;
        }
        const v47 = [1337];
        // v47 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        let v48 = v47;
        const v49 = v23(v48);
        // v49 = .unknown
        for (let v53 = 0; v53 < 100; v53++) {
        }
    }
}
const v54 = [-9007199254740992];
// v54 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v55 = v54;
const v56 = v18(v55);
// v56 = .unknown
}
%NeverOptimizeFunction(main);
main();
