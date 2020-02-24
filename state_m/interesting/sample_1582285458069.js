function main() {
const v1 = Symbol.toStringTag;
// v1 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
let v4 = 0;
const v7 = [1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v8(v9,v10) {
    let v13 = 0;
    while (v13 < 256) {
        const v14 = v13 % 256;
        // v14 = .number
        function v15(v16,v17) {
            let v21 = 0;
            const v24 = eval(1337);
            // v24 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
        }
        "function"[1] = v7;
        const v25 = v14 + 1;
        // v25 = .primitive
        v13 = v25;
    }
}
const v27 = [-4054699681];
// v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v28 = v27;
const v29 = v8(v28);
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
