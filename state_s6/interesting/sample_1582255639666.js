function main() {
const v2 = {b:2147483647};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            const v13 = [1337,1337,1337,1337];
            // v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            v2.length = 1337;
            const v14 = v13 / "function";
            // v14 = .number
            const v15 = {constructor:8,toString:v7,length:v4,e:v5,b:v14,d:"boolean"};
            // v15 = .object(ofGroup: Object, withProperties: ["b", "length", "constructor", "d", "__proto__", "e", "toString"])
            const v16 = {};
            // v16 = .object(ofGroup: Object, withProperties: ["__proto__"])
            const v17 = [v16,v16,v16];
            // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            const v18 = v10 + 1;
            // v18 = .primitive
            v10 = v18;
        } while (v10 < 8);
    }
}
const v20 = [54067971];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v21 = v20;
const v22 = v3(v21);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
