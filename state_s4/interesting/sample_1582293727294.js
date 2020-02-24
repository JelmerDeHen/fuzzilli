function main() {
const v3 = {valueOf:13.37,e:-92412138,toString:"0DeB1+Gn+W",__proto__:-92412138};
// v3 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "toString", "__proto__"])
const v5 = v3.__proto__;
// v5 = .object()
const v7 = {get:parseFloat};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v9 = Object.defineProperty(v5,"length",v7);
// v9 = .undefined
function v10(v11,v12) {
    const v14 = [1337];
    // v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v17 = [1337,1337,1337,1337,1337];
    // v17 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    function v18(v19,v20,v21,v22) {
        'use strict'
        try {
            v22[3] = v22;
        } catch(v23) {
            let v25 = 13.37;
            let v26 = v25;
            const v28 = -Infinity;
            // v28 = .float
            const v29 = [v28];
            // v29 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            const v31 = {constructor:-4294967295,length:1337,__proto__:v29};
            // v31 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"])
            const v33 = v29.includes(v31,1);
            // v33 = .boolean
            const v34 = v31.toLocaleString(v33,v26);
            // v34 = .unknown
        }
        return v14;
    }
    const v35 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
    // v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "isExtensible", "ownKeys", "get", "construct", "preventExtensions", "has", "deleteProperty", "call", "setPrototypeOf", "getPrototypeOf"])
    const v37 = new Proxy(v17,v35);
    // v37 = .unknown
    v37[1] = "MIN_VALUE";
}
const v39 = [1337];
// v39 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v40 = v39;
const v41 = v10(v40);
// v41 = .unknown
}
%NeverOptimizeFunction(main);
main();
