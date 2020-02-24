function main() {
try {
    let v5 = 0;
    const v6 = v5 + 1;
    // v6 = .primitive
    v5 = v6;
    const v7 = [1337,1337,1337,1337,1337];
    // v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    function v8(v9,v10) {
        const v13 = [1337];
        // v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        let v14 = v13;
        let v16 = undefined;
        function v19(v20,v21) {
            const v23 = {__proto__:-3582591857};
            // v23 = .object(ofGroup: Object, withProperties: ["__proto__"])
            with (v23) {
                const v26 = [-2.220446049250313e-16];
                // v26 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
                __proto__[0] = v19;
            }
        }
        const v28 = v19(1024,4.0);
        // v28 = .unknown
        const v34 = [1.7976931348623157e+308];
        // v34 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v36 = [255,255,255];
        // v36 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v37 = {a:255,toString:isFinite,c:v34,__proto__:v36,valueOf:"object",constructor:"gM8oAednYn"};
        // v37 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "constructor", "__proto__", "c"], withMethods: ["toString"])
        const v38 = {toString:v34,valueOf:v37,d:255,constructor:536870912};
        // v38 = .object(ofGroup: Object, withProperties: ["valueOf", "toString", "d", "constructor", "__proto__"])
        const v39 = RegExp.apply(v38,RegExp);
        // v39 = .unknown
        let v42 = 0;
    }
    const v43 = v7.forEach(v8,"eeeRbEqfAO");
    // v43 = .undefined
} catch(v44) {
}
}
%NeverOptimizeFunction(main);
main();
