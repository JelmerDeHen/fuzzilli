function main() {
function v1(v2,v3) {
    let v6 = 0;
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            const v15 = [1337,1337,1337];
            // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v18 = [1337,1337,1337];
            // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v19 = ~13.37;
            // v19 = .boolean
            let v21 = 0;
            const v22 = v18 + 1;
            // v22 = .primitive
            const v23 = typeof Array;
            // v23 = .string
            let v26 = 0;
            while (v26 < 8) {
                for (const v28 in "object") {
                }
                const v29 = v26 + 1;
                // v29 = .primitive
                v26 = v29;
            }
            let v31 = 0;
            const v32 = v31 + 1;
            // v32 = .primitive
            for (const v33 of v15) {
            }
            let v34 = 0;
            do {
                const v35 = v34 + 1;
                // v35 = .primitive
                v34 = v35;
            } while (v34 < 7);
            const v38 = typeof 0;
            // v38 = .string
            const v40 = v38 === "function";
            // v40 = .boolean
            const v42 = [1337,1337,1337,1337];
            // v42 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v43 = v42.toString();
            // v43 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
            const v45 = [1337,1337];
            // v45 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v49 = Reflect.set(v45,v43,1337,"number");
            // v49 = .boolean
            const v51 = {constructor:"symbol",length:9007199254740993};
            // v51 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"])
            const v54 = [13.37,13.37,13.37];
            // v54 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v55 = [];
            // v55 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v56 = v54[Function];
            // v56 = .unknown
            try {
                const v57 = v56(v55,v51);
                // v57 = .unknown
            } catch(v58) {
            }
            const v59 = v10 + 1;
            // v59 = .primitive
            v10 = v59;
        } while (v10 < 8);
    }
    const v60 = v6 + 1;
    // v60 = .primitive
}
const v62 = [1337];
// v62 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v63 = v62;
const v64 = v1(v63);
// v64 = .unknown
const v65 = v1();
// v65 = .unknown
let v68 = 0;
const v69 = eval(v65);
// v69 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();
