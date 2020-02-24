function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [];
const v7 = {toString:1337,c:Object,length:v3,valueOf:v6};
const v8 = {b:v7,constructor:"c",e:Object,length:1337,d:Object,valueOf:v5};
let v9 = v5;
const v12 = [1337,1337,1337,1337,1337];
const v14 = [1337,1337,1337];
const v15 = [];
let v17 = 0;
const v18 = v17 + 1;
const v20 = [13.37,13.37,13.37,13.37];
const v22 = [1337,1337];
const v23 = {e:13.37,valueOf:v20,__proto__:v22,toString:v22,a:v20,d:v20};
with (v23) {
    const v25 = [1337,1337,1337,1337,1337];
    function v26(v27,v28) {
    }
    const v29 = v25.forEach(v26);
}
let v31 = 0;
function v33(v34,v35,v36,v37) {
    'use strict'
    try {
        const v38 = {};
        let v39 = v38;
        const v43 = [13.37,13.37,13.37,13.37];
        for (let v47 = 0; v47 < 100; v47++) {
            const v48 = v33();
        }
        const v50 = [1337,1337,1337,1337,1337];
        const v51 = [v43,v50,-2268785948,v50];
        const v53 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
        function v54(v55,v56,v57,v58) {
            'use strict'
            const v59 = v58.setUint16();
            const v60 = v59(v34);
        }
        const v61 = {deleteProperty:v54,set:v54,getPrototypeOf:v54,call:v54,preventExtensions:v54,isExtensible:v54,construct:v54,get:v54,ownKeys:v54,setPrototypeOf:v54,has:v54};
        const v63 = Proxy();
        const v65 = [2153514987,1,13.37,13.37,v37];
        const v66 = [v39,v65,v65];
    } catch(v67) {
    }
}
const v68 = {deleteProperty:v33,set:v33,getPrototypeOf:v33,call:v33,preventExtensions:v33,isExtensible:v33,construct:v33,get:v33,ownKeys:v33,setPrototypeOf:v33,has:v33};
const v70 = new Proxy(v12,v68);
v70[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
