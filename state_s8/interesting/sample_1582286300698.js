function main() {
const v4 = {c:1337,b:-3170815044,d:1337,__proto__:1337};
// v4 = .object(ofGroup: Object, withProperties: ["b", "d", "c", "__proto__"])
const v5 = {e:"__proto__",a:1337,__proto__:Math,constructor:1337,c:v4,b:Math,toString:"__proto__"};
// v5 = .object(ofGroup: Object, withProperties: ["b", "constructor", "__proto__", "c", "toString", "a", "e"])
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
            // v21 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
            const v22 = v13 + 1;
            // v22 = .primitive
            v13 = v22;
        } while (v13 < 8);
    }
}
const v24 = [1337];
// v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
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
