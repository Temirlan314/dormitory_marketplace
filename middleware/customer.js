export default function ({ $auth, error }) {
    const role = $auth.role
    if (role === 'CUSTOMER') {
    } else {
        error({ statusCode: 403 })
    }
}