function main() {
function v1(v2,v3,v4,v5,v6) {
}
const v8 = {get:v1};
const v10 = Object.defineProperty(this,"b",v8);
const v16 = [1337,1337,1337,1337,1337];
function v17(v18,v19,v20,v21) {
    'use strict'
    try {
        const v23 = {has:String,set:v17,getOwnPropertyDescriptor:String,preventExtensions:v21,defineProperty:v17,construct:String,isExtensible:v19,deleteProperty:v17,ownKeys:v20};
        const v25 = new Proxy(Float32Array,v23);
        const v26 = 1337 << v19;
        let v27 = v20;
        v21[3] = v21;
    } catch(v28) {
        const v31 = [1337,1337,1337,1337,1337];
        function v32(v33,v34,v35,v36) {
            'use strict'
            const v38 = eval();
            try {
                v36[3] = v36;
            } catch(v39) {
                const v44 = [-2331916614,-2331916614,-2331916614];
                const v45 = [3664180981,3664180981,"string","string"];
                const v46 = {valueOf:v45,length:v44,toString:parseFloat,constructor:"string",c:parseFloat};
                function v47(v48,v49) {
                    for (const v51 of "pvU0UUjoya") {
                        let v53 = v48;
                        while (v53 < 1) {
                            for (let v57 = 0; v57 < 0; v57++) {
                            }
                        }
                    }
                }
                const v58 = v44.__proto__;
                const v59 = new v47(v46);
                const v63 = [v32];
                const v65 = [255,255,255];
                const v66 = {a:255,toString:arguments,c:v63,__proto__:v65,valueOf:DataView,constructor:"gM8oAednYn"};
            }
        }
        const v67 = {deleteProperty:v32,set:v32,getPrototypeOf:v32,call:v32,preventExtensions:v32,isExtensible:v32,construct:v32,get:v32,ownKeys:v32,setPrototypeOf:v32,has:v32};
        const v69 = new Proxy(v31,v67);
        v69[1] = "MIN_VALUE";
    }
}
const v70 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
const v72 = new Proxy(v16,v70);
v72[1] = "MIN_VALUE";
for (let v74 = 0; v74 < 2; v74++) {
}
for (let v78 = 0; v78 < 100; v78++) {
}
}
%NeverOptimizeFunction(main);
main();
