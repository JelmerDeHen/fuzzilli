function main() {
let v3 = undefined;
for (const v5 in "boolean") {
    let v8 = 0;
    do {
        const v9 = v8 + 1;
        // v9 = .primitive
        let v11 = 1337;
        function v13(v14,v15) {
            let v21 = 0;
            let v23 = v11;
            const v26 = {__proto__:null,b:-2054192748};
            // v26 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
            const v27 = v21 + 1;
            // v27 = .primitive
            v21 = v27;
            for (const v29 in "object") {
            }
        }
        const v30 = [1337];
        // v30 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        let v31 = v30;
        const v32 = v13(v31);
        // v32 = .unknown
        v8 = v9;
    } while (v8 < 8);
}
}
%NeverOptimizeFunction(main);
main();
