function main() {
for (const v2 in "object") {
    const v8 = [1337];
    const v9 = [3156875969,3156875969,1337,Uint8ClampedArray];
    const v10 = {constructor:v9,c:v9,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
    let v11 = v8;
    const v17 = [1337];
    const v18 = [3156875969,3156875969,1337,DataView];
    const v19 = {constructor:v18,c:v18,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
    let v20 = v17;
    function v21(v22,v23) {
    }
    const v26 = [1337,1337,1337,1337,1337];
    function v27(v28,v29,v30,v31) {
        'use strict'
        try {
            v31[3] = v31;
        } catch(v32) {
            const v34 = [1337,1337];
            const v39 = "unscopable".concat(100);
            const v40 = [-372074.99096011615,v34,-372074.99096011615];
            const v41 = Function(v40);
        }
        return v26;
    }
    const v42 = {deleteProperty:v27,set:v27,getPrototypeOf:v27,call:v27,preventExtensions:v27,isExtensible:v27,construct:v27,get:v27,ownKeys:v27,setPrototypeOf:v27,has:v27};
    const v44 = new Proxy(v26,v42);
    v44[1] = "MIN_VALUE";
    function v45(v46,v47,v48,v49) {
    }
    for (const v51 in "boolean") {
        for (const v52 in "boolean") {
        }
    }
    for (let v57 = 0; v57 < 10; v57++) {
    }
    for (const v58 in "boolean") {
        for (let v62 = 0; v62 < 4; v62++) {
        }
        for (let v66 = 0; v66 < 0; v66++) {
        }
    }
    for (const v68 in "object") {
    }
    for (const v70 in "object") {
    }
}
for (const v71 in "object") {
}
}
%NeverOptimizeFunction(main);
main();
