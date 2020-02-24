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
        // v33 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
    }
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v36 = v35;
const v37 = v2(v36);
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
