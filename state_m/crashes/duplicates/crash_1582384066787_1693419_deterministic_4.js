function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337];
const v5 = {b:v4,length:2941111155,valueOf:v2,__proto__:v4,e:v2};
const v6 = v5.sort();
}
%NeverOptimizeFunction(main);
main();
