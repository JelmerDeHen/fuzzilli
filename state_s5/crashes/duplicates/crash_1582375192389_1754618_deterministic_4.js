function main() {
const v3 = [1337,13.37,1337,Uint8Array];
let v4 = v3;
const v6 = [1337,1337,1337,1337,1337];
const v7 = {valueOf:1337,__proto__:v6};
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
        let v30 = 0;
        const v31 = v23.slice(v9,4);
        const v32 = v30 + 1;
        const v33 = [13.37];
        const v35 = [1337,13.37,v33,-1155643050];
        let v36 = v33;
        const v38 = [1337,1337];
        const v39 = {valueOf:1337,b:v4,e:1337,d:1337,constructor:v36,__proto__:1337,a:v33};
        const v41 = [1337,1337,1337,1337,1337];
        const v42 = [v41];
        const v43 = v38[-4096];
        const v44 = v35[-3357639552];
        const v45 = 13.37 == v35;
        let v47 = 0;
        const v48 = v36.flat();
        v17[3] = v17;
        const v49 = v7();
        const v50 = v49[-2900725722];
        let v52 = undefined;
        const v55 = [13.37,13.37];
        const v57 = [1337,"search",1337,1337];
        const v58 = [];
        const v59 = {};
        const v60 = {};
        let v61 = v59;
        const v66 = [13.37,13.37];
        const v68 = [1337,1337,1337,1337,1337];
        const v69 = [];
        const v70 = {e:"replace",a:2878878438,c:13.37,b:2878878438,__proto__:v66,length:Proxy,toString:v66};
        const v71 = {__proto__:1337,length:"replace",e:v68,toString:v69,a:2878878438};
        let v72 = "replace";
        const v75 = [13.37,13.37];
        const v77 = [257,257,257];
        const v78 = [-2008211595];
        const v80 = Uint16Array();
        const v81 = {valueOf:v78};
        const v82 = {c:v78};
        let v83 = 257;
        let v85 = 165041.8007016254;
        let v87 = -256;
        const v89 = {};
        const v91 = String.fromCharCode();
        const v92 = Function();
    } catch(v93) {
        const v94 = {construct:v93};
    }
}
const v95 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v97 = new Proxy(v12,v95);
v97[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
