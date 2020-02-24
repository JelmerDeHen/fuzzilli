function main() {
function v0(v1,v2) {
    let v6 = 0;
    do {
        for (const v8 in "boolean") {
            let v11 = 0;
            do {
                const v12 = v11 + 1;
                // v12 = .primitive
                v11 = v12;
            } while (v11 < 8);
        }
        const v13 = v6 + 1;
        // v13 = .primitive
        v6 = v13;
    } while (v6 < 8);
    const v16 = null == Reflect;
    // v16 = .boolean
    const v19 = eval(1337);
    // v19 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v22 = v21;
const v23 = v0(v22);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
