function main() {
const v4 = [13.37];
const v6 = [1337];
const v7 = [1337,"symbol",1337];
const v8 = {a:512,toString:parseFloat,valueOf:parseFloat,length:13.37,e:"symbol",b:parseFloat};
const v9 = {toString:512};
let v10 = 512;
const v13 = [13.37];
const v15 = [1337,1337,1337,1337];
const v16 = [v13,13.37,v15];
const v17 = {constructor:13.37};
const v18 = {toString:v13,constructor:v13,valueOf:v15};
let v19 = Symbol;
const v22 = [13.37,13.37,13.37,13.37];
const v23 = v22.shift();
const v24 = 13.37 === v23;
const v25 = v15[1941688260];
const v29 = [1337,1337,1337,1337,1337];
function v30(v31,v32,v33,v34) {
    'use strict'
    try {
        v34[3] = v34;
    } catch(v35) {
        const v40 = [-2331916614,-2331916614,-2331916614];
        const v41 = [3664180981,3664180981,"string","string"];
        const v42 = {valueOf:v41,length:v40,toString:parseFloat,constructor:"string",c:parseFloat};
        function v43(v44,v45) {
            const v48 = [1337,1337,1337,1337,1337];
            function v49(v50,v51,v52,v53) {
                'use strict'
                try {
                    const v54 = new Float64Array(v52);
                    function v55(v56,v57,v58,v59,v60) {
                        'use strict'
                    }
                    const v61 = v55.toLocaleString();
                    const v62 = {};
                    const v63 = [v62];
                    let v66 = 0;
                    do {
                        const v67 = v66 + 1;
                        v66 = v67;
                    } while (v66 < 7);
                    Symbol[v53] = "U8Sf0oI+2+";
                    v61[v49] = parseFloat;
                } catch(v68) {
                }
                return v49;
            }
            const v69 = {deleteProperty:v49,set:v49,getPrototypeOf:v49,call:v49,preventExtensions:v49,isExtensible:v49,construct:v49,get:v49,ownKeys:v49,setPrototypeOf:v49,has:v49};
            const v71 = new Proxy(v48,v69);
            v71[1] = "MIN_VALUE";
        }
        const v72 = v43();
    }
}
const v73 = {deleteProperty:v30,set:v30,getPrototypeOf:v30,call:v30,preventExtensions:v30,isExtensible:v30,construct:v30,get:v30,ownKeys:v30,setPrototypeOf:v30,has:v30};
const v75 = new Proxy(v29,v73);
v75[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
