function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [v6];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {__proto__:v7,c:"object",constructor:-3613839107,e:"object",d:v7};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "d", "e", "__proto__", "c"])
const v9 = {toString:13.37,valueOf:-3613839107,a:v8,e:-3613839107,__proto__:v6,d:v7,constructor:-3613839107};
// v9 = .object(ofGroup: Object, withProperties: ["d", "valueOf", "a", "__proto__", "e", "constructor", "toString"])
let v10 = v6;
function v11(v12,v13) {
    const v22 = 1337 != 13.37;
    // v22 = .boolean
    let v35 = 0;
    while (v35 < 3) {
        const v36 = Array(v35);
        // v36 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v37 = v35 + 1;
        // v37 = .primitive
        v35 = v37;
    }
    let v45 = 0;
    let v48 = 0;
    const v49 = v48 + 1;
    // v49 = .primitive
    v48 = v49;
    let v53 = 0;
    do {
        function v54(v55,v56) {
            const v60 = Array(0);
            // v60 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            const v61 = v60[1564472798];
            // v61 = .unknown
            const v63 = new Int16Array(19873);
            // v63 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
            for (const v64 of v63) {
            }
        }
        const v66 = [1337];
        // v66 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        let v67 = v66;
        const v68 = v54(v67);
        // v68 = .unknown
        const v69 = v53 + 1;
        // v69 = .primitive
        v53 = v69;
    } while (v53 <= 3);
}
for (let v73 = 0; v73 < 100; v73++) {
    const v74 = v11();
    // v74 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
