function main() {
const v5 = {b:2147483647};
// v5 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v6 = {__proto__:Uint8Array,a:v5,constructor:1337,valueOf:"undefined",valueOf:1337,b:13.37};
// v6 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "valueOf", "a", "constructor"])
let v9 = 0;
do {
    const v10 = v9 + 1;
    // v10 = .primitive
    function v11(v12,v13) {
        for (let v18 = 0; v18 < 10; v18++) {
            for (const v19 in "undefined") {
            }
        }
        let v25 = 0;
        let v30 = 0;
        const v32 = new Uint8Array(v6);
        // v32 = .object(ofGroup: Uint8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["copyWithin", "includes", "reduceRight", "reverse", "indexOf", "fill", "findIndex", "set", "subarray", "sort", "forEach", "slice", "entries", "filter", "join", "every", "some", "keys", "lastIndexOf", "reduce", "values", "find", "map"])
        const v33 = v32.entries(3156875969,0,7);
        // v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    }
    const v35 = [1337];
    // v35 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v36 = v35;
    const v37 = v11(v36);
    // v37 = .unknown
    v9 = v10;
} while (v9 < 7);
}
%NeverOptimizeFunction(main);
main();
