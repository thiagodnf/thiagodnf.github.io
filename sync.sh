echo "Sincronizando arquivos com o servidor"

rsync -ravzup dist/tnferreira/* tnferreira@ssh.inf.ufpr.br:~/tnferreira/

echo "Removendo pasta build"

rm -rf build

echo "Feito"
