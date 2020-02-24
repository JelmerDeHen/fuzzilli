function main() {
const v1 = [1337,1337];
const v5 = [1337,13.37,1337,Uint8Array];
let v6 = v5;
const v8 = [1337,1337,1337,1337,1337];
const v9 = {valueOf:v8,__proto__:v8};
let v11 = 13.37;
const v14 = [1337,1337,1337,1337,1337];
function v15(v16,v17,v18,v19) {
    'use strict'
    try {
        const v23 = [1337,1337];
        const v25 = new ArrayBuffer();
        v11 = v18;
        let v28 = 0;
        do {
            const v29 = v28 + 1;
            v28 = v29;
        } while (v28 < 4);
        let v32 = 0;
        const v33 = v25.slice(v11,4);
        const v34 = v32 + 1;
        const v35 = [13.37];
        const v37 = [1337,13.37,v35,-1155643050];
        let v38 = v35;
        const v39 = "MIN_VALUE".__proto__;
        let v40 = ArrayBuffer;
        if (v17) {
        } else {
            function v41(v42,v43,v44,v45) {
                const v46 = v17[-782680625];
            }
            v40 = v41;
        }
        const v48 = [1337,1337];
        const v49 = {valueOf:1337,b:v6,e:1337,d:1337,constructor:v38,__proto__:1337,a:v35};
        const v51 = [1337,1337,1337,1337,1337];
        const v52 = [v51];
        const v53 = v48[-4096];
        const v54 = v37[-3357639552];
        const v55 = 13.37 == v37;
        let v57 = 0;
        const v58 = v38.flat();
        v19[3] = v19;
        const v59 = v9();
        const v60 = v59[-2900725722];
        let v62 = 0;
    } catch(v63) {
        const v64 = {construct:v63};
        const v65 = v16.every(v1,"MIN_VALUE",v17,v64);
        const v66 = !v19;
        let v67 = 1337;
        let v68 = v66;
        let v70 = 0;
        const v71 = v65();
        const v72 = v70 + 1;
    }
}
const v73 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
const v75 = new Proxy(v14,v73);
v75[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
