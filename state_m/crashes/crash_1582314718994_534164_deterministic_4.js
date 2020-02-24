function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [-4128238821,-4128238821,13.37];
const v8 = {e:13.37,a:"iterator",c:"iterator",valueOf:13.37,toString:"iterator"};
const v9 = {e:13.37,a:13.37,toString:Int16Array,constructor:13.37,length:1337};
let v10 = 13.37;
function v11(v12,v13) {
    for (const v15 in "boolean") {
        let v18 = 0;
        do {
            let v19 = v18;
            const v20 = v19 % v12;
            const v21 = v20 + 1;
            const v24 = new Int8Array();
            const v26 = new WeakMap();
            for (const v27 in "boolean") {
            }
            const v28 = v18 + 1;
            v18 = v28;
        } while (v18 < 8);
        const v31 = [1337,1337,"MIN_VALUE",1337,1337];
        function v32(v33,v34,v35,v36) {
            'use strict'
            try {
                let v39 = 0;
                while (v39 < 4) {
                    const v40 = v39 + 1;
                    v39 = v40;
                }
                v36[3] = v36;
            } catch(v41) {
                let v43 = eval;
                const v44 = [];
                const v45 = {a:v44};
                const v46 = {__proto__:v36,constructor:v45,length:v44};
            }
            return v36;
        }
        const v47 = {deleteProperty:v32,set:v32,getPrototypeOf:v32,call:v32,preventExtensions:v32,isExtensible:v32,construct:v32,get:v32,ownKeys:v32,setPrototypeOf:1337,has:v32};
        const v49 = new Proxy(v31,v47);
        v49[1] = "MIN_VALUE";
    }
}
const v51 = [1337];
let v52 = v51;
const v53 = v11();
const v54 = ~v11;
let v55 = v51;
}
%NeverOptimizeFunction(main);
main();
