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
        // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        let v13 = v12;
        let v15 = undefined;
        const v18 = new Uint16Array(19873);
        // v18 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "byteOffset", "length", "constructor", "buffer", "byteLength"], withMethods: ["entries", "join", "lastIndexOf", "forEach", "filter", "slice", "reduce", "reverse", "findIndex", "keys", "fill", "map", "every", "set", "reduceRight", "includes", "sort", "find", "subarray", "indexOf", "values", "some", "copyWithin"])
        const v21 = Symbol.isConcatSpreadable;
        // v21 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        const v22 = v21.description;
        // v22 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
        const v23 = eval(v22);
        // v23 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
        const v24 = v10 + 1;
        // v24 = .primitive
        v10 = v24;
    } while (v10 <= 3);
    v6 = v7;
} while (v6 < -2);
}
%NeverOptimizeFunction(main);
main();
