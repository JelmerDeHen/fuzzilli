function main() {
for (const v1 in "object") {
    const v4 = [1337,1337,1337,1337,1337];
    // v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    function v5(v6,v7,v8,v9) {
        'use strict'
        try {
            v9[3] = v9;
        } catch(v10) {
            const v17 = {length:"N0Xx92zvHQ"};
            // v17 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
            const v18 = {constructor:13.37,length:13.37,__proto__:v17,toString:Number,a:"N0Xx92zvHQ"};
            // v18 = .object(ofGroup: Object, withProperties: ["length", "a", "__proto__", "constructor"], withMethods: ["toString"])
            const v25 = "object".constructor;
            // v25 = .function()
            const v29 = {apply:v25,deleteProperty:gc,preventExtensions:Object,ownKeys:v25,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
            // v29 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "set", "preventExtensions", "construct", "defineProperty", "apply", "has", "ownKeys", "isExtensible", "getOwnPropertyDescriptor", "deleteProperty"])
            const v31 = new Proxy(v18,v29);
            // v31 = .unknown
            const v32 = v31[4088076774];
            // v32 = .unknown
            const v34 = [1337];
            // v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            let v35 = v34;
            let v36 = v35;
            let v38 = undefined;
        }
        return v4;
    }
    const v39 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
    // v39 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "deleteProperty", "call", "construct", "get", "isExtensible", "getPrototypeOf", "preventExtensions", "setPrototypeOf", "set", "has"])
    const v41 = new Proxy(v4,v39);
    // v41 = .unknown
    v41[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
