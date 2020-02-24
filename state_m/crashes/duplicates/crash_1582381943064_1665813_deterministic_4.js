function main() {
const v3 = [1337,13.37,1337,Uint8Array];
let v4 = v3;
const v6 = [1337,1337,1337,1337,1337];
const v7 = {valueOf:v6,__proto__:v6};
let v9 = 13.37;
const v12 = [1337,1337,1337,1337,1337];
function v13(v14,v15,v16,v17) {
    'use strict'
    try {
        const v21 = [1337,1337];
        const v23 = new ArrayBuffer();
        v9 = v16;
        let v26 = 0;
        do {
            const v27 = v26 + 1;
            v26 = v27;
        } while (v26 < 4);
        let v29 = 0;
        const v30 = v23.slice(v9);
        const v31 = v29 + 1;
        const v32 = [13.37];
        const v34 = [1337,13.37,v32,-1155643050];
        let v35 = v32;
        const v37 = [1337,1337];
        const v38 = {valueOf:1337,b:v4,e:1337,d:1337,constructor:v35,__proto__:1337,a:v32};
        const v40 = [1337,1337,1337,1337,1337];
        const v41 = [v40];
        const v42 = v37[-4096];
        const v43 = v34[-3357639552];
        const v44 = v17.d;
        const v45 = {__proto__:v15,c:v21,b:v15,a:ArrayBuffer,d:v17};
        for (let v49 = 0; v49 < 5; v49++) {
            const v50 = {};
            const v52 = Proxy();
        }
        const v53 = 13.37 == v34;
        let v55 = 0;
        const v56 = v35.flat();
        const v57 = v7();
        const v58 = v57[-2900725722];
        let v60 = 0;
    } catch(v61) {
        const v62 = {construct:v61};
    }
}
const v63 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v65 = new Proxy(v12,v63);
v65[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
