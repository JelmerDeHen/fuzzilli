function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
const v10 = {b:2147483647};
// v10 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v11 = {__proto__:Uint8Array,a:v10,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "valueOf", "constructor", "d", "b"])
function v12(v13,v14) {
    for (const v16 in "boolean") {
        let v19 = 0;
        do {
            const v24 = [1337,1337,1337,1337];
            // v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            const v25 = v11.constructor;
            // v25 = .unknown
            "boolean"[-3767568842] = 1337;
            v4.toString = v13;
            const v26 = {a:-4294967297,valueOf:"function",__proto__:1337,length:v24,d:13.37};
            // v26 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "d", "a", "length"])
            const v27 = v19 + 1;
            // v27 = .primitive
            v19 = v27;
        } while (v19 < 8);
    }
}
const v29 = [54067971];
// v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v30 = v29;
const v31 = v12(v30);
// v31 = .unknown
}
%NeverOptimizeFunction(main);
main();
