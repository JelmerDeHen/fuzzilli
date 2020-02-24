function main() {
const v2 = String.fromCharCode(String);
// v2 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
const v7 = [13.37,13.37,13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v9 = [1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v10 = [v9];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v11 = {b:v7,c:v7,d:v7,__proto__:v10,valueOf:13.37};
// v11 = .object(ofGroup: Object, withProperties: ["b", "d", "valueOf", "c", "__proto__"])
function v13(v14,v15) {
    for (const v17 in "boolean") {
        let v20 = 0;
        const v23 = [13.37,13.37,13.37,13.37];
        // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        const v27 = [13.37,13.37,13.37,13.37];
        // v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        const v28 = [v27,-1970853828,DataView];
        // v28 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        for (const v30 in v23) {
            const v31 = Object.preventExtensions(v28);
            // v31 = .object()
        }
        do {
            let v33 = -1155643050;
            while (v33 < 9) {
                const v34 = v33 % 9;
                // v34 = .number
                const v35 = v15 + 1;
                // v35 = .primitive
                const v36 = {valueOf:v34,d:9};
                // v36 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "valueOf"])
                v2.constructor = v14;
                const v38 = {get:v13};
                // v38 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
                const v40 = Object.defineProperty(v11,"toString",v38);
                // v40 = .undefined
                const v41 = v34 + 1;
                // v41 = .primitive
                v33 = v41;
            }
            const v42 = v20 + 1;
            // v42 = .primitive
            v20 = v42;
        } while (v20 < 8);
    }
}
const v44 = [1337];
// v44 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v45 = v44;
const v46 = v13(v45);
// v46 = .unknown
}
%NeverOptimizeFunction(main);
main();
