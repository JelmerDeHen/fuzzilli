function main() {
function v1(v2,v3) {
    let v5 = 0;
    const v6 = ArrayBuffer + 1;
    // v6 = .primitive
    v5 = v6;
    this.valueOf = v5;
    let v9 = this;
    let v10 = v9;
    const v13 = new Proxy(v10,Object);
    // v13 = .unknown
    const v14 = Object.seal(v13);
    // v14 = .object()
    const v16 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
    // v16 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "apply", "deleteProperty", "set", "construct", "get", "ownKeys", "defineProperty", "getOwnPropertyDescriptor", "getPrototypeOf", "isExtensible"])
    const v18 = new ArrayBuffer(gc,v16);
    // v18 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    v18.toString = valueOf;
}
for (let v23 = 0; v23 < 100; v23++) {
    const v24 = v1();
    // v24 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
