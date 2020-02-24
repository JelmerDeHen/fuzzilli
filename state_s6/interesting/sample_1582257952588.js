function main() {
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v11 = 0;
        const v13 = v11 + 1;
        // v13 = .primitive
        v11 = v13;
        let v14 = 0;
        do {
            let v21 = 0;
            do {
                const v22 = v21 + 1;
                // v22 = .primitive
                v21 = v22;
            } while (v21 < 7);
            const v32 = v14 + 1;
            // v32 = .primitive
            v14 = v32;
        } while (v14 < 8);
        const v33 = String.fromCharCode(3971043784);
        // v33 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    }
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v36 = v35;
const v37 = v2(v36);
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
