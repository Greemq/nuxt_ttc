export default function ({isHMR, app, route, redirect}) {
    if (isHMR) return;
    const locale = app.i18n.locale;
    if (route.path === '/' && locale !== app.i18n.defaultLocale) {
        return redirect(`/${locale}`);
    }
}