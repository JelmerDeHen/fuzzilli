function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {__proto__:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v9 = {e:13.37,constructor:"+9LdyPEO0i",d:v7,valueOf:Set,__proto__:v4};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "d", "__proto__", "valueOf", "e"])
let v10 = v6;
let v14 = 0;
function v16(v17,v18) {
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
                } while (v34 == 1337);
                const v36 = v32 + 1;
                // v36 = .primitive
                v32 = v36;
                function v37(v38,v39) {
                    const v41 = {ownKeys:v39,preventExtensions:v39,defineProperty:v37,getPrototypeOf:v39,deleteProperty:v39,has:v37,set:v38,apply:v39};
                    // v41 = .object(ofGroup: Object, withProperties: ["getPrototypeOf", "preventExtensions", "apply", "set", "ownKeys", "__proto__", "deleteProperty"], withMethods: ["has", "defineProperty"])
                    const v43 = new Proxy(v37,v41);
                    // v43 = .unknown
                    const v44 = {toString:0,...Proxy,...v37,...v43};
                    // v44 = .object(ofGroup: Object, withProperties: ["__proto__", "toString"])
                }
                const v45 = v37();
                // v45 = .unknown
            } while (v32 < 8);
            return v18;
        }
        const v49 = new Uint32Array(907);
        // v49 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "buffer", "constructor", "byteOffset", "length", "byteLength"], withMethods: ["reduceRight", "slice", "filter", "fill", "keys", "reverse", "indexOf", "reduce", "lastIndexOf", "includes", "find", "copyWithin", "map", "forEach", "some", "join", "subarray", "values", "every", "entries", "set", "findIndex", "sort"])
        const v50 = [1337];
        // v50 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        let v51 = v50;
        const v52 = v27(v51);
        // v52 = .unknown
        const v53 = v27(1862007616,4.0);
        // v53 = .unknown
        do {
            for (const v57 of "pvU0UUjoya") {
            }
            const v58 = v24 + 1;
            // v58 = .primitive
            v24 = v58;
        } while (v24 < 8);
    }
    return "boolean";
}
const v59 = [-1024];
// v59 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v60 = v59;
const v61 = v16(v60);
// v61 = .unknown
}
%NeverOptimizeFunction(main);
main();
