function main() {
function v0(v1,v2) {
    for (const v4 in "prototype") {
        let v7 = 0;
        do {
            const v8 = v7 + 1;
            // v8 = .primitive
            v7 = v8;
        } while (v7 < 8);
    }
    const v14 = [13.37];
    // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v16 = [1337,1337];
    // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v17 = [13.37];
    // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v18 = {__proto__:4096,constructor:isFinite,a:v14,e:"match",d:4096};
    // v18 = .object(ofGroup: Object, withProperties: ["e", "a", "d", "__proto__"], withMethods: ["constructor"])
    const v19 = {toString:4096,length:v17,b:4096,a:isFinite,e:v18,d:v14};
    // v19 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "e", "b", "toString", "length"], withMethods: ["a"])
    let v20 = v18;
    function v22(v23,v24) {
        let v28 = 0;
    }
    const v29 = RegExp.bind(v20,v22,v14,v16,v19);
    // v29 = .unknown
    const v30 = {get:v29};
    // v30 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
    const v32 = new Int16Array(19873);
    // v32 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
    for (const v33 of v32) {
        let v36 = 0;
        const v37 = v36 + 1;
        // v37 = .primitive
        v36 = v37;
    }
}
const v39 = [1337];
// v39 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v40 = v39;
const v41 = v0(v40);
// v41 = .unknown
const v42 = v0();
// v42 = .unknown
}
%NeverOptimizeFunction(main);
main();
