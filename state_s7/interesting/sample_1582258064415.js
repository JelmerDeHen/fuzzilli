function main() {
for (let v4 = 0; v4 < 100; v4++) {
    let v6 = undefined;
    const v13 = {length:"N0Xx92zvHQ"};
    // v13 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
    const v14 = {constructor:13.37,length:13.37,__proto__:v13,toString:Number,a:"N0Xx92zvHQ"};
    // v14 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "constructor", "length"], withMethods: ["toString"])
    const v21 = "object".constructor;
    // v21 = .function()
    const v25 = {apply:v21,deleteProperty:gc,preventExtensions:Object,ownKeys:v21,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
    // v25 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "set", "setPrototypeOf", "deleteProperty", "defineProperty", "apply", "construct", "isExtensible", "getOwnPropertyDescriptor", "ownKeys", "preventExtensions"])
    const v27 = new Proxy(v14,v25);
    // v27 = .unknown
    try {
        let v37 = 0;
        let v40 = 0;
        const v41 = v27[5];
        // v41 = .unknown
        const v42 = v40 + 1;
        // v42 = .primitive
        v40 = v42;
        let v45 = 0;
        const v46 = v45 + 1;
        // v46 = .primitive
        v45 = v46;
        const v47 = Proxy(JSON,v13);
        // v47 = .unknown
    } catch(v51) {
    }
}
}
%NeverOptimizeFunction(main);
main();
