function main() {
"object".constructor = 13.37;
}
%NeverOptimizeFunction(main);
main();
