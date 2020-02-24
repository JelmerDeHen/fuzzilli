function main() {
const v2 = {constructor:"species"};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
function v4(v5,v6) {
    for (const v12 in "boolean") {
        let v15 = 0;
        do {
            let v18 = 0;
            do {
                const v19 = v18 + 1;
                // v19 = .primitive
                v18 = v19;
            } while (v18 < 7);
            let v22 = 0;
            const v26 = v15 + 1;
            // v26 = .primitive
            v15 = v26;
        } while (v15 < 8);
    }
    const v27 = "boolean".padEnd(1337,NaN);
    // v27 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
    const v28 = v27 === v27;
    // v28 = .boolean
}
const v31 = [1337];
// v31 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v32 = v31;
const v33 = v4(v32);
// v33 = .unknown
const v34 = v4(v2);
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();
