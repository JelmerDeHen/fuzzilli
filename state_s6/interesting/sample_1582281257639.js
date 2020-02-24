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
            // v16 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
        }
    }
}
const v18 = [1337];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v19 = v18;
const v20 = v0(v19);
// v20 = .unknown
const v21 = v0();
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
