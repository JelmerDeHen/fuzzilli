function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [13.37,v4,-2,Float32Array];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {__proto__:"hasInstance",d:v4};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v9 = {__proto__:v8};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v10 = v9;
function v11(v12,v13) {
    let v20 = 0;
    for (const v21 in "boolean") {
        let v24 = 0;
        do {
            try {
                let v27 = 0;
                function v28(v29,v30) {
                    for (const v32 in "boolean") {
                        let v35 = 0;
                        do {
                            const v37 = [-2164143472,-2164143472];
                            // v37 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
                            const v39 = [1337,1337,1337,1337];
                            // v39 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
                            const v40 = v37.shift();
                            // v40 = .unknown
                            const v42 = Symbol.toPrimitive;
                            // v42 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
                            v42[v42] = v39;
                            const v43 = v35 + 1;
                            // v43 = .primitive
                            v35 = v43;
                        } while (v35 < 8);
                    }
                    return 1;
                }
                const v45 = [1337];
                // v45 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
                let v46 = v45;
                const v47 = v28(v46);
                // v47 = .unknown
                do {
                    const v48 = v27 + 1;
                    // v48 = .primitive
                    v27 = v48;
                } while (v27 < 7);
            } catch(v49) {
                let v52 = 0;
            }
            const v56 = v24 + 1;
            // v56 = .primitive
            v24 = v56;
        } while (v24 < 8);
    }
}
const v58 = [1337];
// v58 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v59 = v58;
const v60 = v11(v59);
// v60 = .unknown
}
%NeverOptimizeFunction(main);
main();
