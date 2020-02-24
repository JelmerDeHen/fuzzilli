function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [v5,JSON];
const v7 = {e:v6,__proto__:v6,valueOf:v5,d:2275358180,toString:v6};
const v8 = {};
let v9 = v6;
let v11 = 13.37;
let v12 = v11;
let v14 = 0;
const v15 = v14 + 1;
let v17 = 0;
let v19 = 0;
const v21 = [13.37];
const v24 = [1337,1337,1337,1337,1337];
function v25(v26,v27,v28,v29) {
    'use strict'
    try {
        const v31 = {};
        let v32 = v31;
        for (let v36 = 0; v36 < 100; v36++) {
            const v37 = v25("name",v27,0);
        }
        v28[256] = v26;
        const v42 = [2153514987,13.37,13.37,13.37,v21];
        const v44 = [v32,v42,v42];
        const v45 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v42,__proto__:v44};
        const v46 = {a:1337,toString:v31,constructor:"NEGATIVE_INFINITY",valueOf:v45,b:13.37,c:JSON,e:JSON};
    } catch(v47) {
    }
}
const v48 = {deleteProperty:v25,set:v25,getPrototypeOf:v25,call:v25,preventExtensions:v25,isExtensible:v25,construct:v25,get:v25,ownKeys:v25,setPrototypeOf:v25,has:v25};
const v50 = new Proxy(v24,v48);
v50[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
