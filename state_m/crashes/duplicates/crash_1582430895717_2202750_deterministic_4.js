function main() {
const v2 = [13.37,13.37];
const v4 = [1337,1337,1337,1337];
const v5 = ["+BmFzNgc3Y",v4];
const v6 = {d:1337,c:13.37,b:v5,toString:"+BmFzNgc3Y"};
const v7 = {c:v6,d:v4,b:1337,constructor:v2,length:v4,a:v6};
let v8 = v7;
const v10 = [13.37,13.37,13.37,13.37];
const v12 = [1337,1337,1337,1337];
const v13 = [];
const v14 = {b:1337,c:v10,d:13.37,a:v12,length:v13,valueOf:1337};
const v18 = [1337,1337,1337,1337,1337];
function v19(v20,v21,v22,v23) {
    'use strict'
    try {
        v23[3] = v23;
    } catch(v24) {
        const v29 = [-2331916614,-2331916614,-2331916614];
        const v30 = [3664180981,3664180981,"string","string"];
        const v31 = {valueOf:v30,length:v29,toString:parseFloat,constructor:"string",c:parseFloat};
        function v32(v33,v34) {
            const v38 = [1337,1337,1337,1337,1337];
            function v39(v40,v41,v42,v43) {
                'use strict'
                try {
                    const v44 = new Float64Array(v42);
                    const v49 = [13.37,13.37];
                    const v51 = [1337,1337,1337];
                    const v52 = [13.37,"arguments",v51,v49];
                    const v53 = {e:"arguments",b:13.37,c:v52,toString:13.37,constructor:13.37,length:1536414840,__proto__:"arguments",a:1536414840};
                    const v54 = {e:v53,c:v51,valueOf:v49};
                    let v55 = v54;
                    function v57(v58,v59,v60,v61,v62) {
                        'use strict'
                    }
                    const v63 = v57.toLocaleString();
                    const v65 = [];
                    const v66 = {a:v65};
                    const v67 = {__proto__:eval,constructor:v66,length:v65};
                    let v70 = 0;
                    const v71 = v67.__proto__(v63,v70,19873,Symbol);
                    const v73 = Object.defineProperty(this,1337,v43);
                } catch(v74) {
                    try {
                        const v75 = v40[3];
                    } catch(v76) {
                        v74.valueOf = v74;
                    }
                }
                return v39;
            }
            const v77 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:v39,has:v39};
            const v79 = new Proxy(v38,v77);
            v79[1] = "MIN_VALUE";
        }
        const v80 = v32();
    }
}
const v81 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v83 = new Proxy(v18,v81);
v83[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
