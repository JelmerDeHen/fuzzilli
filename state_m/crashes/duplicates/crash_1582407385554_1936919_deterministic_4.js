function main() {
const v5 = [1337,13.37,1337,Uint8Array];
let v6 = v5;
const v8 = [6,6,6,6,6];
const v9 = {valueOf:v8,__proto__:v8};
let v11 = 13.37;
const v14 = [1337,1337,1337,1337,1337];
function v15(v16,v17,v18,v19) {
    'use strict'
    try {
        String[1337] = "di1SUVrfcK";
        const v21 = v9.__proto__;
        const v22 = String();
        let v23 = 13.37;
        if (v17) {
            for (const v24 of v6) {
            }
            v23 = v22;
        } else {
            v23 = 6;
        }
        const v27 = [1337,1337];
        const v29 = new ArrayBuffer();
        v11 = v18;
        let v31 = 0;
        const v32 = v31 + 1;
        let v34 = 0;
        const v35 = v29.slice(v11);
        const v36 = v34 + 1;
        const v37 = [13.37];
        const v39 = [1337,13.37,v37,-1155643050];
        let v40 = v37;
        const v42 = [-4052802990,-4052802990];
        const v43 = {valueOf:1337,b:v6,e:6,d:1337,constructor:v40,__proto__:6,a:v37};
        const v45 = [1337,1337,1337,1337,1337];
        const v46 = [v45];
        const v47 = v42[-4096];
        const v48 = v39[-3357639552];
        const v49 = 13.37 == v39;
        let v51 = 0;
        const v52 = v40.flat();
        v19[3] = v19;
        const v53 = v9();
        const v54 = v53[-2900725722];
        function v55(v56,v57,v58,v59,v60) {
            'use strict'
            return v16;
        }
        let v62 = -3965921340;
    } catch(v63) {
        const v64 = {construct:v63};
    }
}
const v65 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
const v67 = new Proxy(v14,v65);
v67[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
