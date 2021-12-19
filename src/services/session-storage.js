/* Arquivo usado para gravação de sessionstorage podendo ser removido, fica armazenado as 
 * informações no cliente com a possibilidade de expirar sem acesso pelo backend da aplicação
 * Será usado para gravação do token de segurança para que o front faça uso do mesmo
 * Autor: Antonio Junior Data: 10/12/2021
 */

export default {
    
    //setter de session informação do token
    set(key, value){
        window.sessionStorage[key] = value;                 
        return window.sessionStorage[key];
    },

    //getter de session informação do token caso não exista valor será retornado o proprio valor com a defaultValue
    get(key, defaultValue){                                 
        return window.sessionStorage[key] || defaultValue;  
    },

    //setter de objeto de session serializando e desserializando
    setObject(key, value){
        window.sessionStorage[key] = JSON.stringify(value);
        return this.getObject(key);
    },

    //getter de objeto de session desserializando, caso seja invalido retorno null
    getObject(key){
        return JSON.parse(window.sessionStorage[key] || null);
    },

    //remove responsável em excluir a informação da session Storage
    remove(key){
        window.sessionStorage.removeItem(key);
    }
};