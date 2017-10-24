import * as mysql from 'mysql';

export let pool = mysql.createPool({
    connectionLimit: 10,
    host: 'us-cdbr-iron-east-05.cleardb.net',
    user: 'b5a35611db66ad',
    password: '6ce8f5d4',
    database: 'CovalenceStore'
});

function callProcedure(procedureName: string, args: Array<any> = []): Promise<Array<Array<any>>> {
    return new Promise((resolve, reject)=> {
        pool.getConnection((err, connection)=> {
            if(err) {
                reject(err);
            } else {
                let placeholders = '';
                if ( args && args.length > 0) {
                    for (let i = 0; i < args.length; i++) {
                        if (i === args.length) {
                            placeholders += '?';
                        } else {
                            placeholders += '?,';
                        }
                    }
                }
                let callString = 'CALL' + procedureName + '(' + placeholders + ');';
                connection.query( callString, args, (err, resultsets)=> {
                    connection.release();
                    if (err) {
                        reject(err);
                    } else {
                        resolve(resultsets);
                    }
                });
            }
        });
    });
}

export function rows( procedureName: string, args: Array<any> = []){
    return callProcedure(procedureName, args)
    .then((resultsets)=>{
        return resultsets[0];
    });
}

export function row( procedureName: string, args: Array<any> = []){
    return callProcedure(procedureName, args)
    .then((resultsets)=>{
        return resultsets[0][0];
    });
}

export function empty( procedureName: string, args: Array<any> = []){
    return callProcedure(procedureName, args)
    .then(()=>{
        return;
    })
}