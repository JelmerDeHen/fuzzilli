function main() {
const v3 = [1337];
const v4 = [v3];
const v5 = {d:13.37,b:9007199254740993,c:1337,e:9007199254740993,constructor:v4};
const v8 = [1337,1337,1337,1337,1337];
function v9(v10,v11,v12,v13) {
    'use strict'
    try {
        const v19 = [13.37];
        v4.__proto__ = v10;
        const v20 = v4[v13];
        const v21 = v13(1337,v19);
        const v23 = [1337,1337,1337,1337,1337];
        const v24 = [String,"buffer",String,13.37];
        const v25 = {};
        const v26 = {__proto__:13.37,length:v13,a:v25,b:2259503144,toString:v25};
        let v27 = "buffer";
        const v29 = [371375.4036167406,371375.4036167406,371375.4036167406];
        const v32 = [13.37,13.37];
        const v33 = v32[1024];
        const v34 = {has:gc,construct:v33,defineProperty:v33,deleteProperty:gc,setPrototypeOf:gc,preventExtensions:v33,isExtensible:v33,call:v33,set:gc,getOwnPropertyDescriptor:gc};
        for (const v36 in "boolean") {
            for (let v40 = 0; v40 < 10; v40++) {
                function v41(v42,v43) {
                }
                for (const v45 in "object") {
                }
            }
            function v46(v47,v48) {
            }
            const v49 = v46();
            const v51 = Int16Array();
            try {
                const v53 = Proxy();
                for (const v54 in v53) {
                }
            } catch(v55) {
            }
            for (let v59 = 0; v59 < 9; v59++) {
            }
        }
    } catch(v60) {
    }
    return v5;
}
const v61 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
const v63 = new Proxy(v8,v61);
v63[1] = "MIN_VALUE";
const v64 = v9(v63);
}
%NeverOptimizeFunction(main);
main();
