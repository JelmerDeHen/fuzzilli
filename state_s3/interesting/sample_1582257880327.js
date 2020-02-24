function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = {__proto__:JSON,c:v2};
// v3 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
for (let v7 = 0; v7 < 100; v7++) {
    function v8(v9,v10) {
        let v19 = 0;
        const v20 = v19 + 1;
        // v20 = .primitive
        v19 = v20;
        const v24 = [13.37,13.37,13.37,13.37,13.37];
        // v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        let v26 = v24;
        const v28 = Object();
        // v28 = .object()
        const v29 = 1337 == 13.37;
        // v29 = .boolean
        function v31(v32,v33,v34,v35,v36) {
            delete v26[10];
        }
        const v37 = v3 === v26;
        // v37 = .boolean
        v28[v37] = 4294967297;
        let v40 = 0;
        const v41 = v40 + 1;
        // v41 = .primitive
        v40 = v41;
        let v44 = 0;
        const v45 = v44 + 1;
        // v45 = .primitive
        v44 = v45;
    }
    const v47 = [1337];
    // v47 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v48 = v47;
    const v49 = v8(v48);
    // v49 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
