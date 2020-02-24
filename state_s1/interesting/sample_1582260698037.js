function main() {
function v0(v1,v2) {
    const v3 = v1 in v0;
    // v3 = .boolean
    const v7 = {length:"N0Xx92zvHQ"};
    // v7 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
    const v8 = {constructor:13.37,length:13.37,__proto__:v7,toString:Number,a:"N0Xx92zvHQ"};
    // v8 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__", "a"], withMethods: ["toString"])
    let v9 = v8;
    const v12 = {get:gc};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
    const v14 = Object.defineProperty(v9,3,v12);
    // v14 = .undefined
    const v20 = [3156875969,3156875969,1337,DataView];
    // v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v21 = {constructor:v20,c:v20,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
    // v21 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d", "a", "constructor", "c"])
    const v28 = {length:"N0Xx92zvHQ"};
    // v28 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
    const v29 = {constructor:13.37,length:13.37,__proto__:v28,toString:Number,a:"N0Xx92zvHQ"};
    // v29 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "a", "constructor"], withMethods: ["toString"])
    const v36 = "object".constructor;
    // v36 = .function()
    const v37 = {apply:v36,deleteProperty:gc,preventExtensions:Object,ownKeys:v36,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
    // v37 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "has", "apply", "construct", "setPrototypeOf", "ownKeys", "getOwnPropertyDescriptor", "set", "deleteProperty", "defineProperty", "preventExtensions"])
    const v39 = new Proxy(v29,v37);
    // v39 = .unknown
    const v40 = {e:DataView,constructor:1337,valueOf:1337,d:v20};
    // v40 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "e", "constructor", "valueOf"])
    for (let v45 = 0; v45 < 10; v45++) {
        const v50 = Symbol.toPrimitive;
        // v50 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        for (let v54 = 0; v54 < 1; v54++) {
        }
        const v56 = [13.37,13.37];
        // v56 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        for (const v57 in "object") {
            const v58 = !v56;
            // v58 = .boolean
            const v59 = Object(v58,v57,4294967297);
            // v59 = .object()
            const v60 = {set:Object,constructor:Object};
            // v60 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "constructor"])
        }
    }
    let v63 = 0;
    for (const v64 in "boolean") {
        let v66 = 0;
        try {
            let v69 = 0;
            const v70 = v69 + 1;
            // v70 = .primitive
            v69 = v70;
        } catch(v71) {
            let v73 = 0;
            for (let v77 = 0; v77 < 0; v77++) {
                const v79 = [1337,1337,1337,1337];
                // v79 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
                for (const v81 of v79) {
                    return 9007199254740993;
                }
            }
        }
        const v82 = v66 + 1;
        // v82 = .primitive
    }
    const v83 = v63 + 1;
    // v83 = .primitive
    v63 = v83;
    for (const v85 in "object") {
        for (let v89 = 0; v89 < 100; v89++) {
        }
        for (let v93 = 0; v93 < 100; v93++) {
        }
    }
}
const v97 = v0();
// v97 = .unknown
}
%NeverOptimizeFunction(main);
main();
