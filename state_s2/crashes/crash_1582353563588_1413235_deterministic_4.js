function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
for (const v3 in "object") {
    const v8 = [13.37];
    const v10 = [1337,1337,1337,1337];
    const v11 = [1337,NaN,16];
    const v12 = {a:v8};
    const v13 = {};
    let v14 = v10;
    const v18 = [13.37,13.37,13.37,13.37];
    const v20 = [1337];
    const v21 = [Array,4170892822];
    const v22 = {valueOf:v21,e:v21};
    const v23 = {valueOf:v21,__proto__:v20};
    let v24 = v23;
    const v26 = [-2008211595];
    const v28 = new ArrayBuffer();
    const v30 = v28.slice(1024);
    const v32 = [1337,1337,1337,1337,1337];
    function v33(v34,v35,v36,v37) {
        'use strict'
    }
    const v39 = [1337,1337,1337,1337,1337];
    function v40(v41,v42,v43,v44) {
        'use strict'
        try {
            v44[3] = v44;
        } catch(v45) {
            let v47 = 0;
            const v48 = v47 + 1;
            const v51 = 2.2250738585072014e-308 / 3890419937;
            const v52 = [v51];
            let v53 = v52;
            const v55 = Math.acosh(v53);
        }
        return v39;
    }
    const v56 = {deleteProperty:v40,set:v40,getPrototypeOf:v40,call:v40,preventExtensions:v40,isExtensible:v40,construct:v40,get:v40,ownKeys:v40,setPrototypeOf:v40,has:v40};
    const v58 = new Proxy(v39,v56);
    v58[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
