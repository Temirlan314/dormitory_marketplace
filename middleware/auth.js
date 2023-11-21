export default function ({ $auth, error, $router }) {
    const user = $auth.user
    console.log(user, "USER");
    if (user) {
    } else {
        redirectToLogin()
        this.$router.push('/auth/login')
        // error({ statusCode: 403 })
    }
}