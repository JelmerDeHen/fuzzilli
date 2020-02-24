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
        for (const v18 of v7) {
        }
        const v20 = [1337,1337,1337,1337,1337];
        const v24 = [1337,1337];
        const v26 = new ArrayBuffer();
        v9 = v16;
        let v29 = 0;
        do {
            const v30 = v29 + 1;
            v29 = v30;
        } while (v29 < 4);
        let v33 = 0;
        const v34 = v26.slice(v9,4);
        const v35 = v33 + 1;
        const v36 = [13.37];
        const v38 = [1337,13.37,v36,-1155643050];
        let v39 = v36;
        const v41 = [1337,1337];
        const v42 = {valueOf:1337,b:v4,e:1337,d:1337,constructor:v39,__proto__:1337,a:v36};
        const v44 = [1337,1337,1337,1337,1337];
        const v45 = [v44];
        const v46 = v41[-4096];
        const v47 = v38[-3357639552];
        const v48 = 13.37 == v38;
        let v50 = 0;
        const v51 = v39.flat();
        v17[3] = v17;
        const v52 = v7();
        const v53 = v52[-2900725722];
    } catch(v54) {
        const v55 = {construct:v54};
    }
}
const v56 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v58 = new Proxy(v12,v56);
v58[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
