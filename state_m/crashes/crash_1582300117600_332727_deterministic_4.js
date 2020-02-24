function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = [-2323133885,v5];
const v7 = {toString:undefined,c:-2323133885};
const v8 = {};
let v9 = 1337;
const v13 = [13.37,13.37];
const v15 = [1337];
const v16 = [];
const v17 = {constructor:v16,valueOf:Symbol,c:Symbol,length:v15,d:"iterator",a:Symbol,e:v13};
const v21 = [1337,1337,1337,1337,1337];
function v23(v24,v25,v26,v27) {
    'use strict'
    try {
        const v28 = {};
        let v29 = v28;
        let v32 = 0;
        while (v32 < 6) {
            const v33 = v32 + 1;
            v32 = v33;
        }
        const v34 = v23();
        const v35 = v28 - 1;
        const v36 = Object.entries();
        const v41 = [2153514987,1,13.37,13.37,v27];
        const v43 = [v29,v41,v41];
        const v44 = {length:13.37,b:v26,valueOf:v41,__proto__:v43};
        const v45 = {a:1337,toString:v26,constructor:"NEGATIVE_INFINITY",valueOf:v44,b:13.37,c:JSON,e:JSON};
    } catch(v46) {
    }
}
const v47 = {deleteProperty:v23,set:v23,getPrototypeOf:v23,call:v23,preventExtensions:v23,isExtensible:v23,construct:v23,get:v23,ownKeys:v23,setPrototypeOf:v23,has:v23};
const v49 = new Proxy(v21,v47);
v49[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
