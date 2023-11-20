export default function ({ $auth, error, $router }) {
    const user = $auth.user
    console.log(user, "USER");
    if (user) {
    } else {
        redirectToLogin()
        // error({ statusCode: 403 })
    }
}