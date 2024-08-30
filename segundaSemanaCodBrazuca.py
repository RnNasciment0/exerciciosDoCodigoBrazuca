#Exercicio 1
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)


numero = int(input('Digite um numero: '))
print(f"O fatorial de {numero} é {factorial(numero)}")

#Exercicio 2


def converter(temp):
    tempKelvin = temp + 273.15
    tempFahrenheit = temp * 9/5 + 32
    return tempKelvin, tempFahrenheit


temperatura = float(input("Digite a temperatura em Celsius"))
temperaturaKelvin, temperaturaFahrenheit = converter(temperatura)
print(f"A temperatura {temperatura}ºC convertida para Fahrenheit é {temperaturaFahrenheit} e para Kelvin é {temperaturaKelvin} ")
#Exercicio 3
altura = float(input("Digite a altura em metros: "))
peso = float(input("Digite o peso em Kg: "))
imc = peso / (altura * altura)
print(f"O seu imc é {imc}")
#Exercicio 4


def ePalindromo(texto, textoInvertido):
    for i in range(len(textoInvertido)):
        if textoInvertido[i] != texto[i]:
            return False
    return True


palavra = input("Digite uma frase ou palavra: ")
palavraInvertida = palavra[::-1]
resposta = ePalindromo(palavra, palavraInvertida)
if resposta:
    print("É Palindromo!")
else:
    print("Não é Palindromo!")

#Exercicio 5
def tabuada(num):
    for i in range(1, 11):
        print("{} x {} = {}".format(i, num, i * num))
    return None


numero = int(input("Digite o numero que deseja saber a tabuada: "))
tabuada(numero)


#Exercicio 6


def contar(frse, vog):
    qtd = 0
    for i in frse:
        if i in vog:
            qtd += 1
    return qtd


VOGAIS = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]
frase = input("Digite uma frase sem acentos: ")
qtdVogais = contar(frase, VOGAIS)
print("Nessa frase tem {} vogais".format(qtdVogais))

#Exercicio 7

def mediaDasNotas(sumNotas, qtd):
    media = sumNotas/qtd
    return media


nota = float(input("Digite uma nota do aluno: "))
somaDasNotas = 0
qtdNotas = 0
while nota != -1:
    somaDasNotas = somaDasNotas + nota
    qtdNotas += 1
    nota = float(input("Digite uma nota do aluno: "))
media = mediaDasNotas(somaDasNotas, qtdNotas)
print(f"A media foi {media:.2f}")

#Exercicio 8


def fibonacci(num):
    if num == 1:
        return 0
    elif num == 2:
        return 1
    else:
        return fibonacci(num - 1) + fibonacci(num - 2)


def mostrar(list):
    for i in list:
        print(i, end=" ")
    print()
    return None


listaFibonacci = []
numero = int(input("Digite um numero: "))
for i in range(numero, 0, -1):
    num = fibonacci(i)
    listaFibonacci.append(num)
listaFibonacci.reverse()
mostrar(listaFibonacci)
#Exercicio 9


def ordenar(list):
    listaOrdenada = sorted(list)
    return listaOrdenada


digitos = list(map(float, input("Digite três numeros separados por espaço: ").split()))
numerosOrdenados = ordenar(digitos)
print(numerosOrdenados)
#Exercicio 10


def parOuImpar(num):
    if num % 2 == 0:
        print(f"O numero {num} é par")
    else:
        print(f"O numero {num} é impar")
    return None


numero = float(input("Digite um numero: "))
parOuImpar(numero)
#Exercicio 11
import math


def areaDoCirculo(raio):
    return math.pi * raio**2


raio = float(input("Digite o raio do circulo: "))
area = areaDoCirculo(raio)
print(f"A area do circulo de raio {raio} é {area}")
#Exercicio 12
import random
numeroSecreto = random.randint(1, 100)
tentativa = int(input("Digite um numero: "))
while tentativa != numeroSecreto:
    if tentativa < numeroSecreto:
        print("O numero é menor que o numero secreto")
    elif tentativa > numeroSecreto:
        print("O numero é maior que o numero secreto")
    tentativa = int(input("Digite um numero: "))
print("Parabens você acertou o numero secreto")
print(numeroSecreto)

#Exercicio 13
soma = 0
for i in range(1, 101):
    if i % 2 == 0:
        soma += i
print(soma)
#Exercicio 14


def conta(num1, num2, oprc):
    result = 0
    if oprc == "+":
        result = num1 + num2
    elif oprc == "-":
        result = num1 - num2
    elif oprc == "*":
        result = num1 * num2
    elif oprc == "/":
        result = num1 / num2
    return result


primeiroDigito = float(input("Digite o primeiro digito: "))
segundoDigito = float(input("Digite o segundo digito: "))
operacao = input("Escolha uma operação +, -, *, /: ")
resultado = conta(primeiroDigito, segundoDigito, operacao)
print(resultado)
#Exercicio 15


def somaDosNNumeros(num):
    soma = 0
    for i in range(1, num + 1):
        soma += i
    return soma


numero = int(input("Digite um numero: "))
somaAcumulada = somaDosNNumeros(numero)
print(f"A soma é {somaAcumulada}")

#Exercicio 16
string = input("Digite uma string: ")
stringInvertida = string[::-1]
print(stringInvertida)


#Exercicio 17
def verificar(num):
    soma = 0
    for i in range(1, num):
        if num % i == 0:
            soma += i
    if soma == num:
        print(f"O numero {num} é perfeito")
    else:
        print(f"O numero {num} não é perfeito")
    return None


numero = int(input("Digite um numero: "))
verificar(numero)

#Exercicio 18
def contar(frs):
    return len(frs.split())


frase =input("Digite uma frase: ")
qtd = contar(frase)
print("A frase digitada tem {} palavras".format(qtd))


#Exercicio 19
def mediaPonderada(num1, num2, num3):
    return ((num1*2) + (num2*3) + (num3*5))/10


primeiraNota = float(input("Digite o primeiro nota: "))
segundaNota = float(input("Digite o segundo nota: "))
terceiroNota = float(input("Digite o terceiro nota: "))
media = mediaPonderada(primeiraNota, segundaNota, terceiroNota)
print(f"A media foi {media:.2f}")
#Exercicio 20


def contas(list):
    return max(list), min(list), sum(list)/len(list)


listaDeNumeros = []
numero = int(input("Digite um numero: "))
listaDeNumeros.append(numero)
resposta = input("Quer continuar? [S/N] ").upper()
while resposta != "N":
    numero = int(input("Digite um numero: "))
    listaDeNumeros.append(numero)
    resposta = input("Quer continuar? [S/N] ").upper()
maior, menor, media = contas(listaDeNumeros)
print("O maior numero é {} o menor é {} e a media foi de {}".format(maior, menor, media))
