function main() {
delete Array.length;
}
%NeverOptimizeFunction(main);
main();
