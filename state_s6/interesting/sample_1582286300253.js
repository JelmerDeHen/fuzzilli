function main() {
const v4 = {c:1337,b:-3170815044,d:1337,__proto__:1337};
// v4 = .object(ofGroup: Object, withProperties: ["b", "c", "d", "__proto__"])
const v5 = {e:"__proto__",a:1337,__proto__:Math,constructor:1337,c:v4,b:Math,toString:"__proto__"};
// v5 = .object(ofGroup: Object, withProperties: ["e", "constructor", "c", "__proto__", "a", "b", "toString"])
function v6(v7,v8) {
    for (const v10 in "boolean") {
        let v13 = 0;
        do {
            const v17 = Math.log10(13.37);
            // v17 = .number
            let v18 = 0;
            const v19 = v18 + 1;
            // v19 = .primitive
            const v21 = eval();
            // v21 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
            const v22 = v13 + 1;
            // v22 = .primitive
            v13 = v22;
        } while (v13 < 8);
    }
}
const v24 = [1337];
// v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v25 = v24;
const v26 = v6(v25);
// v26 = .unknown
let v29 = 0;
const v30 = v29 + 1;
// v30 = .primitive
v29 = v30;
}
%NeverOptimizeFunction(main);
main();
