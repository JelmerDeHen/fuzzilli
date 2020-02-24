function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        for (let v8 = 0; v8 < 3; v8++) {
            let v10 = -3888010622;
            const v11 = v10 + 1;
            // v11 = .primitive
            const v13 = Math.ceil(v11);
            // v13 = .number
            const v16 = eval(1337);
            // v16 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
        }
    }
}
const v18 = [1337];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v19 = v18;
const v20 = v0(v19);
// v20 = .unknown
const v21 = v0();
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
