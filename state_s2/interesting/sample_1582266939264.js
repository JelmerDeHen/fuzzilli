function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v3 = 13.37;
function v4(v5,v6) {
    for (const v8 in "boolean") {
        let v11 = 0;
        do {
            const v14 = eval(1337);
            // v14 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
            const v15 = v11 + 1;
            // v15 = .primitive
            v11 = v15;
            const v17 = Number.isNaN(v3);
            // v17 = .boolean
            let v20 = 0;
            const v21 = v20 + 1;
            // v21 = .primitive
            v20 = v21;
        } while (v11 < 8);
    }
}
let v22 = v2;
const v23 = v4(v22);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
