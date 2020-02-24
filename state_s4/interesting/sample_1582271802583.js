function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            const v11 = Symbol.isConcatSpreadable;
            // v11 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            const v12 = v11.description;
            // v12 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
            const v13 = eval(v12);
            // v13 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
            const v14 = Math.cos(Math);
            // v14 = .number
            const v15 = v7 + 1;
            // v15 = .primitive
            v7 = v15;
        } while (v7 < 8);
    }
}
const v18 = [1337];
// v18 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v19 = v18;
const v20 = v0(v19);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
