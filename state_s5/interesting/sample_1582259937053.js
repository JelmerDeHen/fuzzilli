function main() {
function v0(v1,v2) {
    const v12 = "object".constructor;
    // v12 = .function()
    const v16 = {apply:v12,deleteProperty:gc,preventExtensions:Object,ownKeys:v12,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Infinity,has:Symbol,set:Number};
    // v16 = .object(ofGroup: Object, withProperties: ["defineProperty", "__proto__"], withMethods: ["has", "apply", "set", "deleteProperty", "isExtensible", "getOwnPropertyDescriptor", "construct", "ownKeys", "preventExtensions", "setPrototypeOf"])
    let v26 = 0;
    const v27 = v26 + 1;
    // v27 = .primitive
    v26 = v27;
}
for (let v34 = 0; v34 < 100; v34++) {
    const v35 = v0();
    // v35 = .unknown
}
}
%NeverOptimizeFunction(main);
main();