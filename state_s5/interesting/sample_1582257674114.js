function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            const v10 = [1337,1337,1337,1337];
            // v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            const v11 = v10 & "function";
            // v11 = .integer
            const v12 = {constructor:8,toString:v4,length:v1,e:v2,b:v11,d:"boolean"};
            // v12 = .object(ofGroup: Object, withProperties: ["constructor", "e", "__proto__", "length", "d", "toString", "b"])
            const v13 = {};
            // v13 = .object(ofGroup: Object, withProperties: ["__proto__"])
            const v14 = [v13,v13,v13];
            // v14 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            const v15 = v7 + 1;
            // v15 = .primitive
            v7 = v15;
        } while (v7 < 8);
    }
}
const v17 = [54067971];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v18 = v17;
const v19 = v0(v18);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
