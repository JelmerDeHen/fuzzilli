function main() {
let v2 = 0;
do {
    let v5 = 0;
    do {
        const v6 = v5 + 1;
        // v6 = .primitive
        v5 = v6;
    } while (v5 < 9);
    const v7 = v2 + 1;
    // v7 = .primitive
    v2 = v7;
} while (v2 < 7);
const v11 = {};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v12 = v11;
const v13 = {...13.37,...v11,..."symbol",...1337,...v12};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"], withMethods: ["substring", "charAt", "charCodeAt", "startsWith", "includes", "split", "lastIndexOf", "padStart", "indexOf", "concat", "slice", "codePointAt", "repeat", "replace", "endsWith", "padEnd", "trim"])
const v16 = Array(2815038421);
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
}
%NeverOptimizeFunction(main);
main();
