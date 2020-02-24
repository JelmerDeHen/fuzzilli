function main() {
const v5 = {b:2147483647};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v6 = {__proto__:Uint8Array,a:v5,constructor:1337,valueOf:"undefined",valueOf:1337,b:13.37};
// v6 = .object(ofGroup: Object, withProperties: ["a", "b", "constructor", "valueOf", "__proto__"])
let v7 = Uint8Array;
let v10 = 0;
do {
    const v11 = v10 + 1;
    // v11 = .primitive
    function v12(v13,v14) {
        const v19 = [3156875969,3156875969,1337,DataView];
        // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v20 = {e:DataView,constructor:1337,valueOf:1337,d:v19};
        // v20 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "d", "valueOf", "e"])
        for (let v25 = 0; v25 < 10; v25++) {
            const v26 = v25 == "boolean";
            // v26 = .boolean
            const v27 = 13.37 === v20;
            // v27 = .boolean
            const v28 = v26 <= v25;
            // v28 = .boolean
            if (v14) {
                const v29 = v13(7,1337,...7);
                // v29 = .unknown
            } else {
                for (const v30 in "undefined") {
                    const v31 = new v7(v10);
                    // v31 = .object(ofGroup: Uint8Array, withProperties: ["buffer", "byteLength", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["copyWithin", "keys", "forEach", "findIndex", "map", "sort", "entries", "subarray", "includes", "set", "reverse", "reduceRight", "join", "values", "fill", "indexOf", "every", "slice", "find", "filter", "some", "reduce", "lastIndexOf"])
                }
            }
        }
        let v34 = 0;
        let v37 = 0;
        let v40 = 0;
        const v41 = v40 + 1;
        // v41 = .primitive
        v40 = v41;
        let v44 = 0;
        const v45 = v37 + 1;
        // v45 = .primitive
        v37 = v45;
        const v46 = v34 + 1;
        // v46 = .primitive
        v34 = v46;
        const v48 = new Uint8Array(v6);
        // v48 = .object(ofGroup: Uint8Array, withProperties: ["buffer", "byteLength", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["copyWithin", "keys", "forEach", "findIndex", "map", "sort", "entries", "subarray", "includes", "set", "reverse", "reduceRight", "join", "values", "fill", "indexOf", "every", "slice", "find", "filter", "some", "reduce", "lastIndexOf"])
        const v49 = v48.copyWithin(3156875969,0,7);
        // v49 = .undefined
    }
    const v51 = [1337];
    // v51 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v52 = v51;
    const v53 = v12(v52);
    // v53 = .unknown
    v10 = v11;
} while (v10 < 7);
}
%NeverOptimizeFunction(main);
main();
