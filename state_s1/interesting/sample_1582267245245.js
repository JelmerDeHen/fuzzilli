function main() {
const v10 = [1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v18 = {get:gc};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v20 = Object.defineProperty(v10,9007199254740992,v18);
// v20 = .undefined
with (Object) {
    function v22(v23,v24) {
        const v27 = new Int16Array(19873);
        // v27 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
        const v29 = RegExp[1337];
        // v29 = .unknown
        const v30 = {b:v22,__proto__:Object,...gc,...v29,...gc,...RegExp,...v20};
        // v30 = .object(ofGroup: Object, withProperties: ["arguments", "__proto__", "length", "caller", "constructor", "prototype", "name"], withMethods: ["bind", "__proto__", "b", "call", "apply"])
        const v34 = [1337,1337];
        // v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v35 = {b:652713.874106993,d:1607264097,b:1607264097,constructor:v34,valueOf:WeakSet};
        // v35 = .object(ofGroup: Object, withProperties: ["valueOf", "constructor", "b", "d", "__proto__"])
        let v42 = 0;
        let v48 = 0;
    }
    const v51 = [1337];
    // v51 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v52 = v51;
    const v53 = v22(v52);
    // v53 = .unknown
}
let v55 = 0;
let v58 = 0;
const v59 = v58 + 1;
// v59 = .primitive
v58 = v59;
const v60 = v55 + 1;
// v60 = .primitive
v55 = v60;
let v143 = 0;
}
%NeverOptimizeFunction(main);
main();
