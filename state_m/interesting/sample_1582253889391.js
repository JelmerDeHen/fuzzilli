function main() {
let v17 = 0;
do {
    function v18(v19,v20,v21,v22,v23) {
        const v24 = {set:v22,ownKeys:v18,get:v18,defineProperty:v18,isExtensible:v20,apply:v21,construct:v20,getOwnPropertyDescriptor:v19,deleteProperty:v18,setPrototypeOf:v23,preventExtensions:v23};
        // v24 = .object(ofGroup: Object, withProperties: ["apply", "__proto__", "isExtensible", "getOwnPropertyDescriptor", "setPrototypeOf", "construct", "set", "preventExtensions"], withMethods: ["defineProperty", "get", "ownKeys", "deleteProperty"])
    }
    const v25 = v17 + 1;
    // v25 = .primitive
    v17 = v25;
} while (v17 < 7);
let v34 = 0;
do {
    function v35(v36,v37,v38,v39,v40) {
        const v41 = {set:v39,ownKeys:v35,get:v35,defineProperty:v35,isExtensible:v37,apply:v38,construct:v37,getOwnPropertyDescriptor:v36,deleteProperty:v35,setPrototypeOf:v40,preventExtensions:v40};
        // v41 = .object(ofGroup: Object, withProperties: ["apply", "__proto__", "setPrototypeOf", "set", "construct", "preventExtensions", "getOwnPropertyDescriptor", "isExtensible"], withMethods: ["ownKeys", "defineProperty", "get", "deleteProperty"])
    }
    const v43 = v34 + 1;
    // v43 = .primitive
    v34 = v43;
} while (v34 < 7);
}
%NeverOptimizeFunction(main);
main();
