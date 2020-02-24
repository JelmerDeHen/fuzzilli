function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        const v7 = [13.37];
        // v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        let v8 = v7;
        v8[5] = 0;
        const v10 = v7.includes();
        // v10 = .boolean
        let v12 = 0;
        do {
            let v14 = 0;
            const v15 = v14 + 1;
            // v15 = .primitive
            const v18 = eval(1337);
            // v18 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
            const v19 = v12 + 1;
            // v19 = .primitive
            v12 = v19;
        } while (v12 < 8);
    }
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v22 = v21;
const v23 = v0(v22);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
