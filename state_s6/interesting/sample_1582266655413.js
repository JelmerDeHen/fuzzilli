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
            // v28 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
            const v29 = [13.37,13.37,13.37,13.37,13.37];
            // v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            const v30 = {valueOf:"undefined",c:v29,length:"undefined",d:3366735776,__proto__:v29};
            // v30 = .object(ofGroup: Object, withProperties: ["length", "c", "__proto__", "d", "valueOf"])
            const v32 = Math.cbrt(v30);
            // v32 = .number
        }
    }
    const v34 = [1337];
    // v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
