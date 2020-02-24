function main() {
const v3 = Object.preventExtensions(Object);
const v4 = v3.isFrozen();
const v8 = [13.37,13.37,13.37,13.37];
const v10 = [1337,1337,1337];
const v11 = [];
const v12 = {};
const v13 = {d:v12,e:1000,length:"string",a:Float32Array,b:v10,constructor:v8,toString:13.37};
let v14 = v8;
const v16 = [13.37,13.37,13.37,13.37];
const v18 = [1337,1337,1337,1337];
const v19 = [];
const v20 = {b:1337,c:v16,d:13.37,a:v18,length:v19,valueOf:1337};
const v24 = [1337,1337,1337,1337,1337];
function v25(v26,v27,v28,v29) {
    'use strict'
    try {
        v29[3] = v29;
    } catch(v30) {
        const v34 = [-2331916614,-2331916614,-2331916614];
        const v35 = [3664180981,3664180981,"string","string"];
        function v36(v37,v38) {
            const v42 = [1337,1337,1337,1337,1337];
            function v43(v44,v45,v46,v47) {
                'use strict'
                try {
                    const v48 = new Float64Array(v46);
                    function v51(v52,v53,v54,v55,v56) {
                        'use strict'
                    }
                    const v57 = v51.toLocaleString();
                    const v59 = [];
                    const v60 = {a:v59};
                    const v61 = {__proto__:eval,constructor:v60,length:v59};
                    let v64 = 0;
                    const v65 = v61.__proto__(v57,v64,19873,Symbol);
                    const v67 = Object.defineProperty(this,1337,v47);
                    const v68 = v43();
                    const v69 = "MIN_VALUE"[3];
                    const v70 = {set:v57};
                    const v72 = Object.defineProperty(v29);
                } catch(v73) {
                    try {
                        const v74 = v44[3];
                    } catch(v75) {
                        v73.valueOf = v73;
                    }
                }
                return v43;
            }
            const v76 = {deleteProperty:v43,set:v43,getPrototypeOf:v43,call:v43,preventExtensions:v43,isExtensible:v43,construct:v43,get:v43,ownKeys:v43,setPrototypeOf:v43,has:v43};
            const v78 = new Proxy(v42,v76);
            v78[1] = "MIN_VALUE";
        }
        const v79 = v36();
    }
}
const v80 = {deleteProperty:v25,set:v25,getPrototypeOf:v25,call:v25,preventExtensions:v25,isExtensible:v25,construct:v25,get:v25,ownKeys:v25,setPrototypeOf:v25,has:v25};
const v82 = new Proxy(v24,v80);
v82[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
