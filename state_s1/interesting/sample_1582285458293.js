function main() {
const v1 = Symbol.toStringTag;
// v1 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
let v4 = 0;
const v7 = [1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v8(v9,v10) {
    let v13 = 0;
    while (v13 < 256) {
        const v14 = v13 % 256;
        // v14 = .number
        function v15(v16,v17) {
            let v21 = 0;
            const v24 = eval(1337);
            // v24 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
        }
        "function"[1] = v7;
        const v25 = v14 + 1;
        // v25 = .primitive
        v13 = v25;
    }
}
const v27 = [-4054699681];
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v28 = v27;
const v29 = v8(v28);
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
