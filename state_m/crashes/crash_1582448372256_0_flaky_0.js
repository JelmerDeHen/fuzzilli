function main() {
const v3 = [13.37];
const v5 = [1337];
const v6 = [];
const v7 = {};
const v8 = {c:v6,length:-65535};
let v9 = 1337;
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v14 = [];
const v15 = {b:1337,c:v11,d:13.37,a:v13,length:v14,valueOf:1337};
const v18 = [1337,1337,1337,1337,1337];
function v19(v20,v21,v22,v23) {
    'use strict'
    try {
        v23[3] = v23;
    } catch(v24) {
        const v28 = [-2331916614,-2331916614,-2331916614];
        const v29 = [3664180981,3664180981,"string","string"];
        function v30(v31,v32) {
            const v36 = [1337,1337,1337,1337,1337];
            function v37(v38,v39,v40,v41) {
                'use strict'
                try {
                    const v42 = new Float64Array(v40);
                    function v45(v46,v47,v48,v49,v50) {
                        'use strict'
                    }
                    const v51 = v45.toLocaleString();
                    const v53 = [];
                    const v54 = {a:v53};
                    const v55 = {__proto__:eval,constructor:v54,length:v53};
                    let v58 = 0;
                    const v59 = v55.__proto__(v51,v58,19873,Symbol);
                    const v61 = Object.defineProperty(this,1337,v41);
                } catch(v62) {
                    try {
                        const v63 = v38[3];
                    } catch(v64) {
                        v62.valueOf = v62;
                    }
                }
                return v37;
            }
            const v65 = {deleteProperty:v37,set:v37,getPrototypeOf:v37,call:v37,preventExtensions:v37,isExtensible:v37,construct:v37,get:v37,ownKeys:v37,setPrototypeOf:v37,has:v37};
            const v67 = new Proxy(v36,v65);
            v67[1] = "MIN_VALUE";
        }
        const v68 = v30();
    }
}
const v69 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v71 = new Proxy(v18,v69);
for (let v75 = 0; v75 < 4; v75++) {
    const v76 = Number();
}
const v77 = [v71];
const v78 = v19();
}
%NeverOptimizeFunction(main);
main();
