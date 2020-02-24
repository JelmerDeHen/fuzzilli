function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = {length:v2,toString:"MAX_SAFE_INTEGER",e:1337,d:1337};
// v4 = .object(ofGroup: Object, withProperties: ["e", "length", "d", "toString", "__proto__"])
let v7 = 0;
do {
    function v8(v9,v10) {
        if (v10) {
            v4.a = v8;
        } else {
        }
        const v13 = new Int16Array(19873);
        // v13 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
        for (const v14 of v13) {
        }
    }
    const v16 = [1337];
    // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v17 = v16;
    const v18 = v8(v17);
    // v18 = .unknown
    const v19 = v7 + 1;
    // v19 = .primitive
    v7 = v19;
} while (v7 <= 3);
}
%NeverOptimizeFunction(main);
main();
