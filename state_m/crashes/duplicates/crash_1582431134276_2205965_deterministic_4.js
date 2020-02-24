function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [Uint16Array,13.37,Uint16Array,Uint16Array];
const v7 = {toString:"symbol",valueOf:13.37,length:1337,__proto__:Uint16Array};
const v8 = {toString:Uint16Array,b:Uint16Array,valueOf:v7,e:1337,valueOf:v5,__proto__:Uint16Array};
let v9 = 13.37;
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
                    const v59 = 1.7976931348623157e+308 / -2420271507;
                    const v61 = [1000.0,1000.0,1000.0];
                    const v62 = [v59,v61];
                    const v63 = v62.toLocaleString();
                    let v65 = 0;
                    const v66 = v65 + 1;
                    const v67 = {a:v56};
                    const v68 = {__proto__:eval,constructor:v67,length:v56};
                    let v71 = 0;
                    const v72 = v68.__proto__(v54,v71,19873,Symbol);
                    const v74 = Object.defineProperty(this,1337,v44);
                } catch(v75) {
                    try {
                        const v76 = v41[3];
                    } catch(v77) {
                        v75.valueOf = v75;
                    }
                }
                return v40;
            }
            const v78 = {deleteProperty:v40,set:v40,getPrototypeOf:v40,call:v40,preventExtensions:v40,isExtensible:v40,construct:v40,get:v40,ownKeys:v40,setPrototypeOf:v40,has:v40};
            const v80 = new Proxy(v39,v78);
            v80[1] = "PI";
        }
        const v81 = v33();
    }
}
const v82 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v84 = new Proxy(v19,v82);
v84[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
