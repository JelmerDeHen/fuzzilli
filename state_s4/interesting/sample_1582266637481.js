function main() {
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            let v12 = -1;
            do {
                const v13 = v12 + 1;
                // v13 = .primitive
                const v14 = v12 / 13.37;
                // v14 = .number
                v12 = v13;
                const v15 = "__proto__".slice(v14,v4);
                // v15 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
            } while (v12 < 7);
            const v16 = v9 + 1;
            // v16 = .primitive
            v9 = v16;
        } while (v9 < 8);
    }
}
const v18 = [-138567527];
// v18 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v19 = v18;
const v20 = v2(v19);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
