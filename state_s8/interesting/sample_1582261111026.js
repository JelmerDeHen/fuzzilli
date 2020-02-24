function main() {
const v8 = eval("undefined");
// v8 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
let v9 = 0;
do {
    const v10 = v9 + 1;
    // v10 = .primitive
    const v12 = [1337];
    // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v13 = v12;
    let v15 = undefined;
    function v19(v20,v21) {
        const v24 = [13.37,13.37,13.37];
        // v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v26 = [1337,1337,1337,1337];
        // v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v27 = [1337,1337,v26];
        // v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v28 = {length:"eTm8XK*Max",d:13.37,e:"eTm8XK*Max",a:v26,constructor:"eTm8XK*Max"};
        // v28 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "d", "constructor", "e", "a"])
        const v29 = {__proto__:v26,toString:"eTm8XK*Max",e:v28,b:v27,a:v27,constructor:13.37};
        // v29 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "constructor", "a", "toString", "e"])
        for (let v33 = 0; v33 < 100; v33++) {
            function v34(v35,v36) {
            }
        }
        const v38 = Symbol.replace;
        // v38 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        const v39 = v24[v38];
        // v39 = .unknown
        const v40 = v39 === v29;
        // v40 = .boolean
    }
    const v42 = [1337];
    // v42 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v43 = v42;
    const v44 = v19(v43);
    // v44 = .unknown
    v9 = v10;
} while (v9 < 7);
}
%NeverOptimizeFunction(main);
main();
