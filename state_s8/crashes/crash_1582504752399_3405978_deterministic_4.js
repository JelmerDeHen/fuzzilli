function main() {
const v4 = [13.37,13.37,13.37,13.37];
const v5 = [13.37,"function",13.37,257];
const v6 = {__proto__:Int32Array,a:257,c:"function"};
const v7 = {e:Int32Array,a:v4,b:13.37,__proto__:13.37,toString:v5,c:v6,d:"function"};
function v9(v10,v11) {
    let v14 = 65537;
    let v17 = 0;
    do {
        const v18 = v17 + 1;
        v17 = v18;
    } while (v17 < 1);
    let v19 = 65537;
    try {
        const v20 = v9(1337,...v4,1337);
    } catch(v21) {
    }
    const v22 = [v7,v6];
    const v23 = v14 - 1;
    const v24 = v7.__proto__;
    const v25 = v19();
}
const v26 = v9();
}
%NeverOptimizeFunction(main);
main();
