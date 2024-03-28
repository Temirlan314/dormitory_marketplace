export default (ctx, inject) => {
    inject('notify', ({ title = 'Message', content = '', variant = 'success' }) => {
        $nuxt.$toast[variant](title, {
            position: "top-right",
            duration: 5000,
            iconPack: "mdi",
            className: ['custom-toast', `custom-toast-${variant}`],
            containerClass: `p-0`,
            icon: variant === 'success' ? "emoticon-happy" : "close-circle-outline",
            action: {
                icon: "close",
                class: `close-icon`,
                onClick: (e, toastObject) => {
                    toastObject.goAway(0);
                },
            },
        });
    })
}