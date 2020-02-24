function main() {
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
const v8 = [13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v12 = typeof 1;
// v12 = .string
const v14 = v12 === "boolean";
// v14 = .boolean
const v17 = [1337,1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v18 = [v8,13.37,v17,-4294967296];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v19 = {__proto__:v8,valueOf:"number",a:Object,d:v18};
// v19 = .object(ofGroup: Object, withProperties: ["valueOf", "d", "__proto__"], withMethods: ["a"])
function v20(v21,v22) {
    for (const v24 in "boolean") {
        let v27 = 0;
        try {
            function v28(v29,v30) {
                const v33 = v22();
                // v33 = .unknown
                const v34 = v28 + 1;
                // v34 = .primitive
                const v35 = v24 | v19;
                // v35 = .integer
                for (let v44 = 0; v44 < 6; v44++) {
                    v21[-1522554117] = v8;
                }
                let v45 = v27;
            }
            const v47 = [1337];
            // v47 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            let v48 = v47;
            const v49 = v28(v48);
            // v49 = .unknown
        } catch(v52) {
        }
        const v53 = v27 + 1;
        // v53 = .primitive
        const v56 = eval(1337);
        // v56 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
        v27 = v53;
    }
}
const v58 = [1337];
// v58 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v59 = v58;
const v60 = v20(v59);
// v60 = .unknown
}
%NeverOptimizeFunction(main);
main();
