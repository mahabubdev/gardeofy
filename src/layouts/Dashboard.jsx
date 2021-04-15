function DashboardLayout ({ children }) {
    return (
        <>
            <header>
                <h1>Header Area</h1>
            </header>

            <div>
                <h2>Sidebar Area</h2>
            </div>

            <div>
                { children }
            </div>
        </>
    )
}

export default DashboardLayout;