function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337];
const v5 = [isFinite,isFinite,v4];
const v6 = {e:1337,constructor:v5,valueOf:13.37,b:isFinite};
const v7 = {c:13.37,a:isFinite,toString:v4};
let v8 = 1337;
try {
    const v13 = Uint8ClampedArray();
    const v14 = v13.__proto__;
    const v15 = v14.fill(13.37,Uint8ClampedArray,"symbol",29213);
} catch(v16) {
    const v18 = [13.37,13.37,13.37,13.37];
    const v20 = [1337,1337,1337,1337];
    const v24 = [1337,1337,1337,1337,1337];
    function v25(v26,v27,v28,v29) {
        'use strict'
        try {
            v29[3] = v29;
        } catch(v30) {
            const v35 = [-2331916614,-2331916614,-2331916614];
            const v36 = [3664180981,3664180981,"string","string"];
            const v37 = {valueOf:v36,length:v35,toString:parseFloat,constructor:"string",c:parseFloat};
            function v38(v39,v40) {
                const v44 = [1337,1337,1337,1337,1337];
                function v45(v46,v47,v48,v49) {
                    'use strict'
                    try {
                        const v50 = new Float64Array(v48);
                        function v53(v54,v55,v56,v57,v58) {
                            'use strict'
                        }
                        const v59 = v53.toLocaleString();
                        const v61 = [];
                        const v62 = {a:v61};
                        const v63 = {__proto__:eval,constructor:v62,length:v61};
                        let v66 = 0;
                        const v67 = v63.__proto__(v59,v66,19873,Symbol);
                        const v69 = Object.defineProperty(this,1337,v49);
                    } catch(v70) {
                        try {
                            const v71 = v46[3];
                        } catch(v72) {
                            v70.valueOf = v70;
                        }
                    }
                    return v45;
                }
                const v73 = {deleteProperty:v45,set:v45,getPrototypeOf:v45,call:v45,preventExtensions:v45,isExtensible:v45,construct:v45,get:v45,ownKeys:v45,setPrototypeOf:v45,has:v45};
                const v75 = new Proxy(v44,v73);
                v75[1] = "MIN_VALUE";
            }
            const v76 = v38();
        }
    }
    const v77 = {deleteProperty:v25,set:v25,getPrototypeOf:v25,call:v25,preventExtensions:v25,isExtensible:v25,construct:v25,get:v25,ownKeys:v25,setPrototypeOf:v25,has:v25};
    const v79 = new Proxy(v24,v77);
    v79[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
