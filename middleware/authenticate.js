export default function ({ $auth, error, $router }) {
    const user = $auth.user
    if (user) {
    } else {
        error({ statusCode: 403 });
    }
}