function main() {
const v2 = [13.37,13.37,13.37];
const v4 = [1337,1337,1337];
const v5 = [gc,gc];
const v6 = {valueOf:13.37,e:v5,d:v2,a:v5};
const v7 = {};
let v8 = 1337;
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
            const v38 = [13.37,13.37];
            const v39 = {b:v38};
            const v44 = [-2168157998,-2168157998];
            const v45 = [Reflect,13.37,2];
            let v46 = v44;
            const v47 = {get:Reflect};
            const v49 = [1337,1337,1337,1337,1337];
            function v50(v51,v52,v53,v54) {
                'use strict'
                try {
                    const v55 = new Float64Array(v53);
                    function v58(v59,v60,v61,v62,v63) {
                        'use strict'
                    }
                    const v64 = v58.toLocaleString();
                    const v66 = [];
                    const v67 = {a:v66};
                    const v68 = {__proto__:eval,constructor:v67,length:v66};
                    let v71 = 0;
                    const v72 = v68.__proto__(v64,v71,19873,Symbol);
                    const v74 = Object.defineProperty(this,1337,v54);
                } catch(v75) {
                    try {
                        const v76 = v51[3];
                    } catch(v77) {
                        v75.valueOf = v75;
                    }
                }
                return v50;
            }
            const v78 = {deleteProperty:v50,set:v50,getPrototypeOf:v50,call:v50,preventExtensions:v50,isExtensible:v50,construct:v50,get:v50,ownKeys:v50,setPrototypeOf:v50,has:v50};
            const v80 = new Proxy(v49,v78);
            v80[1] = "MIN_VALUE";
        }
        const v81 = v32();
    }
}
const v82 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v84 = new Proxy(v18,v82);
v84[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
