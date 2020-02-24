function main() {
for (const v1 in "object") {
    const v4 = [1337,1337,1337,1337,1337];
    const v7 = [13.37,13.37,13.37];
    const v9 = [1337,1337,1337];
    const v10 = [v7,v9,v7];
    const v11 = {e:1337,a:v7,length:v7,c:Float64Array};
    const v14 = [3536304147];
    let v15 = gc;
    const v17 = [Infinity,Infinity,Infinity];
    const v18 = [v15,v17];
    const v19 = v18.toLocaleString();
    const v20 = {c:v19,d:v14};
    function v21(v22,v23,v24,v25) {
        'use strict'
        try {
            const v27 = new Float32Array();
            v25[3] = v25;
        } catch(v28) {
            const v30 = Symbol.toPrimitive;
            const v32 = ["EXkcpBKht7"];
            let v33 = "EXkcpBKht7";
            const v34 = v32.includes(v33,v4);
            const v35 = [v25,v21];
            const v37 = "unscopable".concat();
            const v39 = [1337,1337];
            const v41 = [13.37,13.37,13.37];
            const v42 = v41.toString();
            const v45 = [13.37,13.37];
            const v47 = [1337];
            const v48 = {b:v45,c:v39,valueOf:-9007199254740993,d:v42,constructor:1337,__proto__:v47};
            let v49 = v48;
            const v51 = "E".padEnd();
            const v52 = v51.replace();
            const v55 = new Proxy(v49,Object);
            const v56 = Object.freeze();
        }
        return v4;
    }
    const v57 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:1337,has:v21};
    const v59 = new Proxy(v4,v57);
    v59[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
