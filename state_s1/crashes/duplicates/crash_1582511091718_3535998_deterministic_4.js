function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = [v6,Proxy,v4,Proxy];
const v8 = {valueOf:Proxy,e:1337,__proto__:256};
const v9 = 256 & "hasInstance";
const v10 = {b:v7,valueOf:256,c:v7,__proto__:256,constructor:Proxy,length:v8};
let v11 = v8;
const v14 = [13.37,1337,13.37,13.37,13.37];
const v16 = (1337).__proto__;
let v17 = v14;
const v20 = [13.37,13.37,13.37,13.37];
const v22 = [1337,1337,1337,1337];
const v23 = [];
const v24 = {b:1337,c:v20,d:13.37,a:v22,length:v23,valueOf:1337};
const v28 = [1337,1337,1337,1337,1337];
function v29(v30,v31,v32,v33) {
    'use strict'
    try {
        v33[3] = v33;
    } catch(v34) {
        const v39 = [-2331916614,-2331916614,-2331916614];
        const v40 = [3664180981,3664180981,"string","string"];
        const v41 = {valueOf:v40,length:v39,toString:parseFloat,constructor:"string",c:parseFloat};
        function v42(v43,v44) {
            const v48 = [1337,1337,1337,1337,1337];
            function v49(v50,v51,v52,v53) {
                'use strict'
                try {
                    const v54 = new Float64Array(v52);
                    function v57(v58,v59,v60,v61,v62) {
                        'use strict'
                    }
                    const v63 = v57.toLocaleString();
                    const v65 = [];
                    const v66 = {a:v65};
                    const v67 = {__proto__:eval,constructor:v66,length:v65};
                    let v70 = 0;
                    const v71 = v67.__proto__(v63,v70,19873,Symbol);
                    const v73 = Object.defineProperty(this,1337,v53);
                } catch(v74) {
                    try {
                        const v75 = v50[3];
                    } catch(v76) {
                        v74.valueOf = v74;
                    }
                }
                return v49;
            }
            const v77 = {deleteProperty:v49,set:v49,getPrototypeOf:v49,call:v49,preventExtensions:v49,isExtensible:v49,construct:v49,get:v49,ownKeys:v49,setPrototypeOf:v49,has:v49};
            const v79 = new Proxy(v48,v77);
            v79[1] = "MIN_VALUE";
        }
        const v80 = v42();
    }
}
const v81 = {deleteProperty:v29,set:v29,getPrototypeOf:v29,call:v29,preventExtensions:v29,isExtensible:v29,construct:v29,get:v29,ownKeys:v29,setPrototypeOf:v29,has:v29};
const v83 = new Proxy(v28,v81);
v83[1] = "MIN_VALUE";
const v85 = 2.2250738585072014e-308 / 9007199254740991;
let v86 = v17;
}
%NeverOptimizeFunction(main);
main();
