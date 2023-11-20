export default function ({ $auth, error }) {
    const role = $auth.role
    console.log(role, "ROLE");
}