export default (ctx, inject) => {
    inject('notify', ({ title = 'Message', content = '', variant = 'success' }) => {
        $nuxt.$bvToast.toast(content, {
            title: title,
            variant: variant,
            autoHideDelay: 5000,
            toaster: "b-toaster-top-right",
        });
    })
}