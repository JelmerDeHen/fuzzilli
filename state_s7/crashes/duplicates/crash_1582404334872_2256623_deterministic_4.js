function main() {
const v2 = [13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [];
const v6 = {a:v2};
const v7 = {a:v6,length:v5,b:1337,e:undefined,toString:13.37};
let v8 = 13.37;
const v10 = [13.37,13.37,13.37,13.37];
const v12 = [1337,1337,1337,1337];
const v13 = [];
const v14 = {b:1337,c:v10,d:13.37,a:v12,length:v13,valueOf:1337};
const v17 = [1337,1337];
const v20 = new ArrayBuffer();
const v21 = v20.slice();
let v23 = undefined;
const v24 = new DataView(v21);
let v28 = -2;
const v29 = 3156875969 <= 8;
let v30 = v29;
const v33 = [1337,1337,1337,1337,1337];
function v34(v35,v36,v37,v38) {
    'use strict'
    try {
        v38[3] = v38;
    } catch(v39) {
        const v44 = [-2331916614,-2331916614,-2331916614];
        const v45 = [3664180981,3664180981,"string","string"];
        const v46 = {valueOf:v45,length:v44,toString:parseFloat,constructor:"string",c:parseFloat};
        function v47(v48,v49) {
            const v53 = [1337,1337,1337,1337,1337];
            function v54(v55,v56,v57,v58) {
                'use strict'
                try {
                    const v59 = new Float64Array(v57);
                    function v61(v62,v63,v64,v65,v66) {
                        'use strict'
                    }
                    const v67 = v61.toLocaleString();
                    const v69 = [];
                    const v70 = {a:v69};
                    const v71 = {__proto__:eval,constructor:v70,length:v69};
                    const v72 = v71.__proto__(v67);
                    const v74 = Object.defineProperty(this,1337,v58);
                } catch(v75) {
                    try {
                        const v76 = v55[3];
                    } catch(v77) {
                        v75.valueOf = v75;
                    }
                }
                return v54;
            }
            const v78 = {deleteProperty:v54,set:v54,getPrototypeOf:v54,call:v54,preventExtensions:v54,isExtensible:v54,construct:v54,get:v54,ownKeys:v54,setPrototypeOf:v54,has:v54};
            const v80 = new Proxy(v53,v78);
            v80[1] = "MIN_VALUE";
        }
        const v81 = v47();
    }
}
const v82 = {deleteProperty:v34,set:v34,getPrototypeOf:v34,call:v34,preventExtensions:v34,isExtensible:v34,construct:v34,get:v34,ownKeys:v34,setPrototypeOf:v34,has:v34};
const v84 = new Proxy(v33,v82);
v84[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
