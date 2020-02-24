function main() {
const v2 = [13.37];
const v4 = [1337,1337];
const v5 = [v2];
const v6 = {e:1337,d:-2036710005,a:13.37,length:-2036710005,b:1337};
const v7 = {};
let v8 = v7;
const v11 = Symbol.e;
const v12 = Symbol[v11];
const v13 = {getPrototypeOf:v12,get:v12};
const v15 = new Proxy(Reflect,v13);
let v17 = Promise;
let v18 = v17;
const v21 = new Proxy(v18,Object);
const v22 = Object.freeze();
const v24 = [13.37,13.37,13.37,13.37,13.37];
for (const v26 in "object") {
    const v29 = [1337,1337,1337,1337,1337];
    function v30(v31,v32,v33,v34) {
        'use strict'
        try {
            const v36 = new Float32Array();
            v34[3] = v34;
        } catch(v37) {
            const v41 = [13.37,13.37,13.37];
            let v43 = 13.37;
            const v47 = [1337];
            const v48 = {__proto__:v47,a:v47,constructor:v43,e:13.37,length:"number",b:13.37};
            const v51 = [-1825918256];
            let v52 = v51;
            const v54 = [1337,-315074.8582556173,-315074.8582556173];
            v54[7] = v48;
            const v55 = [v52,v54];
            const v56 = v55.toLocaleString();
            const v57 = {c:v56,d:v54};
            let v60 = 0;
            let v61 = v57;
            const v62 = [0,v61,v61];
            v60 = v62;
            const v63 = JSON.stringify(v60);
            const v64 = JSON.parse(v63);
            const v66 = {a:"caller",valueOf:v41,__proto__:1337,constructor:2048966803,c:2048966803,b:"caller"};
            const v68 = [v66];
            let v69 = v68;
            const v71 = [1337,1337,1337,1337,1337];
            const v73 = [2147483647,2147483647];
            function v74(v75,v76) {
                const v78 = {deleteProperty:Object,apply:Object,getPrototypeOf:RegExp,defineProperty:v76,set:RegExp,construct:v74,setPrototypeOf:v76,has:v74};
                const v80 = "pOVvs./Lpk".__proto__;
                const v82 = [v80,v32,13.37,13.37,13.37];
            }
        }
        return v29;
    }
    const v83 = {deleteProperty:v30,set:v30,getPrototypeOf:v30,call:v30,preventExtensions:v30,isExtensible:v30,construct:v30,get:v30,ownKeys:v30,setPrototypeOf:v30,has:v30};
    const v85 = new Proxy(v29,v83);
    v85[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
