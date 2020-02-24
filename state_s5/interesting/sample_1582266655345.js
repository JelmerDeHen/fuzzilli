function main() {
let v2 = 13.37;
let v4 = undefined;
for (const v6 in "boolean") {
    let v9 = 0;
    let v12 = 0;
    const v13 = v12 + 1;
    // v13 = .primitive
    v12 = v13;
    let v16 = 0;
    const v17 = v16 + 1;
    // v17 = .primitive
    function v18(v19,v20) {
        for (const v22 in "boolean") {
            const v28 = eval(1337);
            // v28 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
            const v29 = [13.37,13.37,13.37,13.37,13.37];
            // v29 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            const v30 = {valueOf:"undefined",c:v29,length:"undefined",d:3366735776,__proto__:v29};
            // v30 = .object(ofGroup: Object, withProperties: ["d", "length", "__proto__", "c", "valueOf"])
            const v32 = Math.cbrt(v30);
            // v32 = .number
        }
    }
    const v34 = [1337];
    // v34 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    let v35 = v34;
    const v36 = v18(v35);
    // v36 = .unknown
    v16 = v17;
    const v37 = v9 + 1;
    // v37 = .primitive
    v9 = v37;
}
}
%NeverOptimizeFunction(main);
main();
