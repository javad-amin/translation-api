# Simple instruction for testing the code.

Run the following command to install the packages:

```
npm install
```

Create a database in mysql and then source the envirement variables:

```
cp .env-setup-example .env-setup
# edit the env variables of the server in the .env-setup file.
source .env-setup
```

Initilize the empty database:

```
cat init-db.sql | mysql -u USERNAME -p DBNAME
```

To run the node app use:

```
npm run dev
```

now to set a new translation post a JSON object in the body to http://localhost:3000/api/translate/:

```
{
	"lang": "sv",
	"key": "buy-chips",
	"value": "Buy Chips"
}
```

To check all translations visit: http://localhost:3000/api/translate/

To query all records from a specific language, like all english records by: http://localhost:3000/api/translate/en/all

To query a single record like buy-chips: http://localhost:3000/api/translate/en/?key=buy-chips
