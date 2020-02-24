function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v10 = 0;
            do {
                const v12 = Symbol.search;
                // v12 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
                const v13 = v10 + 1;
                // v13 = .primitive
                v10 = v13;
            } while (v10 < 7);
            const v14 = v7 + 1;
            // v14 = .primitive
            const v17 = eval(1337);
            // v17 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
            v7 = v14;
        } while (v7 < 8);
    }
}
const v19 = [1337];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v20 = v19;
const v21 = v0(v20);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
