function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337];
const v6 = [];
const v7 = {__proto__:1337,a:Symbol,e:v6,toString:-65537,valueOf:1337,d:v5};
const v8 = {__proto__:v3,a:v7,length:v5,b:v7,constructor:Symbol};
let v9 = v8;
const v11 = [13.37,13.37,13.37,13.37];
const v13 = [1337,1337,1337,1337];
const v14 = [];
const v15 = {b:1337,c:v11,d:13.37,a:v13,length:v14,valueOf:1337};
const v19 = [1337,1337,1337,1337,1337];
function v20(v21,v22,v23,v24) {
    'use strict'
    try {
        v24[3] = v24;
    } catch(v25) {
        const v30 = [-2331916614,-2331916614,-2331916614];
        const v31 = [3664180981,3664180981,"string","string"];
        const v32 = {valueOf:v31,length:v30,toString:parseFloat,constructor:"string",c:parseFloat};
        function v33(v34,v35) {
            const v39 = [1337,1337,1337,1337,1337];
            function v40(v41,v42,v43,v44) {
                'use strict'
                try {
                    const v45 = new Float64Array(v43);
                    function v48(v49,v50,v51,v52,v53) {
                        'use strict'
                    }
                    const v54 = v48.toLocaleString();
                    const v56 = [];
                    const v57 = {a:v43};
                    const v58 = {__proto__:eval,constructor:v57,length:v56};
                    let v60 = v43;
                    const v61 = v58.__proto__(v54,v60,19873,Symbol);
                    const v63 = Object.defineProperty(this,1337,v44);
                } catch(v64) {
                    try {
                        const v65 = v41[3];
                    } catch(v66) {
                        v64.valueOf = v64;
                    }
                }
                return v40;
            }
            const v67 = {deleteProperty:v40,set:v40,getPrototypeOf:v40,call:v40,preventExtensions:v40,isExtensible:v40,construct:v40,get:v40,ownKeys:v40,setPrototypeOf:v40,has:v40};
            const v69 = new Proxy(v39,v67);
            v69[1] = "MIN_VALUE";
        }
        const v70 = v33();
    }
}
const v71 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v73 = new Proxy(v19,v71);
v73[1] = "MIN_VALUE";
const v74 = v73();
const v76 = {set:v20};
const v78 = Object.defineProperty(v13,"d");
let v79 = v7;
const v80 = v20();
}
%NeverOptimizeFunction(main);
main();
