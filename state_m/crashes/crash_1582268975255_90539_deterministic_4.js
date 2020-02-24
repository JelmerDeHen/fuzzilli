function main() {
const v2 = [1337,1337,1337,1337];
const v3 = {length:v2,a:"boolean"};
const v5 = [13.37,13.37,13.37];
const v7 = [1337,1337,1337,1337];
const v10 = [13.37,13.37,13.37];
const v12 = [1337,1337];
const v13 = [v12,v12,v12];
const v14 = {d:"undefined",e:v10,__proto__:v12,c:v12,toString:v13};
let v15 = v14;
for (const v16 in v15) {
}
function v17(v18,v19) {
    let v21 = 0;
    let v24 = 0;
    do {
        try {
            let v27 = 0;
            do {
                const v28 = v27 + 1;
                v27 = v28;
            } while (v27 < 7);
            const v30 = [1337];
            let v32 = undefined;
            const v33 = v17();
        } catch(v34) {
        }
    } while (v24 < 8);
}
const v35 = v17();
}
%NeverOptimizeFunction(main);
main();
