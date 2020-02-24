function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = [v3,v5,v3];
const v7 = {__proto__:v5,toString:"description",b:1337,valueOf:v6,constructor:1337,length:"description"};
const v8 = {__proto__:v5,toString:"description",d:v5,a:String};
let v9 = v8;
const v12 = [13.37,13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337,1337];
const v15 = {e:v12,length:v14,constructor:-606053622};
let v16 = v15;
let v18 = this;
let v19 = v18;
const v22 = new Proxy(v19,Object);
const v23 = Object.freeze();
try {
    const v25 = [1337];
    let v26 = v25;
    let v28 = undefined;
    function v29(v30,v31) {
    }
    const v33 = [1337];
    let v34 = v33;
    const v35 = v29();
    let v37 = 0;
    const v39 = [13.37,13.37,13.37,13.37,13.37];
    const v41 = [1337,1337,1337,1337,1337];
    let v43 = 0;
    const v44 = v43 + 1;
    const v46 = [1337];
    const v48 = [6,6,6,6,6];
    function v49(v50,v51,v52,v53) {
        'use strict'
    }
    const v54 = {deleteProperty:v49,set:v49,getPrototypeOf:v49,call:v49,preventExtensions:v49,isExtensible:v49,construct:v49,get:v49,ownKeys:v49,setPrototypeOf:v49,has:v49};
    const v56 = new Proxy(v48,v54);
    function v57(v58,v59) {
    }
    for (let v63 = 0; v63 < 100; v63++) {
    }
    for (const v65 in "object") {
        const v68 = [1337,1337,1337,1337,1337];
        function v69(v70,v71,v72,v73) {
            'use strict'
            try {
                v73[3] = v73;
            } catch(v74) {
                const v80 = Math.hypot(-1970853828,13.37,"boolean",DataView);
                const v84 = [v69];
                const v86 = [255,255,255];
                const v87 = {a:255,toString:arguments,c:v84,__proto__:v86,valueOf:DataView,constructor:"gM8oAednYn"};
            }
            return v68;
        }
        const v88 = {deleteProperty:v69,set:v69,getPrototypeOf:v69,call:v69,preventExtensions:v69,isExtensible:v69,construct:v69,get:v69,ownKeys:v69,setPrototypeOf:v69,has:v69};
        const v90 = new Proxy(v68,v88);
        v90[1] = "MIN_VALUE";
    }
} catch(v91) {
}
}
%NeverOptimizeFunction(main);
main();
