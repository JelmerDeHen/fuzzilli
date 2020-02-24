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
    // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v16 = [1337,1337];
    // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v17 = [13.37];
    // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v18 = {__proto__:4096,constructor:isFinite,a:v14,e:"match",d:4096};
    // v18 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d", "a"], withMethods: ["constructor"])
    const v19 = {toString:4096,length:v17,b:4096,a:isFinite,e:v18,d:v14};
    // v19 = .object(ofGroup: Object, withProperties: ["length", "e", "__proto__", "toString", "d", "b"], withMethods: ["a"])
    let v20 = v18;
    function v22(v23,v24) {
        let v28 = 0;
    }
    const v29 = RegExp.bind(v20,v22,v14,v16,v19);
    // v29 = .unknown
    const v30 = {get:v29};
    // v30 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
    const v32 = new Int16Array(19873);
    // v32 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
    for (const v33 of v32) {
        let v36 = 0;
        const v37 = v36 + 1;
        // v37 = .primitive
        v36 = v37;
    }
}
const v39 = [1337];
// v39 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v40 = v39;
const v41 = v0(v40);
// v41 = .unknown
const v42 = v0();
// v42 = .unknown
}
%NeverOptimizeFunction(main);
main();
