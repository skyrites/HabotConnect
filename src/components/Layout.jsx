export default function Layout({ children }) {
    let layout = 'h-svh';

    return <main className={layout}>{children}</main>;
}
