function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            const v11 = Symbol.isConcatSpreadable;
            // v11 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            const v12 = v11.description;
            // v12 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
            const v13 = eval(v12);
            // v13 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
            const v14 = Math.cos(Math);
            // v14 = .number
            const v15 = v7 + 1;
            // v15 = .primitive
            v7 = v15;
        } while (v7 < 8);
    }
}
const v18 = [1337];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v19 = v18;
const v20 = v0(v19);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
