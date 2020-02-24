function main() {
const v1 = Symbol.toStringTag;
// v1 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
let v4 = 0;
const v7 = [1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v8(v9,v10) {
    let v13 = 0;
    while (v13 < 256) {
        const v14 = v13 % 256;
        // v14 = .number
        function v15(v16,v17) {
            let v21 = 0;
            const v24 = eval(1337);
            // v24 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
        }
        "function"[1] = v7;
        const v25 = v14 + 1;
        // v25 = .primitive
        v13 = v25;
    }
}
const v27 = [-4054699681];
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v28 = v27;
const v29 = v8(v28);
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
