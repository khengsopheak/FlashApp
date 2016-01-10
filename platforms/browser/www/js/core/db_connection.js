function connectionDB(dbName, size){
    persistence.store.websql.config(
            persistence, dbName, '0.0.1', 'camtraffic database', size, 0, 2);
    persistence.schemaSync();
}