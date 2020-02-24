function main() {
const v1 = Symbol.toStringTag;
// v1 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
let v4 = 0;
const v7 = [1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v8(v9,v10) {
    let v13 = 0;
    while (v13 < 256) {
        const v14 = v13 % 256;
        // v14 = .number
        function v15(v16,v17) {
            let v21 = 0;
            const v24 = eval(1337);
            // v24 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
        }
        "function"[1] = v7;
        const v25 = v14 + 1;
        // v25 = .primitive
        v13 = v25;
    }
}
const v27 = [-4054699681];
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v28 = v27;
const v29 = v8(v28);
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
