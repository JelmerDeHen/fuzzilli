function main() {
const v1 = eval();
// v1 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        let v11 = 0;
        const v12 = v11 + 1;
        // v12 = .primitive
        const v14 = [1337,1337];
        // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v18 = [1337,1337,1337,1337];
        // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v19 = v14.shift();
        // v19 = .unknown
        const v21 = Symbol.toPrimitive;
        // v21 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        const v22 = 1024 % 13.37;
        // v22 = .number
        let v25 = 0;
        const v26 = v25 + 1;
        // v26 = .primitive
        v25 = v26;
        const v27 = v9 + 1;
        // v27 = .primitive
        for (const v31 in "object") {
            function v33(v34,v35) {
                const v39 = [3156875969,3156875969,127,DataView];
                // v39 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
                const v40 = {e:DataView,constructor:127,valueOf:127,d:v39};
                // v40 = .object(ofGroup: Object, withProperties: ["valueOf", "d", "constructor", "e", "__proto__"])
                let v43 = 0;
                for (const v44 in "boolean") {
                    let v47 = 0;
                    do {
                        const v48 = v47 + 1;
                        // v48 = .primitive
                        v47 = v48;
                    } while (v47 < 8);
                }
                do {
                    const v49 = v43 + 1;
                    // v49 = .primitive
                    v43 = v49;
                } while (v43 < "species");
            }
            const v50 = v33();
            // v50 = .unknown
            const v52 = "N0Xx92zvHQ".__proto__;
            // v52 = .object()
            let v53 = 0;
            const v54 = v53 + 1;
            // v54 = .primitive
            for (const v56 in "replace") {
            }
            v52.toString = Number;
        }
        v9 = v27;
    }
}
const v57 = v2();
// v57 = .unknown
}
%NeverOptimizeFunction(main);
main();
