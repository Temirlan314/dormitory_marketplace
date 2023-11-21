export default function ({ $auth, error }) {
    if ($auth.user) {
        const role = $auth.user.roles[0]
        if (role === 'CUSTOMER') {
        } else {
            error({ statusCode: 403 })
        }
    } else {

        redirectToLogin()

    }
}