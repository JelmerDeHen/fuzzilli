function main() {
const v1 = {a:isFinite};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
function v7(v8,v9) {
    const v17 = {length:"N0Xx92zvHQ"};
    // v17 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
    const v18 = {constructor:13.37,length:13.37,__proto__:v17,toString:Number,a:"N0Xx92zvHQ"};
    // v18 = .object(ofGroup: Object, withProperties: ["constructor", "length", "a", "__proto__"], withMethods: ["toString"])
    const v25 = "object".constructor;
    // v25 = .function()
    const v29 = {apply:v25,deleteProperty:gc,preventExtensions:Object,ownKeys:v25,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
    // v29 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "apply", "ownKeys", "deleteProperty", "preventExtensions", "defineProperty", "getOwnPropertyDescriptor", "set", "construct", "has", "setPrototypeOf"])
    const v31 = new Proxy(v18,v29);
    // v31 = .unknown
    const v32 = v31[4088076774];
    // v32 = .unknown
    const v38 = Number >= 13.37;
    // v38 = .boolean
    const v39 = "e" > "object";
    // v39 = .boolean
    let v42 = 0;
    let v45 = 0;
    const v46 = v45 + 1;
    // v46 = .primitive
    v45 = v46;
    let v49 = 0;
    const v53 = v42 + 1;
    // v53 = .primitive
    v42 = v53;
}
for (let v57 = 0; v57 < 100; v57++) {
    const v58 = v7();
    // v58 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
