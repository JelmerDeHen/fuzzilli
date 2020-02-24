function main() {
const v4 = [13.37,13.37,13.37];
const v6 = [1337,1337,1337];
const v8 = new Int8Array();
const v9 = v8.slice();
const v10 = ["function",v6,Proxy];
const v11 = {b:v10,c:"function",e:v6};
const v12 = {d:v11,b:4001661083,length:v11,e:v11};
const v14 = new Float64Array();
let v15 = v14;
const v18 = new Proxy(v15,Reflect);
const v21 = [1337,1337,1337,1337,1337];
function v22(v23,v24,v25,v26) {
    'use strict'
    const v29 = [13.37,13.37,13.37];
    function v30(v31,v32) {
        const v35 = [1337,1337,1337,1337,1337];
        function v36(v37,v38,v39,v40) {
            'use strict'
            const v43 = arguments + 1;
            const v45 = [1337,1337,"MIN_VALUE",1337,1337];
            function v46(v47,v48,v49,v50) {
                'use strict'
                try {
                    let v53 = 0;
                    while (v53 <= 4) {
                        const v54 = v53 + 1;
                        v53 = v54;
                    }
                    v50[3] = 0;
                } catch(v55) {
                    let v56 = v43;
                    const v57 = [];
                    const v58 = {a:v57};
                    const v59 = {__proto__:v50,constructor:v58,length:v57};
                    const v60 = v56 in v59;
                }
                return v50;
            }
            const v61 = {deleteProperty:v46,set:v46,getPrototypeOf:v46,call:v46,preventExtensions:v46,isExtensible:v46,construct:v46,get:v46,ownKeys:v46,setPrototypeOf:1337,has:v46};
            const v63 = new Proxy(v45,v61);
            v63[1] = "MIN_VALUE";
            try {
                v40[3] = v40;
            } catch(v64) {
                v18[1337] = v36;
            }
            const v67 = 2.2250738585072014e-308 / 9007199254740991;
            const v68 = [v67];
        }
        const v69 = {deleteProperty:v36,set:v36,getPrototypeOf:v36,call:v36,preventExtensions:v36,isExtensible:v36,construct:v36,get:v36,ownKeys:v36,setPrototypeOf:v36,has:v36};
        const v71 = new Proxy(v35,v69);
        v71[1] = "MIN_VALUE";
    }
    const v72 = ["undefined",v29];
    const v75 = new Int16Array(19873);
    const v76 = v30(...v72,...v75);
}
const v77 = {deleteProperty:v22,set:v22,getPrototypeOf:v22,call:v22,preventExtensions:v22,isExtensible:v22,construct:v22,get:v22,ownKeys:v22,setPrototypeOf:v22,has:v22};
const v79 = new Proxy(v21,v77);
v79[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
