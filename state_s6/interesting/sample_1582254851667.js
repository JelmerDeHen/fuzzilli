function main() {
for (const v1 in "object") {
    const v4 = "object".constructor;
    // v4 = .function()
    const v5 = {call:v4,get:gc,setPrototypeOf:v4,apply:gc,deleteProperty:gc,construct:v4,getPrototypeOf:v4,isExtensible:v4,preventExtensions:v4,has:gc,set:v4,defineProperty:v4,getOwnPropertyDescriptor:gc};
    // v5 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "deleteProperty", "has", "set", "apply", "preventExtensions", "call", "getPrototypeOf", "defineProperty", "setPrototypeOf", "get", "isExtensible", "getOwnPropertyDescriptor"])
    for (const v7 in "object") {
    }
}
}
%NeverOptimizeFunction(main);
main();
