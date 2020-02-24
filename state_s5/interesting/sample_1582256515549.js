function main() {
function v1(v2,v3) {
    const v19 = (13.37)[v1];
    // v19 = .unknown
    let v21 = 0;
    try {
        const v25 = {preventExtensions:Number,set:v3,has:v19,call:Object,getPrototypeOf:v1,construct:Number,setPrototypeOf:Object,apply:Symbol,deleteProperty:Object,isExtensible:Number,getOwnPropertyDescriptor:Object,ownKeys:Symbol};
        // v25 = .object(ofGroup: Object, withProperties: ["set", "has", "__proto__"], withMethods: ["isExtensible", "apply", "getPrototypeOf", "ownKeys", "call", "preventExtensions", "getOwnPropertyDescriptor", "deleteProperty", "construct", "setPrototypeOf"])
        const v27 = Proxy(0,v25);
        // v27 = .unknown
        let v31 = 0;
    } catch(v32) {
    }
    const v36 = v21 + 1;
    // v36 = .primitive
    v21 = v36;
}
const v50 = v1();
// v50 = .unknown
}
%NeverOptimizeFunction(main);
main();
