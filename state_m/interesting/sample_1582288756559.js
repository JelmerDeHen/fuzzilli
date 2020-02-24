function main() {
try {
    let v5 = 0;
    const v6 = v5 + 1;
    // v6 = .primitive
    v5 = v6;
    const v7 = [1337,1337,1337,1337,1337];
    // v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    function v8(v9,v10) {
        const v13 = [1337];
        // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        let v14 = v13;
        let v16 = undefined;
        function v19(v20,v21) {
            const v23 = {__proto__:-3582591857};
            // v23 = .object(ofGroup: Object, withProperties: ["__proto__"])
            with (v23) {
                const v26 = [-2.220446049250313e-16];
                // v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
                __proto__[0] = v19;
            }
        }
        const v28 = v19(1024,4.0);
        // v28 = .unknown
        const v34 = [1.7976931348623157e+308];
        // v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        const v36 = [255,255,255];
        // v36 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        const v37 = {a:255,toString:isFinite,c:v34,__proto__:v36,valueOf:"object",constructor:"gM8oAednYn"};
        // v37 = .object(ofGroup: Object, withProperties: ["valueOf", "c", "constructor", "__proto__", "a"], withMethods: ["toString"])
        const v38 = {toString:v34,valueOf:v37,d:255,constructor:536870912};
        // v38 = .object(ofGroup: Object, withProperties: ["d", "constructor", "__proto__", "toString", "valueOf"])
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
