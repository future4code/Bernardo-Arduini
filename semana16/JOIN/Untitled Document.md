1a) É um código a qual permite 2 Table de se juntarem!
b)INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);
c)
d)ALTER TABLE Movie DROP COLUMN rating;
e)

2a)Essa tabela cria ID pare filmes e ID para atores, juntando posteriormente todos com foreing !
b)INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
    "001",
    "002",
    "003",
    "004",
    "005",
    "006"
)
c)
d)

3a)
b)SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;

4a)SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id;

b)SELECT m.id as movie_id, m.title, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;

c)SELECT AVG(r.rate), m.id, m.title FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);

5a)O primeiro join faz com que o movie seja includido, posteriormente o segundo JOIN faz com que o actor seja incluido!
b)SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

c)

6a)