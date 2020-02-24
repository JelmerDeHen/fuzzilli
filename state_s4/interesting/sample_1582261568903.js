function main() {
function v0(v1,v2) {
    let v4 = -1612626328;
    let v7 = 0;
    do {
        const v10 = [1337,1337,1337,1337];
        // v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v11 = v10.toString();
        // v11 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
        for (const v12 in v11) {
        }
        const v13 = 8 % v4;
        // v13 = .number
        const v14 = v13 / 7;
        // v14 = .number
        const v15 = v7 + 1;
        // v15 = .primitive
        v7 = v15;
    } while (v7 < 8);
}
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v18 = v17;
const v19 = v0(v18);
// v19 = .unknown
const v20 = v0();
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
