script.js
/* Réinitialisation des styles par défaut du navigateur */
body, h1, h2, h3, p, ul, li, form, input, textarea, button {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Corps de la page */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
}

/* En-tête */
header {
    background-color: #333;
    color: white;
    padding: 1em;
    text-align: center;
}

header nav ul {
    list-style-type: none;
    padding: 0;
    text-align: center;
}

header nav ul li {
    display: inline;
    margin-right: 1em;
}

header nav ul li a {
    text-decoration: none;
    color: white;
}

/* Section principale */
main {
    padding: 1em;
}

/* Produits */
.product {
    border: 1px solid #ddd;
    margin-bottom: 1em;
    padding: 1em;
    background-color: white;
}

.product img {
    max-width: 100%;
    height: auto;
}

.add-to-cart {
    background-color: #333;
    color: white;
    border: none;
    padding: 0.5em 1em;
    cursor: pointer;
}

.add-to-cart:hover {
    background-color: #555;
}

/* Formulaire de contact */
form {
    display: flex;
    flex-direction: column;
}

form label {
    margin-bottom: 0.5em;
}

form input, form textarea {
    margin-bottom: 1em;
    padding: 0.5em;
    border: 1px solid #ddd;
}

form button {
    background-color: #333;
    color: white;
    border: none;
    padding: 0.5em 1em;
    cursor: pointer;
}

form button:hover {
    background-color: #555;
}

/* Pied de page */
footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1em;
    position: fixed;
    width: 100%;
    bottom: 0;
}