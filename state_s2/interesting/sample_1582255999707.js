function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [v6,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {__proto__:13.37,a:v7,constructor:"object",b:Promise,toString:v7,length:v7};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "a", "constructor", "b", "length"])
const v9 = {__proto__:v7,a:v6,valueOf:13.37,length:v6,toString:Promise};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "toString", "length", "a"])
let v10 = 13.37;
for (let v16 = 0; v16 < 100; v16++) {
    let v18 = undefined;
    function v21(v22,v23) {
        let v65 = 0;
        const v66 = v65 + 1;
        // v66 = .primitive
        v65 = v66;
        const v74 = 1337 == 13.37;
        // v74 = .boolean
        let v96 = 0;
        const v97 = v96 + 1;
        // v97 = .primitive
        v96 = v97;
        let v100 = 0;
        const v101 = v100 + 1;
        // v101 = .primitive
        v100 = v101;
    }
    const v107 = [1337];
    // v107 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v108 = v107;
    const v109 = v21(v108);
    // v109 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
