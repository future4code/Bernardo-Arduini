1 a) Deletaria toda a coluna que contem o valor de salario dos atores.
b)Alteraria o nome da coluna de gender para sex.
c)

2a)UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";

b)UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

c)UPDATE Actor
SET 
		name = "Moacyr Franco",
		birth_date = "2020-02-10",
    salary = 600000,
    gender = "male"
WHERE id = "005";

3a)DELETE FROM Actor WHERE name = "Tony Ramos"

b)DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000
	
4a)SELECT MAX(salary) FROM Actor

b)SELECT MIN(salary) FROM Actor WHERE gender = "female"

c)SELECT COUNT(*) FROM Actor WHERE gender = "female"

d)SELECT SUM(salary) FROM Actor

5a) Essa query serve para contabilizarmos quantos atores de ambos os sexos existe naquela tabela.

b)001	Tony Ramos
003	Moacyr Franco
005	Moacyr Franco
002	Gloria Pires
004	Antônio Fagundes

c)Moacyr Franco
Antônio Fagundes
Moacyr Franco
Gloria Pires
Tony Ramos

d)Tony Ramos	4000000
Gloria Pires	1200000
Moacyr Franco	600000

e)1666666.6666666667	male
750000	female

7a) 3

b)8.666666666666666

c)0

d)3

e)10

f)8

8a)Cazuza
Doce de mãe
Dona Flor e Seus Dois Maridos
Se Eu Fosse Você

b)Cazuza
Doce de mãe
Dona Flor e Seus Dois Maridos
Se Eu Fosse Você

c)Dona Flor e Seus Dois Maridos
Doce de mãe
Se Eu Fosse Você

d)Doce de mãe
Dona Flor e Seus Dois Maridos
Cazuza
