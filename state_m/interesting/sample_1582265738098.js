function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [1337,v4];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {length:v6,constructor:Math,toString:v6};
// v8 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__", "toString"])
const v9 = typeof v8;
// v9 = .string
const v11 = v9 === "function";
// v11 = .boolean
const v13 = {b:1337,__proto__:v7,length:v7,toString:v8,c:-256,valueOf:13.37};
// v13 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "b", "c", "toString", "__proto__"])
let v14 = -256;
function v15(v16,v17) {
    for (const v19 in "boolean") {
        let v21 = v19;
        for (const v22 in "075ZS9YckJ") {
            const v23 = v22 || -256;
            // v23 = .boolean
        }
        const v26 = [13.37];
        // v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        let v27 = v26;
        v27[5] = 0;
        const v29 = v26.includes();
        // v29 = .boolean
        let v31 = 0;
        do {
            let v33 = 0;
            const v34 = v33 + 1;
            // v34 = .primitive
            const v37 = eval(1337);
            // v37 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
            const v38 = v31 + 1;
            // v38 = .primitive
            v31 = v38;
        } while (v31 < 8);
    }
}
const v40 = [1337];
// v40 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v41 = v40;
const v42 = v15(v41);
// v42 = .unknown
}
%NeverOptimizeFunction(main);
main();
