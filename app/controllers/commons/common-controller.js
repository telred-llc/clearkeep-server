class CommonController {
    findSuccess(res) {
        return (result) => {
            res.status(200);
            res.json({'data': result});
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
            res.json({'deleted': result});
        }
    }

    serverError(res) {
        return (error) => {
            res.status(500);
            res.json(error);
        }
    }

    findError(res) {
        return (error) => {
            res.status(404);
            res.json(error);
        }
    }

    authenticationError(res) {
        return (error) => {
            res.status(401);
            res.json(error);
        }
    }
}

module.exports = CommonController;