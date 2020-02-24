function main() {
function v0(v1,v2) {
    const v7 = [];
    const v10 = [1337,1337,1337,1337,1337];
    function v11(v12,v13,v14,v15) {
        'use strict'
        try {
            const v17 = {has:String,set:v11,getOwnPropertyDescriptor:String,preventExtensions:v15,defineProperty:v11,construct:String,isExtensible:v13,deleteProperty:v11,ownKeys:v14};
            const v19 = new Proxy(Float32Array,v17);
            const v20 = 1337 << v13;
            let v21 = v14;
            const v22 = v7 instanceof v19;
            const v23 = new Float32Array();
            v15[3] = v15;
        } catch(v24) {
            const v28 = [13.37,13.37,9007199254740991,13.37];
            const v29 = [1337,1337];
            const v31 = [13.37,13.37,13.37,13.37,13.37];
            const v32 = {c:v31};
            const v36 = [13.37,257,257];
            const v37 = {e:v36,d:v32};
            const v38 = {e:257,d:257};
            let v39 = v37;
            const v45 = [-492436.10105440783];
            let v46 = v45;
            const v47 = Math.pow(v46);
            const v50 = [1337,Infinity,Infinity];
            const v51 = [v47,v50];
            const v52 = v51.toLocaleString();
            const v54 = [388895.60760907806,v39,388895.60760907806];
            const v55 = RegExp(v54,..."unscopable",v54,5);
            let v56 = 0;
            const v58 = [1337];
            let v59 = v58;
            const v60 = v56 + 1;
            let v61 = v56;
            const v63 = new Uint32Array();
            let v65 = 0;
            const v66 = RegExp();
            const v67 = v65 + 1;
        }
        return v10;
    }
    const v68 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
    const v70 = new Proxy(v10,v68);
    v70[1] = "MIN_VALUE";
    v70[129] = v7;
    for (let v71 = 0; v71 < 100; v71++) {
    }
}
const v72 = v0();
const v73 = v0();
}
%NeverOptimizeFunction(main);
main();
