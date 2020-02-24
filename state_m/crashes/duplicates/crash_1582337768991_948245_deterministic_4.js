function main() {
const v2 = [13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [Symbol,1337];
const v6 = {__proto__:1337,length:v5,b:1337,d:v4};
const v7 = {d:v5,a:v2,length:v5,constructor:13.37,__proto__:v2,c:v2,e:v6};
for (const v9 in "object") {
    const v12 = [1337,1337,1337,1337,1337];
    const v14 = 32743.696442071116 * 32743.696442071116;
    function v15(v16,v17,v18,v19) {
        'use strict'
        try {
            v19[3] = v19;
        } catch(v20) {
            let v22 = 0;
            const v23 = v22 + 1;
            const v26 = 2.2250738585072014e-308 / 3890419937;
            const v27 = [v26];
            let v28 = v27;
            const v30 = Math.acosh(v28);
        }
        return v12;
    }
    const v31 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
    const v34 = {e:-1501539808};
    let v38 = 13.37;
    const v41 = [13.37,13.37,-4294967297,-4294967297];
    const v43 = [v41,5,v41];
    const v44 = v43.push();
    const v45 = [1337,1337,1337,1337,1337];
    function v46(v47,v48,v49,v50) {
        'use strict'
    }
    const v51 = {deleteProperty:v46,set:v46,getPrototypeOf:v46,call:v46,preventExtensions:v46,isExtensible:v46,construct:v46,get:v46,ownKeys:v46,setPrototypeOf:v46,has:v46};
    const v53 = new Proxy(v45,v51);
    v53[1] = "MIN_VALUE";
    v53.b = v51;
    const v54 = new Proxy(v12,v31);
    v54[1] = "MIN_VALUE";
}
if (v7) {
    let v56 = 0;
} else {
    function v57(v58,v59,v60,v61,v62) {
    }
}
}
%NeverOptimizeFunction(main);
main();
