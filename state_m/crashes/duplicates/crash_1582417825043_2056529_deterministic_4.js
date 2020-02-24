function main() {
const v2 = [1337,1337,1337,1337,1337];
const v6 = [1337,13.37,1337,Uint8Array];
let v7 = v6;
const v9 = [1337,1337,1337,1337,1337];
const v10 = {valueOf:v9,__proto__:v9};
let v12 = 13.37;
const v15 = [1337,1337,1337,1337,1337];
function v16(v17,v18,v19,v20) {
    'use strict'
    try {
        const v24 = [1337,1337];
        const v26 = new ArrayBuffer();
        v12 = v19;
        let v29 = 0;
        do {
            const v30 = v29 + 1;
            v29 = v30;
        } while (v29 < 4);
        let v32 = 0;
        const v33 = v26.slice(v12);
        const v34 = v32 + 1;
        const v35 = [13.37];
        const v37 = [1337,13.37,v35,-1155643050];
        let v38 = v35;
        const v40 = [1337,1337];
        let v41 = v17;
        if (v18) {
            const v42 = "MIN_VALUE".padEnd();
        } else {
            v41.toString = v17;
        }
        const v43 = v38 && ArrayBuffer;
        const v44 = [v18];
        const v45 = {toString:v15,e:v9,length:v33,c:ArrayBuffer};
        const v46 = {valueOf:1337,b:v7,e:1337,d:1337,constructor:v38,__proto__:1337,a:v35};
        const v48 = [1337,1337,1337,1337,1337];
        const v49 = [v48];
        const v50 = v40[-4096];
        const v51 = v37[-3357639552];
        const v52 = 13.37 == v37;
        let v54 = 0;
        const v55 = v38.flat();
        v20[3] = v20;
        const v56 = v10();
        const v57 = v56[-2900725722];
        let v59 = undefined;
        let v61 = 0;
        const v62 = [0,v26];
        const v63 = v20.log10(13.37,v16);
    } catch(v64) {
        const v65 = {construct:v64};
    }
}
const v66 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
const v68 = new Proxy(v15,v66);
v68[1] = "MIN_VALUE";
for (const v69 of v2) {
}
}
%NeverOptimizeFunction(main);
main();
