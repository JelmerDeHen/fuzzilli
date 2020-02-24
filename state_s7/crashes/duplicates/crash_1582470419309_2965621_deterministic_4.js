function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [v6,RegExp,v4,"iterator"];
const v8 = {a:v7,__proto__:RegExp,constructor:1337,valueOf:v6,e:13.37};
const v9 = {b:65537,c:v4,toString:v6};
let v10 = RegExp;
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
                        return v38;
                    }
                    const v49 = v43.toLocaleString();
                    const v51 = [];
                    const v52 = {__proto__:eval,constructor:"iterator",length:v51};
                    let v54 = v39;
                    const v55 = v52.__proto__(v49,v54,19873,Symbol,eval);
                    const v57 = Object.defineProperty(this,1337,v39);
                } catch(v58) {
                    try {
                        const v59 = v36[3];
                    } catch(v60) {
                        v58.valueOf = v58;
                    }
                }
                return v35;
            }
            const v61 = {deleteProperty:v35,set:v35,getPrototypeOf:v35,call:v35,preventExtensions:v35,isExtensible:v35,construct:v35,get:v35,ownKeys:v35,setPrototypeOf:v35,has:v35};
            const v63 = new Proxy(v34,v61);
            v63[1] = "MIN_VALUE";
        }
        const v64 = v28();
    }
}
const v65 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v67 = [Proxy,Float64Array,1337];
const v68 = v67 + 1;
const v69 = ~v65;
const v70 = v20();
}
%NeverOptimizeFunction(main);
main();
