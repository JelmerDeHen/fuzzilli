function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v2 = [v1,1337,v1];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = [];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v9 = {valueOf:13.37,b:"toStringTag"};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "valueOf"])
const v10 = {length:"toStringTag",a:v8,d:-1050326348,b:-1050326348};
// v10 = .object(ofGroup: Object, withProperties: ["b", "length", "d", "__proto__", "a"])
const v14 = [13.37];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v16 = [1337,1337,1337];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v17 = {a:1337,toString:13.37,c:v14,__proto__:v16,valueOf:"a",constructor:v14};
// v17 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "toString", "valueOf", "constructor", "c"])
const v18 = {toString:v14,valueOf:v17,d:1337,constructor:-9007199254740992};
// v18 = .object(ofGroup: Object, withProperties: ["valueOf", "d", "toString", "constructor", "__proto__"])
function v19(v20,v21) {
    const v25 = [13.37,13.37,13.37,13.37];
    // v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v26 = [v25,-1970853828,DataView];
    // v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v28 = v10.__proto__;
    // v28 = .object()
    let v29 = v14;
    if (v20) {
        v18.length = v10;
        v29 = v9;
    } else {
        v18[13.37] = Object;
        const v30 = {...v29};
        // v30 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"], withMethods: ["reduce", "every", "sort", "reverse", "keys", "flatMap", "map", "concat", "shift", "find", "toLocaleString", "unshift", "join", "fill", "values", "findIndex", "entries", "indexOf", "slice", "includes", "flat", "pop", "copyWithin", "some", "forEach", "push", "toString", "lastIndexOf", "reduceRight", "filter", "splice"])
        v29 = Object;
    }
    const v31 = Object();
    // v31 = .object()
    const v32 = Object(v21,v7,"toStringTag",13.37,v29);
    // v32 = .object()
    let v35 = 0;
    do {
        const v37 = Symbol.unscopables;
        // v37 = .unknown
        v18[v37] = Symbol;
        const v38 = v35 + 1;
        // v38 = .primitive
        v35 = v38;
    } while (v35 < 10);
    const v39 = Object.preventExtensions(v26);
    // v39 = .object()
    let v40 = v9;
    const v41 = 1337 * v2;
    // v41 = .number
    try {
        function v42(v43,v44,v45,v46,v47) {
            function v48(v49,v50) {
                'use strict'
                const v51 = v44(v25,v50,v42);
                // v51 = .unknown
            }
        }
        v40 = v42;
    } catch(v52) {
        const v53 = Object(v52,v28,v18,v16,v52);
        // v53 = .object()
        v40 = v8;
    }
    for (const v54 in v26) {
        v25.__proto__ = v20;
    }
    v18[2] = v19;
    const v57 = new Float32Array(64154);
    // v57 = .object(ofGroup: Float32Array, withProperties: ["length", "constructor", "buffer", "__proto__", "byteLength", "byteOffset"], withMethods: ["slice", "some", "findIndex", "reduce", "copyWithin", "reverse", "find", "sort", "indexOf", "filter", "keys", "map", "every", "reduceRight", "lastIndexOf", "fill", "set", "forEach", "subarray", "entries", "values", "includes", "join"])
    let v60 = -2908695906;
    for (const v61 in "boolean") {
        let v64 = 0;
        do {
            let v66 = 0;
            const v67 = v64 + 1;
            // v67 = .primitive
            const v69 = Object();
            // v69 = .object()
            v18[2722785800] = v14;
            let v70 = Object;
            if (v20) {
                const v71 = v16[4294967296];
                // v71 = .unknown
                v70 = v61;
            } else {
                let v72 = DataView;
                if (v21) {
                    v39.valueOf = v70;
                    v72 = v72;
                } else {
                    let v73 = v64;
                    if (v21) {
                        v73 = Function;
                    } else {
                        const v75 = 0 >> v73;
                        // v75 = .integer
                        v73 = v75;
                    }
                    v72 = v73;
                }
            }
            for (const v76 in v16) {
                let v77 = DataView;
                const v80 = [13.37,13.37,13.37];
                // v80 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
                let v81 = v80;
                let v82 = isNaN;
                function v83(v84,v85) {
                    for (const v87 in "boolean") {
                        let v90 = 0;
                        do {
                            const v93 = v80.find(v82,v81);
                            // v93 = .unknown
                            let v94 = 0;
                            do {
                                const v95 = v94 + 1;
                                // v95 = .primitive
                                v94 = v95;
                            } while (v94 < 7);
                            const v96 = v90 + 1;
                            // v96 = .primitive
                            v90 = v96;
                        } while (v90 < 8);
                    }
                }
                const v98 = [1337];
                // v98 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
                let v99 = v98;
                const v100 = v83(v99);
                // v100 = .unknown
            }
            const v101 = [1337,1337];
            // v101 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            const v102 = 0 + 1;
            // v102 = .primitive
            let v104 = 0;
            const v105 = v104 + 1;
            // v105 = .primitive
            const v106 = v64 + 1;
            // v106 = .primitive
            v64 = v106;
        } while (v64 < 8);
    }
}
const v107 = [v14];
// v107 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v108 = v107;
const v109 = v19(v108);
// v109 = .unknown
}
%NeverOptimizeFunction(main);
main();
