class CommonController {
    findSuccess(res) {
        return (result) => {
            res.status(200);
            res.json({
                'errorCode': 0,
                'message': 'success',
                'data': result
            });
        }
    }

    existsSuccess(res) {
        return (result) => {
            res.status(200);
            res.json(result);
        }
    }

    editSuccess(res) {
        return () => {
            res.status(201);
            res.json({});
        }
    }

    deleteSuccess(res) {
        return (result) => {
            res.status(200);
            res.json({
                'errorCode': 0,
                'message': 'success',
                'data': {'deleted': result}
            });
        }
    }

    serverError(res) {
        return (error) => {
            res.status(500);
            res.json({
                'errorCode': error.errorCode,
                'message': error.message,
                'data': {}
            });
        }
    }

    findError(res) {
        return (error) => {
            res.status(404);
            res.json({
                'errorCode': error.errorCode,
                'message': error.message,
                'data': {}
            });
        }
    }

    authenticationError(res) {
        return (error) => {
            res.status(401);
            res.json({
                'errorCode': 401,
                'message': 'Authentication error',
                'data': {}
            });
        }
    }
}

module.exports = CommonController;