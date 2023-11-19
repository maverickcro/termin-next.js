/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "czqadz8klidv0jq",
    "created": "2023-11-19 17:47:44.521Z",
    "updated": "2023-11-19 17:47:44.521Z",
    "name": "termini",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "35aoogva",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nqxa9hlt",
        "name": "time",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("czqadz8klidv0jq");

  return dao.deleteCollection(collection);
})
