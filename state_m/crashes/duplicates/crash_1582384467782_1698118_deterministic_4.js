function main() {
const v3 = [1337,13.37,1337,Uint8Array];
let v4 = v3;
let v7 = 13.37;
const v10 = [1337,1337,1337,1337,1337];
function v11(v12,v13,v14,v15) {
    'use strict'
    try {
        const v19 = new Uint16Array();
        v7 = v14;
        let v22 = 0;
        do {
            const v23 = v22 + 1;
            v22 = v23;
        } while (v22 < 4);
        const v24 = v19.slice(v7);
        const v25 = [13.37];
        const v27 = v15.getOwnPropertyNames();
        let v29 = 0;
        for (const v30 of v14) {
        }
        const v31 = v29 + 1;
        const v32 = [1337,13.37,v25,-1155643050];
        let v33 = v25;
        const v35 = [1337,1337];
        const v36 = {valueOf:1337,b:v4,e:1337,d:1337,constructor:v33,__proto__:1337,a:v25};
    } catch(v37) {
        const v38 = {construct:v37};
    }
}
const v39 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
const v41 = new Proxy(v10,v39);
v41[1] = "HJJxbUeMq+";
}
%NeverOptimizeFunction(main);
main();
