function main() {
function v4(v5,v6) {
    const v9 = [1337,1337,1337,1337];
    // v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v10 = v9.toString();
    // v10 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
    let v12 = 0;
    for (const v13 in "boolean") {
        let v16 = 0;
        do {
            try {
                let v19 = 0;
                do {
                    const v20 = v19 + 1;
                    // v20 = .primitive
                    v19 = v20;
                } while (v19 < 7);
            } catch(v21) {
                let v23 = 0;
                try {
                } catch(v26) {
                    const v27 = 0 instanceof 1337;
                    // v27 = .boolean
                    const v28 = v21.sqrt(0);
                    // v28 = .unknown
                    const v29 = 13.37 == "object";
                    // v29 = .boolean
                    let v30 = v21;
                }
            }
            const v31 = v16 + 1;
            // v31 = .primitive
            v16 = v31;
        } while (v16 < 8);
    }
    const v32 = v12 + 1;
    // v32 = .primitive
}
const v34 = [1337];
// v34 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v35 = v34;
const v36 = v4(v35);
// v36 = .unknown
}
%NeverOptimizeFunction(main);
main();
