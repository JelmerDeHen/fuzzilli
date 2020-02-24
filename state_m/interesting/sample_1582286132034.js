function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [Int16Array,3256523255,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {toString:1337,a:13.37,b:Int16Array,__proto__:1337,valueOf:v7};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "a", "valueOf", "b"])
const v9 = {d:v8,toString:v6,valueOf:Int16Array,b:"function",length:1337,e:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["toString", "b", "e", "length", "d", "__proto__", "valueOf"])
let v10 = "function";
function v12(v13,v14) {
    function v17(v18,v19) {
        for (const v21 in "boolean") {
            let v24 = 0;
            function v27(v28,v29) {
                let v32 = 0;
                do {
                    let v34 = v28;
                    do {
                        const v35 = v34 + 1;
                        // v35 = .primitive
                        v34 = v35;
                    } while (v34 == 9007199254740991);
                    const v36 = v32 + 1;
                    // v36 = .primitive
                    v32 = v36;
                } while (v32 < 8);
            }
            const v37 = "boolean" && 1337;
            // v37 = .boolean
            "boolean".length = 2;
            v7.__proto__ = v9;
            const v39 = v27("boolean",-1024);
            // v39 = .unknown
            const v41 = [1337];
            // v41 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
            let v42 = v41;
            const v43 = v27(v42);
            // v43 = .unknown
            const v44 = v27(1862007616,4.0);
            // v44 = .unknown
            do {
                for (const v46 of "pvU0UUjoya") {
                }
                const v47 = v24 + 1;
                // v47 = .primitive
                v24 = v47;
            } while (v24 < 8);
        }
    }
    const v48 = [-1024];
    // v48 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    let v49 = v48;
    const v50 = v17(v49);
    // v50 = .unknown
    const v53 = new Uint8Array(47774);
    // v53 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteOffset", "buffer", "__proto__", "constructor", "byteLength"], withMethods: ["keys", "findIndex", "filter", "indexOf", "reduceRight", "sort", "map", "some", "subarray", "reduce", "fill", "lastIndexOf", "set", "values", "entries", "reverse", "every", "includes", "join", "slice", "copyWithin", "forEach", "find"])
    for (const v54 in v53) {
    }
}
const v56 = [1337];
// v56 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v57 = v56;
const v58 = v12(v57);
// v58 = .unknown
}
%NeverOptimizeFunction(main);
main();
