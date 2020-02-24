function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [1337,RegExp];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {toString:1337};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "toString"])
const v9 = {b:1337,constructor:"symbol",e:-1024,c:-1024,a:v4,valueOf:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "b", "e", "valueOf", "__proto__", "a", "c"])
let v10 = v6;
function v11(v12,v13) {
    for (const v15 in "prototype") {
        let v18 = 0;
        do {
            const v19 = v18 + 1;
            // v19 = .primitive
            v18 = v19;
        } while (v18 < 8);
    }
    const v25 = [13.37];
    // v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v27 = [1337,1337];
    // v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v28 = [13.37];
    // v28 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v29 = {__proto__:4096,constructor:isFinite,a:v25,e:"match",d:4096};
    // v29 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d", "a"], withMethods: ["constructor"])
    const v30 = {toString:4096,length:v28,b:4096,a:isFinite,e:v29,d:v25};
    // v30 = .object(ofGroup: Object, withProperties: ["toString", "b", "d", "length", "e", "__proto__"], withMethods: ["a"])
    let v31 = v29;
    function v33(v34,v35) {
        return v27;
    }
    const v36 = RegExp.bind(v31,v33,v25,v27,v30);
    // v36 = .unknown
    const v37 = {get:v36};
    // v37 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
    const v39 = new Int16Array(19873);
    // v39 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
    for (const v40 of v39) {
        let v42 = 0;
        const v43 = v42 + 1;
        // v43 = .primitive
    }
    return v11;
}
const v45 = [1337];
// v45 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v46 = v45;
const v47 = v11(v46);
// v47 = .unknown
const v48 = v11();
// v48 = .unknown
if (v47) {
    for (const v49 in v6) {
    }
} else {
}
}
%NeverOptimizeFunction(main);
main();
