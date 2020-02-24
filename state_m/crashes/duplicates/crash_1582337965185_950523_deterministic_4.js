function main() {
const v2 = [13.37,13.37,13.37];
const v4 = {length:13.37,__proto__:1337,constructor:Int16Array,a:v2};
for (const v6 in "object") {
    const v9 = [1337,1337,1337,1337,1337];
    function v10(v11,v12,v13,v14) {
        'use strict'
        try {
            v14[3] = v4;
        } catch(v15) {
            let v17 = 0;
            const v18 = v17 + 1;
            const v24 = [13.37,13.37,13.37];
            const v26 = [WeakSet,1337,1337,1337,1337];
            const v27 = [13.37,13.37];
            const v28 = {__proto__:1337,a:v26,constructor:v24,valueOf:v27};
            const v29 = {a:v26,length:"number",e:v26,constructor:v28,__proto__:"number",toString:WeakSet,valueOf:-2798452566,b:v24};
            let v30 = -2798452566;
            try {
                const v34 = [Function,"5hV/2mbTBY",1320432668,1320432668];
                const v35 = v34.__proto__;
                const v36 = Function();
                const v40 = [123036.33437387459,123036.33437387459,123036.33437387459,-4294967297];
                const v42 = [871735.3826353757,4294967295,v40];
            } catch(v43) {
            }
            const v45 = 2.2250738585072014e-308 / 3890419937;
            const v46 = [v45];
            let v47 = v46;
            const v49 = Math.acosh(v47);
        }
        return v9;
    }
    const v50 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
    const v52 = new Proxy(v9,v50);
    v52[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
