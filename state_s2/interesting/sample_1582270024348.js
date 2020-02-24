function main() {
let v1 = 1337;
let v3 = undefined;
let v6 = -128;
do {
    const v7 = v6 + 1;
    // v7 = .primitive
    let v10 = 0;
    do {
        const v12 = [1337];
        // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        let v13 = v12;
        let v15 = undefined;
        const v18 = new Uint16Array(19873);
        // v18 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "byteOffset", "length"], withMethods: ["indexOf", "set", "map", "reduce", "join", "values", "subarray", "find", "copyWithin", "sort", "filter", "lastIndexOf", "reduceRight", "includes", "some", "every", "forEach", "findIndex", "reverse", "slice", "fill", "keys", "entries"])
        const v21 = Symbol.isConcatSpreadable;
        // v21 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        const v22 = v21.description;
        // v22 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
        const v23 = eval(v22);
        // v23 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
        const v24 = v10 + 1;
        // v24 = .primitive
        v10 = v24;
    } while (v10 <= 3);
    v6 = v7;
} while (v6 < -2);
}
%NeverOptimizeFunction(main);
main();
