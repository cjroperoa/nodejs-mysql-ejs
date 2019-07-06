const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

// Importando RUTAS
const customerRoutes = require('./routes/customer');

// CONFIGURACIONES
app.set('port', process.env.PORT || 3000); // Config Puerto
app.set('view engine', 'ejs'); // Config el motor de plantillas "ejs"
app.set('views', path.join(__dirname, 'views')); // Config rutas de las "views"

// MIDDLEWARES
app.use(morgan('dev')); // Ejecución del modulo "morgan"
app.use(myConnection(mysql, {
	host: 'localhost',
	user: 'root',
	password: '',
	port: '3306',
	database: 'crudnodejsmysql'
}, 'single'));	// Conexión con la base de datos
app.use(express.urlencoded({ extended: false })); // datos pre formateados

// RUTAS
app.use('/', customerRoutes);

// ARCHIVOS ESTATICOS -> CARPETA = "public"
app.use(express.static(path.join(__dirname, 'public')));

// !SERVIDOR INICIANDO!
app.listen(app.get('port'), () => {
	console.log('!Server en ejecución! => Puerto: 3000');
});
