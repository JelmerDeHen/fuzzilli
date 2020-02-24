function main() {
const v1 = [13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v2 = v1;
let v4 = undefined;
for (const v6 in "boolean") {
    let v13 = 0;
    let v16 = 0;
    do {
        let v18 = undefined;
        function v20(v21,v22,v23,v24,...v25) {
            const v27 = [13.37,13.37,13.37,13.37];
            // v27 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            const v29 = [1337,v27];
            // v29 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            const v30 = {b:v29,a:v29,__proto__:v29};
            // v30 = .object(ofGroup: Object, withProperties: ["a", "b", "__proto__"])
            function v31(v32,v33) {
                for (const v34 of v30) {
                }
            }
            const v36 = [1337];
            // v36 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            let v37 = v36;
            const v38 = v31(v37);
            // v38 = .unknown
        }
        const v39 = v20(1337);
        // v39 = .unknown
        const v41 = v16 + 1;
        // v41 = .primitive
        v16 = v41;
    } while (v16 < 8);
}
}
%NeverOptimizeFunction(main);
main();
