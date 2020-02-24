function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [v5,v3,1337,129];
const v7 = {e:v3,a:v3,toString:"PI",__proto__:v5};
const v8 = {};
const v12 = [1337,13.37,1337,Uint8Array];
let v13 = v12;
const v15 = [1337,1337,1337,1337,1337];
const v16 = {valueOf:v15,__proto__:v15};
let v18 = 13.37;
const v21 = [1337,1337,1337,1337,1337];
function v22(v23,v24,v25,v26) {
    'use strict'
    try {
        const v30 = [1337,1337];
        const v32 = new ArrayBuffer();
        v18 = v25;
        let v35 = 0;
        do {
            const v36 = v35 + 1;
            v35 = v36;
        } while (v35 < 4);
        let v38 = 0;
        const v39 = v32.slice(v18);
        const v40 = v38 + 1;
        const v42 = v13.__proto__;
        const v43 = v24.constructor;
        const v44 = [13.37];
        const v46 = [1337,13.37,v44,-1155643050];
        let v47 = v44;
        const v49 = [1337,1337];
        const v50 = {valueOf:1337,b:v13,e:1337,d:1337,constructor:v47,__proto__:1337,a:v44};
        const v52 = [1337,1337,1337,1337,1337];
        const v53 = [v52];
        const v54 = v49[-4096];
        const v55 = v46[-3357639552];
        const v56 = 13.37 == v46;
        let v58 = 0;
        const v59 = v47.flat();
        v26[3] = v26;
        const v60 = v16();
        const v61 = v60[-2900725722];
        let v63 = undefined;
        function v64(v65,v66,v67,v68,v69) {
            'use strict'
            v63 = v30;
            return v26;
        }
        const v71 = v30.__proto__;
        const v72 = v39 < v44;
        const v73 = undefined[1337];
        const v74 = v73();
        for (const v75 of v39) {
        }
        let v76 = 0;
    } catch(v77) {
        const v78 = {construct:v77};
    }
}
const v79 = {deleteProperty:v22,set:v22,getPrototypeOf:v22,call:v22,preventExtensions:v22,isExtensible:v22,construct:v22,get:v22,ownKeys:v22,setPrototypeOf:v22,has:v22};
const v81 = new Proxy(v21,v79);
v81[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
