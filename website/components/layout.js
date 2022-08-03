function Layout({ children }) {
    return <div>
        <div className={'backgroundcontainer'}>
            <div className={'nav'}>
                <h1>Splivid Tips</h1>
                <div className={'links'}>
                    <a href={'/minecraft'}>Minecraft: Java</a>
                    <a href={'/minecraft'}>Miencraft: Bedrock</a>
                    <a href={'/minecraft'}>Garry's Mod</a>
                    <a href={'/minecraft'}>Others</a>
                </div>
            </div>

            <div className={'safecontainer'}>
                {children}
            </div>
        </div>
    </div>
}

export default Layout
