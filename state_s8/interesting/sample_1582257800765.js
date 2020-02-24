function main() {
const v2 = {constructor:"species"};
// v2 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
function v4(v5,v6) {
    for (const v9 in "boolean") {
        let v12 = 0;
        do {
            let v15 = 0;
            do {
                const v16 = v15 + 1;
                // v16 = .primitive
                v15 = v16;
            } while (v15 < 7);
            const v17 = v12 + 1;
            // v17 = .primitive
            v12 = v17;
        } while (v12 < 8);
    }
    const v18 = "boolean".padEnd(1337,NaN);
    // v18 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
    const v19 = v18 === v18;
    // v19 = .boolean
    return v19;
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v22 = v21;
const v23 = v4(v22);
// v23 = .unknown
const v24 = v4(v2);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
