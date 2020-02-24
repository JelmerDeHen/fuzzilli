function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = 1337 instanceof Float64Array;
const v7 = [];
const v8 = Object.__proto__;
let v11 = 0;
while (v11 < 4) {
    let v13 = 0;
    const v15 = [1337,1337,1337,1337,1337];
    const v17 = [13.37,13.37,13.37,13.37,13.37];
    const v18 = [];
    function v19(v20,v21) {
        const v24 = [1337,1337,1337,1337,1337];
        function v25(v26,v27,v28,v29) {
            'use strict'
            try {
                v29[3] = v29;
            } catch(v30) {
                const v35 = [1337,1337,1337];
                const v36 = [3664180981,3664180981,"string","string"];
                const v37 = {valueOf:v36,length:v35,toString:parseFloat,constructor:"string",c:parseFloat};
                const v38 = v35.__proto__;
                let v40 = undefined;
                let v42 = undefined;
                const v44 = Object.freeze();
                try {
                    const v45 = v19();
                    const v47 = [13.37,13.37,13.37];
                    const v48 = {};
                    const v50 = [1337,1337,1337];
                    const v52 = [13.37,v42];
                    const v53 = v52[1024];
                    const v55 = Proxy();
                    for (const v56 in v55) {
                    }
                } catch(v57) {
                }
            }
            return v24;
        }
        const v58 = {deleteProperty:v25,set:v25,getPrototypeOf:v15,call:v25,preventExtensions:v25,isExtensible:v25,construct:v25,get:v25,ownKeys:v25,setPrototypeOf:v25,has:v25};
        const v60 = new Proxy(v24,v58);
        v60[1] = "MIN_VALUE";
    }
    const v61 = typeof 13.37;
    const v63 = v61 === "function";
    const v64 = v63 > 4;
    for (let v68 = 0; v68 < 100; v68++) {
        const v69 = v19();
    }
}
}
%NeverOptimizeFunction(main);
main();
