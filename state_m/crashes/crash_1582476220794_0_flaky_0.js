function main() {
const v3 = [1337];
const v4 = [1337,1337,-339407.7583599979,v3];
const v5 = {valueOf:1337,d:65535,length:65535};
const v7 = [-100892.86781672714,-100892.86781672714,-100892.86781672714,-100892.86781672714];
const v9 = [1337,1337,1337,1337];
const v10 = [];
const v11 = {b:1337,c:v7,d:-100892.86781672714,a:v9,length:v10,valueOf:1337};
const v15 = [1337,1337,1337,1337,1337];
function v16(v17,v18,v19,v20) {
    'use strict'
    try {
        v20[3] = v20;
    } catch(v21) {
        function v22(v23,v24) {
            const v28 = [1337,1337,1337,1337,1337];
            function v29(v30,v31,v32,v33) {
                'use strict'
                try {
                    const v34 = new Float64Array(v32);
                    function v37(v38,v39,v40,v41,v42) {
                        'use strict'
                    }
                    const v43 = v37.toLocaleString();
                    const v45 = [];
                    const v46 = {a:v45};
                    const v47 = {__proto__:eval,constructor:v46,length:v45};
                    let v50 = 0;
                    const v51 = v47.__proto__(v43,v50,19873,Symbol);
                    const v53 = Object.defineProperty(this,1337,v33);
                } catch(v54) {
                    try {
                        const v55 = v30[3];
                    } catch(v56) {
                        v54.valueOf = v54;
                    }
                }
                return v29;
            }
            const v57 = {deleteProperty:v29,set:v29,getPrototypeOf:v29,call:v29,preventExtensions:v29,isExtensible:v29,construct:v29,get:v29,ownKeys:v29,setPrototypeOf:v29,has:v29};
            const v59 = new Proxy(v28,v57);
            v59[-1815858980] = "MIN_VALUE";
        }
        const v60 = v22();
    }
}
const v61 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
const v63 = new Proxy(v15,v61);
const v64 = {d:v63,b:v5,c:"MIN_VALUE",toString:v11,a:"MIN_VALUE"};
const v65 = v4.length;
const v66 = v16("MIN_VALUE",v64,v9);
const v67 = v7.find();
const v69 = Symbol();
}
%NeverOptimizeFunction(main);
main();
