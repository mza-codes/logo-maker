function Layout({ children, center }: props) {
    return (
        <main
            className={`w-full min-h-screen bg-cover bg-gradient-to-br from-green-400 via-green-100 to-emerald-600 
              ${center ? "flex flex-col items-center justify-center" : ""}`}>
            {children}
        </main>
    );
}

export default Layout;

type props = {
    children: JSX.Element;
    center: 1 | 0;
};
