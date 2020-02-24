function main() {
function v0(v1,v2) {
    let v6 = 0;
    do {
        const v7 = v6 + 1;
        v6 = v7;
    } while (v6 < 6);
    const v10 = [13.37];
    const v12 = [1337,1337,1337];
    const v13 = ["N*d4*m/H0F","N*d4*m/H0F",v12];
    const v14 = {valueOf:v12,b:-1662380622,c:v10,a:v10,__proto__:1337,constructor:v13};
    const v16 = [13.37,13.37,v14,13.37];
    for (const v17 of v16) {
        const v18 = v0();
    }
}
const v19 = v0();
}
%NeverOptimizeFunction(main);
main();
