# SM-12-5
https://kubkil.github.io/SM-12-5/

- linia 25 powoduje, że kod wywołuje zapytania dopóki nie trafi na cytat poniżej 140 znaków co sprawia, że czasami cytat pojawia się po kilkunastu sekundach, jak to inaczej rozwiązać?


- linia 8 - to co zwraca getJSON stanowi input createTweet, która uruchamiana jest w razie uzyskania pozytywnej odpowiedzi z serwera? 
- linia 13 - pod input podstawiane jest to co zwraca getJSON czy wynik działania funkcji getQuote?

- linia 14 - input[0] bo w obiekcie 0 są ID, content, link, title i zamiast 'data.title' może być 'input[0].title' gdyby nie było przypisane do zmiennej? 
np.
[,…]
0: {ID: 1755, title: "Pablo del Valle", content: "<p>My eyes hurt, but my hand keeps sketching.</p>↵",…}
ID: 1755
content: "<p>My eyes hurt, but my hand keeps sketching.</p>↵"
link: "https://quotesondesign.com/pablo-del-valle/"
title: "Pablo del Valle"
