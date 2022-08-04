function Layout({ children }) {
    return <div>
        <div className={'backgroundcontainer'}>
            <div className={'nav'}>
                <h1>Splivid Tips</h1>
                <div className={'links'}>
                    <a href={'/minecraft'}>Minecraft: Java</a>
                    <a href={'/garrysmod'}>Garry's Mod</a>
                </div>
            </div>

            <div className={'safecontainer'}>
                {children}
            </div>
        </div>
    </div>
}

export default Layout
