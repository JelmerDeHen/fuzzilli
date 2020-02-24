function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v12 = [-2331916614,-2331916614,-2331916614];
    // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v13 = [3664180981,3664180981,"string","string"];
    // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v14 = {valueOf:v13,length:v12,toString:parseFloat,constructor:"string",c:parseFloat};
    // v14 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__", "valueOf"], withMethods: ["c", "toString"])
    function v15(v16,v17) {
        function v18(v19,v20,v21,v22) {
            'use strict'
        }
        let v24 = this;
        let v25 = v24;
        const v28 = new Proxy(v25,Object);
        // v28 = .unknown
        const v30 = Symbol.species;
        // v30 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        v28[v30] = v18;
        function v34(v35,v36,v37,v38,v39) {
        }
        v14.__proto__ = this;
        const v41 = {get:v34};
        // v41 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
        const v43 = Object.seal(this,"b",v41);
        // v43 = .object()
        const v44 = [13.37,13.37,13.37,13.37,13.37];
        // v44 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v46 = [1337,v44,13.37,6];
        // v46 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v50 = Object.freeze(this,"d",v46);
        // v50 = .undefined
    }
    const v51 = v12.__proto__;
    // v51 = .object()
    const v52 = new v15(v14,v51);
    // v52 = .object()
}
const v53 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v53 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "setPrototypeOf", "getPrototypeOf", "has", "get", "deleteProperty", "set", "construct", "preventExtensions", "isExtensible", "ownKeys"])
const v55 = new Proxy(v2,v53);
// v55 = .unknown
v55[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
