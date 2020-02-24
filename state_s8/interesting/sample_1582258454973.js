function main() {
try {
    let v6 = 0;
    const v7 = v6 + 1;
    // v7 = .primitive
    v6 = v7;
    const v8 = "PI"[5];
    // v8 = .unknown
    let v11 = 0;
    if (v8) {
        let v14 = 0;
        while (v14 < 3) {
            continue;
        }
    } else {
        const v15 = {defineProperty:v8,deleteProperty:Symbol,construct:v8,getPrototypeOf:v8,set:v8,ownKeys:v8,get:v8,has:v8,preventExtensions:v8,getOwnPropertyDescriptor:v8,setPrototypeOf:v8,call:v8,apply:v8};
        // v15 = .object(ofGroup: Object, withProperties: ["defineProperty", "getOwnPropertyDescriptor", "ownKeys", "preventExtensions", "__proto__", "set", "has", "setPrototypeOf", "call", "construct", "apply", "getPrototypeOf", "get"], withMethods: ["deleteProperty"])
        const v17 = Proxy(v8,v15);
        // v17 = .unknown
    }
} catch(v18) {
}
}
%NeverOptimizeFunction(main);
main();
