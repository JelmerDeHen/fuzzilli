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
        // v12 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        let v13 = v12;
        let v15 = undefined;
        const v18 = new Uint16Array(19873);
        // v18 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "byteOffset", "length", "byteLength", "__proto__", "constructor"], withMethods: ["join", "slice", "sort", "reduceRight", "reverse", "forEach", "values", "some", "findIndex", "find", "keys", "map", "filter", "fill", "set", "includes", "subarray", "reduce", "indexOf", "entries", "every", "copyWithin", "lastIndexOf"])
        const v21 = Symbol.isConcatSpreadable;
        // v21 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
        const v22 = v21.description;
        // v22 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
        const v23 = eval(v22);
        // v23 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
        const v24 = v10 + 1;
        // v24 = .primitive
        v10 = v24;
    } while (v10 <= 3);
    v6 = v7;
} while (v6 < -2);
}
%NeverOptimizeFunction(main);
main();
