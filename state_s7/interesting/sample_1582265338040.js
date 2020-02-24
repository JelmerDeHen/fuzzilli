function main() {
for (const v1 in "object") {
    function v3(v4,v5) {
        const v6 = v4 in v3;
        // v6 = .boolean
        for (const v8 in "boolean") {
            let v11 = 0;
            do {
                function v12(v13,v14,v15,v16,v17) {
                    'use strict'
                    const v23 = [1337];
                    // v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
                    const v24 = {b:v23,e:arguments,a:13.37,length:"iterator",valueOf:4294967297};
                    // v24 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__", "b", "a", "e"])
                }
                const v25 = v12();
                // v25 = .unknown
                let v28 = 0;
                const v29 = v28 + 1;
                // v29 = .primitive
                v28 = v29;
                const v30 = v11 + 1;
                // v30 = .primitive
                v11 = v30;
            } while (v11 < 8);
        }
    }
    const v32 = v3("undefined",4.0);
    // v32 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
