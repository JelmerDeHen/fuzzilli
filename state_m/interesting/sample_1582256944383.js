function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v2 = v1;
let v4 = undefined;
for (let v8 = 0; v8 < 3; v8++) {
    function v9(v10,v11) {
        function v12(v13,v14) {
            const v21 = {length:"N0Xx92zvHQ"};
            // v21 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
            const v22 = {constructor:13.37,length:13.37,__proto__:v21,toString:Number,a:"N0Xx92zvHQ"};
            // v22 = .object(ofGroup: Object, withProperties: ["a", "length", "__proto__", "constructor"], withMethods: ["toString"])
            const v29 = "object".constructor;
            // v29 = .function()
            const v30 = {apply:v29,deleteProperty:gc,preventExtensions:Object,ownKeys:v29,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
            // v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["defineProperty", "set", "getOwnPropertyDescriptor", "apply", "setPrototypeOf", "construct", "has", "deleteProperty", "preventExtensions", "isExtensible", "ownKeys"])
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
    // v45 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    let v46 = v45;
    const v47 = v9(v46);
    // v47 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
