function main() {
const v1 = [13.37];
const v4 = [1337,1337,1337,1337,1337];
function v5(v6,v7,v8,v9) {
    'use strict'
    const v13 = [1337,13.37,1337,Uint8Array];
    let v14 = v13;
    const v16 = [1337,1337,1337,1337,1337];
    const v17 = {valueOf:v16,__proto__:v16};
    let v19 = 13.37;
    const v22 = [1337,1337,1337,1337,1337];
    function v23(v24,v25,v26,v27) {
        'use strict'
        try {
            const v31 = [1337,1337];
            const v33 = new ArrayBuffer();
            v19 = v26;
            let v36 = 0;
            do {
                const v37 = v36 + 1;
                v36 = v37;
            } while (v36 < 4);
            let v39 = 0;
            const v40 = v33.slice(v19);
            const v41 = v39 + 1;
            const v42 = [13.37];
            const v44 = [1337,13.37,v42,-1155643050];
            let v45 = v42;
            const v47 = [1337,1337];
            const v48 = {valueOf:1337,b:v14,e:1337,d:1337,constructor:v45,__proto__:1337,a:v42};
            const v50 = [1337,1337,1337,1337,1337];
            const v51 = [v50];
            const v52 = v47[-4096];
            const v53 = v44[-3357639552];
            const v54 = 13.37 == v44;
            let v56 = 0;
            const v57 = v45.flat();
            v27[3] = v27;
            const v58 = v17();
            const v59 = v58[-2900725722];
            let v61 = undefined;
            const v63 = {get:v5,set:v25};
            const v65 = Object.defineProperty(v1,"a");
            const v66 = v44.__proto__;
            let v67 = v50;
            for (let v71 = 0; v71 < 100; v71++) {
            }
            let v73 = 0;
        } catch(v74) {
            const v75 = {construct:v74};
        }
    }
    const v76 = {deleteProperty:v23,set:v23,getPrototypeOf:v23,call:v23,preventExtensions:v23,isExtensible:v23,construct:v23,get:v23,ownKeys:v23,setPrototypeOf:v23,has:v23};
    const v78 = new Proxy(v22,v76);
    v78[1] = "MIN_VALUE";
}
const v79 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
const v81 = new Proxy(v4,v79);
v81[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
