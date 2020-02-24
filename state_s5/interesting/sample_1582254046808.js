function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [v6,v6,v6];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {d:"undefined",e:v4,__proto__:v6,c:v6,toString:v7};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "toString", "e", "d"])
const v9 = {b:13.37,d:1607264097,e:1607264097,constructor:v6,valueOf:WeakSet};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "valueOf", "b", "d", "constructor"])
let v10 = v8;
const v21 = {__proto__:538501.8080079935};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v24 = 0;
do {
    const v29 = [13.37,13.37];
    // v29 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v31 = [1337,1337,1337,1337];
    // v31 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v32 = "__proto__".constructor;
    // v32 = .function()
    for (const v33 in "__proto__") {
        const v34 = ~v29;
        // v34 = .boolean
    }
    const v35 = v31 + 1;
    // v35 = .primitive
    const v36 = v31.toString();
    // v36 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
    "__proto__"[1] = 1337;
    const v37 = [13.37,v29];
    // v37 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v38 = {c:13.37};
    // v38 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
    const v39 = {d:gc,valueOf:v31};
    // v39 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"], withMethods: ["d"])
    let v40 = 1337;
    const v42 = v24 + 1;
    // v42 = .primitive
    v24 = v42;
} while (v24 <= 3);
const v44 = {a:0,toString:3,...gc,..."undefined"};
// v44 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "a", "toString", "length"], withMethods: ["trim", "padStart", "slice", "indexOf", "charAt", "substring", "charCodeAt", "repeat", "endsWith", "codePointAt", "startsWith", "lastIndexOf", "replace", "concat", "split", "padEnd", "includes"])
const v45 = gc();
// v45 = .undefined
}
%NeverOptimizeFunction(main);
main();
