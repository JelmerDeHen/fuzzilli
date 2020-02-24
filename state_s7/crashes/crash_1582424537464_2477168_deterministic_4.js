function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [];
const v7 = {c:13.37,a:13.37,toString:v6,__proto__:1337,length:13.37};
const v8 = {e:1337,a:v3,toString:-65535,valueOf:v5};
let v9 = Uint16Array;
const v12 = [1337,1337,1337,1337,1337];
function v13(v14,v15,v16,v17) {
    'use strict'
    try {
        v17[3] = v17;
    } catch(v18) {
        const v20 = [v18,-2331916614,-2331916614];
        const v23 = [1337,1337,1337,1337,1337];
        function v24(v25,v26,v27,v28) {
            'use strict'
            try {
                for (let v32 = 0; v32 < 100; v32++) {
                    const v33 = v24();
                }
                const v34 = [];
                const v35 = [];
                let v40 = 13.37;
                for (let v41 = 0; v41 < 512; v41++) {
                    let v43 = v34;
                    try {
                    } catch(v44) {
                    }
                    const v45 = v43.sqrt();
                    for (let v49 = 0; v49 < 7; v49++) {
                    }
                    let v50 = 0;
                    const v51 = v50 + 1;
                    const v53 = Int32Array();
                }
            } catch(v54) {
            }
        }
        const v55 = {deleteProperty:v24,set:v24,getPrototypeOf:v24,call:v24,preventExtensions:v24,isExtensible:v24,construct:v24,get:v24,ownKeys:v24,setPrototypeOf:v20,has:v24};
        const v57 = new Proxy(v23,v55);
        v57[1] = "MIN_VALUE";
    }
}
const v58 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v60 = new Proxy(v12,v58);
v60[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
