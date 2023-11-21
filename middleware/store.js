export default function ({ $auth, error }) {
    const role = $auth.role
    if (role === 'STORE') {
    } else {
        error({ statusCode: 403 })
    }
}