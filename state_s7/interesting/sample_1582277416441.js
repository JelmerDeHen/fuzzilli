function main() {
let v2 = 0;
do {
    const v3 = v2 + 1;
    // v3 = .primitive
    function v4(v5,v6) {
        for (const v8 in "unscopable") {
            const v14 = eval(1337);
            // v14 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
            const v15 = [13.37,13.37,13.37,13.37,13.37];
            // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            const v16 = {valueOf:"undefined",c:v15,length:"undefined",d:3366735776,__proto__:v15};
            // v16 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "valueOf", "d", "c"])
            const v18 = Math.abs(v16);
            // v18 = .number
        }
    }
    const v20 = [1337];
    // v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v21 = v20;
    const v22 = v4(v21);
    // v22 = .unknown
    v2 = v3;
} while (v2 < 8);
}
%NeverOptimizeFunction(main);
main();
