function main() {
const v4 = [1337,13.37,1337,Uint8Array];
let v5 = v4;
const v7 = [1337,1337,1337,1337,1337];
const v8 = {valueOf:v7,__proto__:v7};
let v10 = 13.37;
const v13 = [1337,1337,1337,1337,1337];
function v14(v15,v16,v17,v18) {
    'use strict'
    try {
        const v22 = [1337,1337];
        const v24 = new ArrayBuffer();
        v10 = v17;
        let v27 = 0;
        do {
            const v28 = v27 + 1;
            v27 = v28;
        } while (v27 < 4);
        const v31 = new Int8Array();
        const v32 = v31.slice();
        let v34 = 0;
        const v35 = v24.slice(v10,4);
        const v36 = v34 + 1;
        const v37 = [13.37];
        const v39 = [1337,13.37,v37,-1155643050];
        let v40 = v37;
        const v42 = [1337,1337];
        const v43 = {valueOf:1337,b:v5,e:1337,d:1337,constructor:v40,__proto__:1337,a:v37};
        const v45 = [1337,1337,1337,1337,1337];
        const v46 = [v45];
        const v47 = v42[-4096];
        const v48 = v39[-3357639552];
        const v49 = 13.37 == v39;
        let v51 = 0;
        const v52 = v40.flat();
        v18[3] = v18;
        const v53 = v8();
        const v54 = v53[-2900725722];
        function v55(v56,v57,v58,v59,v60) {
            'use strict'
            return v18;
        }
        for (const v61 of v15) {
        }
        const v62 = v14();
        let v63 = v45;
        const v64 = v16.setInt32();
        const v65 = Number(...v52,v16);
    } catch(v66) {
        const v67 = {construct:v66};
    }
}
const v68 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
const v70 = new Proxy(v13,v68);
v70[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
