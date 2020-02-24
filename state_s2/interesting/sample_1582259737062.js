function main() {
let v2 = 13.37;
const v5 = [13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [13.37,-828296917];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
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
// v30 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v31 = v30;
const v32 = v7(v31);
// v32 = .unknown
const v33 = {__proto__:v6,...v5,..."undefined",...v2};
// v33 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "keys", "flatMap", "padEnd", "values", "shift", "join", "split", "slice", "reduceRight", "map", "substring", "charCodeAt", "charAt", "lastIndexOf", "flat", "every", "endsWith", "replace", "trim", "pop", "sort", "find", "includes", "fill", "splice", "push", "filter", "concat", "repeat", "padStart", "toString", "reverse", "indexOf", "unshift", "copyWithin", "some", "forEach", "codePointAt", "entries", "toLocaleString", "findIndex", "reduce"])
const v34 = v7("undefined",v32);
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();
