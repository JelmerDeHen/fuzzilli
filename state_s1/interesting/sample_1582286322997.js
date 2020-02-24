function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v7 = 13.37;
const v18 = [1337,1337,1337];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v26 = {get:gc};
// v26 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v28 = Object.defineProperty(v18,9007199254740992,v26);
// v28 = .undefined
with (Object) {
    function v30(v31,v32) {
        const v34 = !v31;
        // v34 = .boolean
        v7 = v34;
        const v36 = new Int16Array(19873);
        // v36 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
        const v38 = RegExp[1337];
        // v38 = .unknown
        const v39 = {b:v30,__proto__:Object,...gc,...v38,...gc,...RegExp,...v28};
        // v39 = .object(ofGroup: Object, withProperties: ["constructor", "name", "caller", "prototype", "length", "arguments", "__proto__"], withMethods: ["b", "apply", "__proto__", "call", "bind"])
    }
    let v56 = v6;
    const v57 = v30(v56);
    // v57 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
