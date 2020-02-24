function main() {
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            let v12 = 0;
            const v13 = v12 + 1;
            // v13 = .primitive
            v12 = v13;
            const v16 = eval(1337);
            // v16 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
            const v20 = v9 + 1;
            // v20 = .primitive
            v9 = v20;
        } while (v9 < 8);
    }
    const v22 = "object".constructor;
    // v22 = .function()
    Promise.toString = v22;
}
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v26 = v25;
const v27 = v2(v26);
// v27 = .unknown
const v28 = v2(1024,4.0);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
