#Exercicio 1
inicio = int(input('Digite o primeiro valor que define o inicio do intervalo: '))
fim = int(input('Digite o segundo valor que define o fim do intervalo: '))
total = 0
for i in range(inicio, fim + 1):
    if i % 3 == 0 and i % 5 == 0:
        total += 0
    elif i % 3 == 0:
        total += i
    elif i % 5 == 0:
        total -= i

print('O valor total do intervalo foi {}'.format(total))







#Exercicio 2

def eh_primo(numero):
 if numero <= 1:
    return False
 for i in range(2, int(numero ** 0.5) + 1):
    if numero % i == 0:
        return False
    return True


def calculaDigitos(num):
    somaDosDigitos = 0
    numString = str(num)
    for num in numString:
        somaDosDigitos += int(num)
    return somaDosDigitos


comeco = int(input("Digite o numero que define o inicio do intervalo: "))
termino = int(input("Digite o numero que define o fim do intervalo: "))
numeroMagico = None
for i in range(comeco, termino + 1):
    primo = eh_primo(i)
    soma = calculaDigitos(i)
    if primo and soma % 2 != 0 and i % 4 == 0:
        numeroMagico = i
    if numeroMagico is not None:
        break


if numeroMagico is None:
    print("Numero Magico não encontrado")
else:
    print("Numero Magico encontrado e ele é {}".format(numeroMagico))








#Exercicio 3
from random import randint


def gerarCartela():
    return [randint(1, 75), randint(1, 75), randint(1, 75), randint(1, 75)]


def sorteiaNumeros():
    return randint(1, 75)


numerosSorteados = []
cartelaPremiada = gerarCartela()
while len(cartelaPremiada) != 0:
    numeroatual = sorteiaNumeros()
    while numeroatual in numerosSorteados:
        numeroatual = sorteiaNumeros()
    print("Numero Sorteado: {}".format(numeroatual))
    if numeroatual in cartelaPremiada:
        cartelaPremiada.remove(numeroatual)
        print("Parabens você acertou. A lista ficou assim:", cartelaPremiada)
    numerosSorteados.append(numeroatual)
print("Parabens voce completou sua cartela em %d sorteios." % len(numerosSorteados))


