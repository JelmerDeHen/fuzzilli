function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = [13.37,v3,-2,Float32Array];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v6 = undefined;
function v7(v8,v9) {
    const v13 = [13.37,13.37,13.37];
    // v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v15 = {a:"caller",valueOf:v13,__proto__:1337,constructor:2048966803,c:2048966803,b:"caller"};
    // v15 = .object(ofGroup: Object, withProperties: ["constructor", "c", "b", "a", "valueOf", "__proto__"])
    const v17 = [v15];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v18 = v17;
    const v20 = [1337];
    // v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v21 = v20;
    function v22(v23,v24) {
        const v26 = {deleteProperty:Object,apply:Object,getPrototypeOf:RegExp,defineProperty:v24,set:RegExp,construct:v22,setPrototypeOf:v24,has:v22};
        // v26 = .object(ofGroup: Object, withProperties: ["__proto__", "defineProperty", "setPrototypeOf"], withMethods: ["getPrototypeOf", "apply", "has", "deleteProperty", "construct", "set"])
        const v28 = new Proxy(v18,v26);
        // v28 = .unknown
        const v29 = Object.isSealed(v28);
        // v29 = .boolean
    }
    let v30 = v21;
    const v31 = v22(v30);
    // v31 = .unknown
}
v6 = v7;
const v35 = v6(v4);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
