const BannerImg = ({
    urlImage,
    title
} : {
    urlImage: string,
    title: string
}) => {

    return (
        <section className="marginHeader image-container" style={{backgroundImage: `url(${urlImage})`}}>
            <div className="container box-text">
                <div className="mainBox">
                    <h2 className="banner-text">
                        <b>{title.toUpperCase()}</b>
                    </h2>
                    <div className="left-box">
                        <figure className="fig-1" />
                        <figure className="fig-2" />
                        <figure className="fig-3" />
                    </div>
                    <div className="right-box">
                        <figure className="fig-4" />
                        <figure className="fig-5" />
                        <figure className="fig-6" />
                    </div>
                </div>
            </div>
        </section>        
    )
}

export default BannerImg;