function main() {
try {
    const v2 = {deleteProperty:Promise,setPrototypeOf:Promise,apply:Promise,construct:Promise,ownKeys:Promise,getOwnPropertyDescriptor:Promise};
    // v2 = .object(ofGroup: Object, withProperties: ["construct", "deleteProperty", "getOwnPropertyDescriptor", "apply", "setPrototypeOf", "__proto__", "ownKeys"])
    const v4 = new Proxy(JSON,v2);
    // v4 = .unknown
    v4.toString = v4;
} catch(v5) {
}
}
%NeverOptimizeFunction(main);
main();
