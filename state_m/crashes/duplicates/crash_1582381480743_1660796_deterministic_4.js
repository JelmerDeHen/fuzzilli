function main() {
const v1 = [13.37,13.37,13.37];
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
        const v29 = [];
        const v30 = {__proto__:9007199254740991,length:16,constructor:16,a:v29};
        const v32 = new Int8Array();
        const v33 = v32.slice();
        let v35 = 0;
        do {
            const v36 = v35 + 1;
            v35 = v36;
        } while (v35 < 4);
        let v39 = 0;
        const v40 = v25.slice(v11,4);
        const v41 = v39 + 1;
        const v42 = [13.37];
        const v44 = [1337,13.37,v42,-1155643050];
        let v45 = v42;
        const v47 = [1337,1337];
        const v48 = {valueOf:1337,b:v6,e:1337,d:1337,constructor:v45,__proto__:1337,a:v42};
        const v50 = [1337,1337,1337,1337,1337];
        const v51 = [v50];
        const v52 = v47[-4096];
        const v53 = v44[-3357639552];
        const v54 = 13.37 == v44;
        let v56 = 0;
        const v57 = v45.flat();
        v19[3] = v19;
        const v58 = v9();
        const v59 = v58[-2900725722];
        let v61 = undefined;
        function v62(v63,v64,v65,v66,v67) {
            'use strict'
            v61 = v23;
            return v16;
        }
    } catch(v68) {
        const v69 = {construct:v68};
    }
}
const v70 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
const v72 = new Proxy(v14,v70);
v72[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
