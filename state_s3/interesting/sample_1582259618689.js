function main() {
let v2 = 0;
do {
    let v5 = 0;
    function v7(v8,v9) {
        let v13 = 0;
        try {
            const v17 = [13.37,13.37,-4294967297,13.37];
            // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            const v18 = {length:v17,d:Uint8Array};
            // v18 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "d"])
            let v19 = v8;
            let v21 = undefined;
            let v24 = 0;
            let v27 = 0;
            const v28 = v27 % 9;
            // v28 = .number
            const v29 = v28 + 1;
            // v29 = .primitive
            v27 = v29;
            const v30 = v24 + 1;
            // v30 = .primitive
            v24 = v30;
            const v32 = {get:v21,set:v7};
            // v32 = .object(ofGroup: Object, withProperties: ["__proto__", "get"], withMethods: ["set"])
            const v34 = Object.defineProperty(Math,"d",v32);
            // v34 = .undefined
        } catch(v35) {
        }
        const v36 = v13 + 1;
        // v36 = .primitive
        v13 = v36;
    }
    const v38 = [1337];
    // v38 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v39 = v38;
    const v40 = v7(v39);
    // v40 = .unknown
    const v41 = v5 + 1;
    // v41 = .primitive
    v5 = v41;
    const v42 = v2 + 1;
    // v42 = .primitive
    v2 = v42;
} while (v2 < 7);
}
%NeverOptimizeFunction(main);
main();
