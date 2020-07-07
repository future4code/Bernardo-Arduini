​
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
	gender VARCHAR(6) NOT NULL
);
​
* a) **VACHAR** é usado para indicar que é uma string e o 255 é o numero maximo de caractere.
   **NOT NULL** é pra informar que o valor não pde ser nulo
   **PRIMARY KEY** identificador único. Quer dizer que não pode haver 2 iguais.
   **DATE** repesenta a data que deve ser passada no padrão americano.
​
* b) **SHOW DATABASES** mostrou o information_schema e abaixo o name
  **SHOW TABLES** mostrou a tabela com o nome Actor
​
* c) **DESCRIBE Actor** o SHOW Actor da erro e todas as outras formas que tentei tmb. DESCRIBE Actor mostra uma tabelinha com todas as informações sem os valores pois os mesmo ainda não foram lançados. 
​
2. * b) Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'
       quer dizer que o ID está duplicado. E ele é PRIMARY KEY que quer dizer que só poder ter uma informação com esse valor. 
​
* c) Código de erro: 1136. A contagem de colunas não corresponde à contagem de           valores na linha 1. Está faltando parâmetros como birth_date e gender. 
​
* d) Código de erro: 1364. O campo 'name' não tem um valor padrão. 
 o name não está sendo declarado e ele é not null, ou seja, indispensável. 
​
* e) Código do erro: 1292. Valor incorreto da data: '1950' para a coluna 'data_de_natalidade' na linha 1.
A data de nascimento esta declara como número, sem aspas. 
​
* f) 
​
3. 
* a) SELECT * FROM Actor 
WHERE gender != "male";
​
* b) SELECT  name, salary 
FROM Actor WHERE name = "Tony Ramos";
​
* c) SELECT gender FROM Actor WHERE gender = "invalid"; 
 Retonrna somente a coluna gender vazia.
​
* d)SELECT id, name, salary 
FROM Actor WHERE salary  >= "500000";
​
* e)SELECT id, nome 
FROM Actor WHERE id = "002"
Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'
não é nome e sim name. Corrigindo  ele roda. 
​
4. 
* a)A query diz que os os nomes começam coma as letras A e J e que o salario é maior que R$300.000
* b)SELECT * FROM Actor
WHERE  (name NOT LIKE "A%")  AND salary > 350000;
​
* c) SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";
​
* d) SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
​
5.
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
	VALUES("001", "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006/01/06", 7),
          ("002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012/12/27", 10),
          ("003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017/11/02", 8),
          ("004", "Bacurau", "Os moradores de um pequeno povoado do sertão brasileiro, chamado Bacurau, descobrem que a comunidade não consta mais em qualquer mapa.", "2019/08/23", 9);
          
6.
* a)SELECT id, title, rating FROM Movie WHERE id = "002";
* b)SELECT * FROM Movie WHERE title = "Bacurau";
* c)SELECT id, title, synopsis FROM Movie WHERE rating > 9;
​
7. 
* a) SELECT * FROM Movie
WHERE title LIKE "%vida%";
​
* b)SELECT * FROM Movie
		WHERE title LIKE "%mãe%" OR
		synopsis LIKE "%moradores%";
​
* c)SELECT * FROM MOVIE
WHERE release_date < "2020-05-04";
​
* d)SELECT * FROM MOVIE
     WHERE release_date < "2020-05-04" AND 
      (title LIKE "%TERMO DE BUSCA%" OR
      sy