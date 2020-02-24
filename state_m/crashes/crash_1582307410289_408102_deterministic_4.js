function main() {
const v4 = new Float32Array();
let v6 = 0;
const v8 = new Uint8ClampedArray();
const v9 = "function" + 1;
const v11 = [13.37];
const v14 = {get:Symbol};
const v16 = Object.defineProperty(Symbol,1073741824,v14);
const v18 = [1337,1337];
const v19 = [-4294967295,13.37,v11];
const v22 = [1337,1337,1337,1337,1337];
function v23(v24,v25,v26,v27) {
    'use strict'
    try {
        const v32 = [2153514987,13.37,13.37,13.37,v27];
        const v34 = {toString:13.37,b:"SJlLk2U6S0",valueOf:v22,__proto__:v32};
        let v37 = 0;
        do {
            try {
            } catch(v38) {
                const v39 = [...44302,...v23,v26];
            }
            const v40 = v37 + 1;
            v37 = v40;
        } while (v37 < 6);
        const v41 = v23();
        const v42 = {a:1337,toString:v24,constructor:"SJlLk2U6S0",valueOf:v34,b:13.37,c:JSON,e:JSON};
    } catch(v43) {
    }
}
const v44 = {deleteProperty:v23,set:v23,getPrototypeOf:v23,call:v23,preventExtensions:v23,isExtensible:v23,construct:v23,get:v23,ownKeys:v23,setPrototypeOf:v23,has:v23};
const v46 = new Proxy(v22,v44);
v46[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
