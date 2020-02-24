function main() {
const v41 = {get:Number,set:Number};
// v41 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
const v43 = Object.defineProperty(Number,"__proto__",v41);
// v43 = .undefined
const v49 = v43[1337];
// v49 = .unknown
try {
} catch(v56) {
    function v59(v60,v61,v62,v63,v64) {
        let v66 = v59;
    }
    const v70 = {defineProperty:gc,preventExtensions:v49,getOwnPropertyDescriptor:Object,construct:v49,getPrototypeOf:Number,has:v56,apply:Object,ownKeys:gc,isExtensible:v56,deleteProperty:v56,call:gc};
    // v70 = .object(ofGroup: Object, withProperties: ["isExtensible", "__proto__", "preventExtensions", "deleteProperty", "construct", "has"], withMethods: ["call", "getPrototypeOf", "apply", "ownKeys", "getOwnPropertyDescriptor", "defineProperty"])
}
const v138 = [1337,1337];
// v138 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v143 = [13.37,13.37];
// v143 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v145 = [13.37,v143];
// v145 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v146 = eval(...v138,...v145);
// v146 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();
