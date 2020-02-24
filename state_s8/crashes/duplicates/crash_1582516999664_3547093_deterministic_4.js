function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v6 = [1337,1337];
const v7 = ["6lmMOsTfkg",String,String,"6lmMOsTfkg"];
const v8 = {toString:v4,constructor:v6,b:1337,__proto__:"6lmMOsTfkg",e:String};
const v9 = {b:v6,c:v8,valueOf:2147483648};
let v10 = v9;
const v12 = [13.37,13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337];
const v15 = [];
const v16 = {b:1337,c:v12,d:13.37,a:v14,length:v15,valueOf:1337};
const v19 = [1337,1337,1337,1337,1337];
function v20(v21,v22,v23,v24) {
    'use strict'
    try {
        v24[3] = v24;
    } catch(v25) {
        const v27 = [-2331916614,-2331916614,-2331916614];
        function v28(v29,v30) {
            const v34 = [1337,1337,1337,1337,1337];
            function v35(v36,v37,v38,v39) {
                'use strict'
                try {
                    const v40 = new Float64Array(v38);
                    function v43(v44,v45,v46,v47,v48) {
                        'use strict'
                    }
                    const v49 = v43.toLocaleString();
                    const v51 = [];
                    const v52 = {a:v51};
                    const v53 = {__proto__:eval,constructor:v52,length:v51};
                    let v56 = 0;
                    const v57 = v53.__proto__(v49,v56,19873,Symbol);
                    const v59 = Object.defineProperty(this,1337,v39);
                } catch(v60) {
                    try {
                        const v61 = v36[3];
                    } catch(v62) {
                        v60.valueOf = v60;
                    }
                }
                return v35;
            }
            const v63 = {deleteProperty:v35,set:v35,getPrototypeOf:v35,call:v35,preventExtensions:v35,isExtensible:v35,construct:v35,get:v35,ownKeys:v35,setPrototypeOf:v35,has:v35};
            const v65 = new Proxy(v34,v63);
            v65[1] = "MIN_VALUE";
        }
        const v66 = v28();
    }
}
const v67 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v69 = new Proxy(v19,v67);
const v70 = v20(v67,v14,v69);
}
%NeverOptimizeFunction(main);
main();
