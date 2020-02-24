function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v2 = v1;
let v4 = undefined;
for (const v6 in "boolean") {
    let v9 = 0;
    do {
        let v12 = 0;
        const v15 = [1337];
        // v15 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        let v16 = v15;
        let v18 = undefined;
        let v25 = 0;
        const v26 = "a".padEnd(v25,undefined);
        // v26 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
        function v27(v28,v29,v30,v31) {
            v4 = v26;
        }
        let v34 = 0;
        const v35 = v34 + 1;
        // v35 = .primitive
        v34 = v35;
        const v39 = "boolean"[4294967296];
        // v39 = .unknown
        let v41 = 0;
        const v42 = v25 + 1;
        // v42 = .primitive
        v25 = v42;
        v4 = "a";
        const v43 = v9 + 1;
        // v43 = .primitive
        v9 = v43;
    } while (v9 < 8);
}
}
%NeverOptimizeFunction(main);
main();
