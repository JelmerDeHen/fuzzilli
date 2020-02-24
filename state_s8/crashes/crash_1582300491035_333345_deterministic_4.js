function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [563841718];
const v7 = {a:13.37,b:563841718,valueOf:13.37,constructor:v6,d:563841718,c:1337};
const v8 = {a:13.37,b:13.37,length:v3,valueOf:563841718,constructor:v3,c:"search"};
for (const v10 in "object") {
    const v13 = [1337,1337,1337,1337,1337];
    function v14(v15,v16,v17,v18) {
        'use strict'
        try {
            v18[3] = v18;
        } catch(v19) {
            const v21 = [13.37,13.37,13.37];
            const v23 = new Uint32Array();
            const v26 = [13.37,"boolean","boolean",13.37];
            const v30 = -Infinity;
            const v31 = [v30];
            const v33 = {constructor:-4294967295,length:1337,__proto__:v31};
            const v34 = v31.includes();
            const v35 = ["d",isFinite,isFinite,13.37];
            const v36 = {has:isFinite,getOwnPropertyDescriptor:isFinite,setPrototypeOf:isFinite,call:isFinite,ownKeys:isFinite,isExtensible:isFinite,set:isFinite};
            const v38 = new Proxy(v26,v36);
            const v39 = v35.concat(v38,v23,13.37);
        }
        return v13;
    }
    const v40 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
    const v42 = new Proxy(v13,v40);
    v42[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
