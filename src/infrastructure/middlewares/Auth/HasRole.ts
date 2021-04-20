export function HasRole(role: string | string[]): any {
    return function (request: any, response: any, next: any) {
        const loggedUser = request.loggedUser

        if (!loggedUser) {
            return response.status(403).send({ 'status': 401, 'message': 'Unauthorized!' })
        }

        if (typeof role == 'string') {
            if (loggedUser.role != role) {
                return response.status(403).send({ 'status': 403, 'message': 'User not have the right permissions!' })
            }
        } else {
            if (!role.includes(loggedUser.role)) {
                return response.status(403).send({ 'status': 403, 'message': 'User not have the right permissions!' })
            }
        }

        return next()
    }
}