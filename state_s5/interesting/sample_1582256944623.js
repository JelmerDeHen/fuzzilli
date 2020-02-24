function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v2 = v1;
let v4 = undefined;
for (let v8 = 0; v8 < 3; v8++) {
    function v9(v10,v11) {
        function v12(v13,v14) {
            const v21 = {length:"N0Xx92zvHQ"};
            // v21 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
            const v22 = {constructor:13.37,length:13.37,__proto__:v21,toString:Number,a:"N0Xx92zvHQ"};
            // v22 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "a", "constructor"], withMethods: ["toString"])
            const v29 = "object".constructor;
            // v29 = .function()
            const v30 = {apply:v29,deleteProperty:gc,preventExtensions:Object,ownKeys:v29,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
            // v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "construct", "getOwnPropertyDescriptor", "ownKeys", "deleteProperty", "apply", "setPrototypeOf", "defineProperty", "set", "has", "preventExtensions"])
            const v32 = new Proxy(v22,v30);
            // v32 = .unknown
            const v33 = v32[4088076774];
            // v33 = .unknown
        }
        for (let v37 = 0; v37 < 100; v37++) {
            const v38 = v12();
            // v38 = .unknown
        }
        let v41 = 0;
        const v43 = v41 + 1;
        // v43 = .primitive
        v41 = v43;
    }
    const v45 = [1337];
    // v45 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    let v46 = v45;
    const v47 = v9(v46);
    // v47 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
