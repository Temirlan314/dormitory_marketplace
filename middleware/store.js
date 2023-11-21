export default function ({ $auth, error }) {
    if ($auth.user) {
        const role = $auth.user.roles[0]
        if (role === 'STORE') {
        } else {
            error({ statusCode: 403 })
        }
    }

}