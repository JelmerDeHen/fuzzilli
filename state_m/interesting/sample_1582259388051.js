function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v10 = 0;
            do {
                const v12 = Symbol.search;
                // v12 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
                const v13 = v10 + 1;
                // v13 = .primitive
                v10 = v13;
            } while (v10 < 7);
            const v14 = v7 + 1;
            // v14 = .primitive
            const v17 = eval(1337);
            // v17 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
            v7 = v14;
        } while (v7 < 8);
    }
}
const v19 = [1337];
// v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v20 = v19;
const v21 = v0(v20);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
