function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [v4,13.37,v6];
const v8 = {__proto__:-3096162582,toString:13.37};
const v9 = {valueOf:v6};
let v10 = v4;
const v12 = {};
for (const v14 in "object") {
    const v20 = [1337,1337,1337,1337,1337];
    function v21(v22,v23,v24,v25) {
        'use strict'
        try {
            const v27 = Object.getOwnPropertyNames(v25);
        } catch(v28) {
        }
    }
    const v29 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:8,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:v21,has:v21};
    const v31 = new Proxy(v20,v29);
    v31[1] = "MIN_VALUE";
    const v32 = [1337,1337,1337,1337,1337];
    function v33(v34,v35,v36,v37) {
        'use strict'
        try {
            const v40 = new Float32Array(19873);
            v37[3] = v37;
        } catch(v41) {
            let v44 = 0;
            const v45 = v44 + 1;
            v44 = v45;
        }
        return v32;
    }
    const v47 = {deleteProperty:v33,set:v33,getPrototypeOf:v33,call:v33,preventExtensions:v33,isExtensible:v33,construct:v33,get:v33,ownKeys:v33,setPrototypeOf:v33,has:v33};
    const v49 = new Proxy(v32,v47);
    v49[1] = "MIN_VALUE";
    const v51 = [1337];
    let v52 = v51;
    let v54 = undefined;
    for (const v56 in "boolean") {
        let v59 = 0;
        do {
            let v61 = 0;
            const v62 = v61 + 1;
            v61 = v62;
            const v63 = v59 + 1;
            v59 = v63;
            const v68 = [13.37];
            const v73 = [13.37,13.37,13.37,13.37,13.37];
            const v74 = [v73,v73,v73];
            const v75 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v73,__proto__:v74};
            const v76 = [v75];
            const v77 = new WeakMap(v76);
            v68.__proto__ = v77;
        } while (v59 < 8);
        const v81 = [1337,1337,1337,1337,1337];
        function v82(v83,v84,v85,v86) {
            'use strict'
            try {
                v86[3] = v86;
            } catch(v87) {
                try {
                    const v90 = [v87,13.37];
                    const v91 = v90[1024];
                    const v92 = {has:Function,construct:v91,toString:v91,deleteProperty:Function,setPrototypeOf:Function,preventExtensions:v91,isExtensible:v91,call:v91,set:Function,getOwnPropertyDescriptor:Function};
                    const v94 = new Proxy(v90,v92);
                    for (const v95 in v94) {
                    }
                } catch(v96) {
                }
                function v97(v98,v99) {
                    let v103 = 0;
                    const v104 = v103 + 1;
                    v103 = v104;
                }
                const v105 = v97();
            }
            return v81;
        }
        const v106 = {deleteProperty:v82,set:v82,getPrototypeOf:v82,call:v82,preventExtensions:v82,isExtensible:v82,construct:v82,get:v82,ownKeys:v82,setPrototypeOf:v82,has:v82};
        const v108 = new Proxy(v81,v106);
        v108[1] = "MIN_VALUE";
    }
}
const v109 = gc();
}
%NeverOptimizeFunction(main);
main();
