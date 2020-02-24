function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = [1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = {a:1337,toString:13.37,c:v3,__proto__:v5,valueOf:"a",constructor:v3};
// v6 = .object(ofGroup: Object, withProperties: ["a", "constructor", "c", "toString", "__proto__", "valueOf"])
const v7 = {toString:v3,valueOf:v6,d:1337,constructor:-9007199254740992};
// v7 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "toString", "d", "__proto__"])
function v8(v9,v10) {
    const v14 = [13.37,13.37,13.37,13.37];
    // v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v15 = [v14,-1970853828,DataView];
    // v15 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v17 = Object.preventExtensions(v15);
    // v17 = .object()
    let v20 = -2908695906;
    for (const v21 in "boolean") {
        let v24 = 0;
        do {
            let v26 = 0;
            const v27 = v24 + 1;
            // v27 = .primitive
            const v29 = Object();
            // v29 = .object()
            v7[2722785800] = v3;
            let v30 = Object;
            if (v9) {
                const v31 = v5[4294967296];
                // v31 = .unknown
                v30 = v21;
            } else {
                let v32 = DataView;
                if (v10) {
                    v17.valueOf = v30;
                    v32 = v32;
                } else {
                    let v33 = v24;
                    if (v10) {
                        v33 = Function;
                    } else {
                        const v35 = 0 >> v33;
                        // v35 = .integer
                        v33 = v35;
                    }
                    v32 = v33;
                }
                v30 = v26;
            }
            for (const v36 in v5) {
                let v37 = DataView;
            }
            const v38 = [1337,1337];
            // v38 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            const v40 = 0 + 1;
            // v40 = .primitive
            const v43 = [1337,1337,1337,1337];
            // v43 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            const v44 = v38.shift();
            // v44 = .unknown
            const v46 = Symbol.toPrimitive;
            // v46 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            const v47 = 1024 % 13.37;
            // v47 = .number
            let v50 = 0;
            do {
                const v51 = v50 + 1;
                // v51 = .primitive
                v50 = v51;
            } while (v50 < 7);
            const v52 = v24 + 1;
            // v52 = .primitive
            v24 = v52;
        } while (v24 < 8);
    }
}
const v53 = [-9007199254740992];
// v53 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v54 = v53;
const v55 = v8(v54);
// v55 = .unknown
const v56 = v8();
// v56 = .unknown
}
%NeverOptimizeFunction(main);
main();
