function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = [13.37,v3,-2,Float32Array];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v6 = undefined;
function v7(v8,v9) {
    const v13 = [13.37,13.37,13.37];
    // v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v15 = {a:"caller",valueOf:v13,__proto__:1337,constructor:2048966803,c:2048966803,b:"caller"};
    // v15 = .object(ofGroup: Object, withProperties: ["c", "b", "a", "__proto__", "valueOf", "constructor"])
    const v17 = [v15];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    let v18 = v17;
    const v20 = [1337];
    // v20 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    let v21 = v20;
    function v22(v23,v24) {
        const v26 = {deleteProperty:Object,apply:Object,getPrototypeOf:RegExp,defineProperty:v24,set:RegExp,construct:v22,setPrototypeOf:v24,has:v22};
        // v26 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "defineProperty", "__proto__"], withMethods: ["set", "apply", "has", "deleteProperty", "construct", "getPrototypeOf"])
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
