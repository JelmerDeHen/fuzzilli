function main() {
const v2 = {b:2147483647};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            const v13 = [1337,1337,1337,1337];
            // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
            v2.length = 1337;
            const v14 = v13 / "function";
            // v14 = .number
            const v15 = {constructor:8,toString:v7,length:v4,e:v5,b:v14,d:"boolean"};
            // v15 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "length", "constructor", "b", "toString", "d"])
            const v16 = {};
            // v16 = .object(ofGroup: Object, withProperties: ["__proto__"])
            const v17 = [v16,v16,v16];
            // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
            const v18 = v10 + 1;
            // v18 = .primitive
            v10 = v18;
        } while (v10 < 8);
    }
}
const v20 = [54067971];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v21 = v20;
const v22 = v3(v21);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
