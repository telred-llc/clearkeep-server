class ServiceError {
    constructor(errorCode, message){
        this.errorCode = errorCode;
        this.message = message;
    }
}

module.exports = ServiceError;