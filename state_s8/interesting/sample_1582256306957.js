function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            try {
                function v8(v9,v10) {
                    let v13 = 0;
                    const v14 = v13 + 1;
                    // v14 = .primitive
                    v13 = v14;
                    return v8;
                }
                const v20 = [1337];
                // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
                let v21 = v20;
                const v22 = v8(v21);
                // v22 = .unknown
                const v25 = DataView(28997);
                // v25 = .unknown
            } catch(v26) {
            }
            const v27 = v7 + 1;
            // v27 = .primitive
            const v30 = eval(1337);
            // v30 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
            v7 = v27;
        } while (v7 < 8);
    }
}
const v32 = [1337];
// v32 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v33 = v32;
const v34 = v0(v33);
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();
