function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337];
const v5 = {b:v4};
const v6 = {d:v5,length:3253023065,valueOf:1337,a:13.37,e:3253023065,__proto__:v2};
const v7 = v6.sort();
}
%NeverOptimizeFunction(main);
main();
