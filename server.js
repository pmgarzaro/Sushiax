const express = require('express');
const app = express();
let   orders = {};
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname));

// Route pour l'enregistrement d'une commande
app.post('/register', function(req, res) {
    const name = req.body.name;
    const order = req.body.order;

    if (orders[name]) {
        // Si l'utilisateur a déjà passé une commande, on ajoute sa nouvelle commande à son tableau de commandes existant
        orders[name].push(order);
    } else {
        // Si l'utilisateur n'a jamais passé de commande, on crée un nouveau tableau de commandes pour lui et on y ajoute sa commande
        orders[name] = [order];
    }
    res.redirect('/')
});
  
// Route pour afficher toutes les commandes
app.get('/orders', (req, res) => {
    let html = `<img class="axianslogo" src="https://www.axians.fr/app/uploads/sites/55/2022/05/Logo_Axians_White_512x512-1.png">
                <link rel="stylesheet" href="styles.css">
                <form class=sushiList action="/clear" method="post">
                <h1>Liste des commandes</h1>`;

    for (const [name, orderList] of Object.entries(orders)) {
        html += `<h2>${name}</h2>`;
        orderList.forEach(order => {
            html += `<p>${order}</p>`;
        });
    }
    html += `  <div class="group">
                <input type="button" value="Register" onclick="self.location.href='/'">
                <button type="submit">Clear</button>
               </div>
             </form>`;
    res.send(html);
});

app.post('/clear', function(req, res) {
    orders = {};
    res.redirect('/orders')
});

app.listen(3000, function() {
    console.log('Serveur démarré sur le port 3000');
});
