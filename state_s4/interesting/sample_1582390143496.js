function main() {
function v1(v2,v3) {
    let v7 = 0;
    let v10 = 0;
    const v11 = "Nz76fg+VWn" + 1;
    // v11 = .primitive
    v10 = v11;
    this.valueOf = v10;
    const v14 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "deleteProperty", "isExtensible", "defineProperty", "preventExtensions", "construct", "ownKeys", "apply", "getOwnPropertyDescriptor", "set", "getPrototypeOf"])
    const v16 = new ArrayBuffer(gc,v14);
    // v16 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    v16.toString = valueOf;
}
for (let v21 = 0; v21 < 100; v21++) {
    const v22 = v1();
    // v22 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
