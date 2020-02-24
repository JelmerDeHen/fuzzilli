function main() {
let v2 = 13.37;
const v5 = [13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [13.37,-828296917];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v7(v8,v9) {
    for (const v11 in "boolean") {
        let v14 = 0;
        do {
            const v17 = v6.length;
            // v17 = .integer
            let v18 = 0;
            const v19 = v18 + 1;
            // v19 = .primitive
            v18 = v19;
            let v22 = 0;
            const v23 = v22 + 1;
            // v23 = .primitive
            v22 = v23;
            let v26 = 0;
            do {
                const v27 = v26 + 1;
                // v27 = .primitive
                v26 = v27;
            } while (v26 < 3);
            const v28 = v14 + 1;
            // v28 = .primitive
            v14 = v28;
        } while (v14 < 8);
    }
}
const v30 = [1337];
// v30 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v31 = v30;
const v32 = v7(v31);
// v32 = .unknown
const v33 = {__proto__:v6,...v5,..."undefined",...v2};
// v33 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "includes", "startsWith", "values", "concat", "indexOf", "every", "substring", "repeat", "toLocaleString", "unshift", "flat", "padEnd", "flatMap", "forEach", "replace", "sort", "pop", "join", "charCodeAt", "codePointAt", "padStart", "keys", "reduce", "split", "some", "entries", "trim", "shift", "fill", "splice", "filter", "reduceRight", "map", "findIndex", "find", "reverse", "charAt", "lastIndexOf", "copyWithin", "slice", "push", "endsWith"])
const v34 = v7("undefined",v32);
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();
