function main() {
let v4 = 0;
do {
    const v5 = v4 + 1;
    // v5 = .primitive
    function v6(v7,v8) {
        for (const v10 in "boolean") {
            const v16 = eval(1337);
            // v16 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
            const v17 = [13.37,13.37,13.37,13.37,13.37];
            // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            const v18 = {valueOf:"undefined",c:v17,length:"undefined",d:3366735776,__proto__:v17};
            // v18 = .object(ofGroup: Object, withProperties: ["d", "length", "__proto__", "c", "valueOf"])
            const v20 = Math.tan(v18);
            // v20 = .number
        }
    }
    const v22 = [1337];
    // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v23 = v22;
    const v24 = v6(v23);
    // v24 = .unknown
    v4 = v5;
} while (v4 < 7);
const v26 = String(13.37);
// v26 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
let v29 = 0;
const v30 = v29 + 1;
// v30 = .primitive
v29 = v30;
}
%NeverOptimizeFunction(main);
main();
