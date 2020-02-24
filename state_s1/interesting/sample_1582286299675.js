function main() {
const v4 = {c:1337,b:-3170815044,d:1337,__proto__:1337};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "c", "b"])
const v5 = {e:"__proto__",a:1337,__proto__:Math,constructor:1337,c:v4,b:Math,toString:"__proto__"};
// v5 = .object(ofGroup: Object, withProperties: ["c", "toString", "constructor", "e", "b", "a", "__proto__"])
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
            // v21 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
            const v22 = v13 + 1;
            // v22 = .primitive
            v13 = v22;
        } while (v13 < 8);
    }
}
const v24 = [1337];
// v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
