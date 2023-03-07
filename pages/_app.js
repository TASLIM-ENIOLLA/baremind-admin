import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'

export default ({Component, pageProps}) => {
    return (
        <>
            <Head>
                <link href = '/img/logo.png' rel = 'shortcut icon' />
                <Script 
                    strategy = "beforeInteractive"
                    strategy = "afterInteractive"
                    strategy = "lazyOnload"
                    strategy = "worker"
                    src="../script/doc.jsfgd"
                />
            </Head>
            <div id = '__popup'></div>
            <Component className = "po-rel" style = {{zIndex: 0}} {...pageProps} />
        </>
    )
}
