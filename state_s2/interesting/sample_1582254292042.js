function main() {
const v5 = [];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = {valueOf:v5,length:13.37,d:127,e:127};
// v6 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__", "e", "d"])
const v7 = {c:v5,valueOf:v6,d:Array,a:1337};
// v7 = .object(ofGroup: Object, withProperties: ["valueOf", "c", "__proto__", "a"], withMethods: ["d"])
const v44 = Object[3];
// v44 = .unknown
let v47 = 0;
let v48 = 0;
try {
    function v49(v50,v51,v52,v53) {
        const v54 = v50 & v49;
        // v54 = .integer
    }
    v48 = v44;
    function v55(v56,v57,v58,v59) {
    }
} catch(v60) {
    let v63 = 0;
    const v64 = {getOwnPropertyDescriptor:v60,setPrototypeOf:v7,getPrototypeOf:Array};
    // v64 = .object(ofGroup: Object, withProperties: ["getOwnPropertyDescriptor", "setPrototypeOf", "__proto__"], withMethods: ["getPrototypeOf"])
    const v66 = Proxy(v48,v64);
    // v66 = .unknown
    function v67(v68,v69) {
        const v70 = Array(v48);
        // v70 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    }
    v66.has = v48;
}
const v72 = v47 + 1;
// v72 = .primitive
v47 = v72;
}
%NeverOptimizeFunction(main);
main();
