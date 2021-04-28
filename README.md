# Simple instruction for testing the code.

Run the following commands to install the packages:

```
npm install
```

Create a database in mysql.

Source the envirement variables:

```
cp .env-setup-example .env-setup
# edit the env variables of the server in the .env-setup file.
source .env-setup
```

Initilize the empty database:

```
cat init-db.sql | mysql -u USERNAME -p DBNAME
```

Done, now to set a new translation post JSON object to http://localhost:3000/api/translate/ like:

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
