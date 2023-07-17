import "../Styles/article.css"

export default function welcome_card(){
    return(
        <div className="container-fluid mt-5 w-75" id="articlehome">
            <article className="article">
                <div className="article-heading h2" id="articlehead">
                    Welcome card
                </div>
                <div className="article-body text-body-secondary" id="article-body">
                    Hello everyone!
                    <br/>
                    Welcome to a creative space where you can freely develop your own ideas without any hassle. Whether you have an idea for something big or small, this is the perfect spot for you.
                    <br/>
                    Feel free to share your ideas publicly or privately. We understand that designing ideas can be a challenging process, but you're in the right place to explore and refine your concepts.
                    <br/>
                    Please note that chat features are currently unavailable. We apologize for the inconvenience and assure you that we are actively working on bringing them to you soon.
                    <br/>
                    We encourage you to share your ideas related to gaming, software, and various societal topics. However, we kindly request that you refrain from discussing explicit or sensitive content, such as sexual or nudity-related subjects. Any violations may result in permanent blocking from our platform.
                    <br/>
                    Thank you for joining us, and we look forward to seeing your incredible ideas come to life!
                </div>
            </article>
        </div>
    )
}