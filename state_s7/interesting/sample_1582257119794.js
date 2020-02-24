function main() {
function v0(v1,v2) {
    const v9 = {length:"N0Xx92zvHQ"};
    // v9 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
    const v10 = {constructor:13.37,length:13.37,__proto__:v9,toString:Number,a:"N0Xx92zvHQ"};
    // v10 = .object(ofGroup: Object, withProperties: ["a", "constructor", "__proto__", "length"], withMethods: ["toString"])
    const v17 = "object".constructor;
    // v17 = .function()
    for (let v21 = 0; v21 < 100; v21++) {
    }
    const v22 = {apply:v17,deleteProperty:gc,preventExtensions:Object,ownKeys:v17,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
    // v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "defineProperty", "getOwnPropertyDescriptor", "setPrototypeOf", "ownKeys", "deleteProperty", "has", "construct", "preventExtensions", "set", "apply"])
    const v24 = new Proxy(v10,v22);
    // v24 = .unknown
    const v25 = v24[4088076774];
    // v25 = .unknown
    const v34 = [v17,13.37];
    // v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    for (const v35 in "object") {
        const v36 = !v34;
        // v36 = .boolean
        const v37 = Object(v36,v35,4294967297);
        // v37 = .object()
    }
    let v40 = 0;
    for (const v41 in "boolean") {
        let v44 = 0;
        do {
            const v45 = v44 + 1;
            // v45 = .primitive
            v44 = v45;
        } while (v44 < 7);
        let v48 = 0;
    }
    const v52 = v40 + 1;
    // v52 = .primitive
    v9[9] = v0;
    v40 = v52;
}
for (let v56 = 0; v56 < 100; v56++) {
    const v57 = v0();
    // v57 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
