function main() {
const v2 = {setPrototypeOf:Symbol,get:Symbol,set:Symbol,getOwnPropertyDescriptor:Symbol,preventExtensions:Symbol,getPrototypeOf:Symbol,defineProperty:Symbol,construct:Symbol,deleteProperty:Symbol,call:Symbol,has:Symbol};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "deleteProperty", "getPrototypeOf", "has", "preventExtensions", "get", "defineProperty", "getOwnPropertyDescriptor", "setPrototypeOf", "construct", "call"])
const v4 = new Proxy(Symbol,v2);
// v4 = .unknown
try {
    for (const v5 in v4) {
    }
} catch(v6) {
}
}
%NeverOptimizeFunction(main);
main();
