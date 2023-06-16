import './Project.css'

function Project () {
return (
    <>
    <section className="work-section" id="work">
                <article id="image1">
                    <span role="img" aria-label="Yellow and Green Text bubble with balled up paper."></span>

					<div>
					<h3><a href="https://loyallhart.github.io/Horiseon-All-About-The-A11y/" className="link">A11y</a></h3>
					<p>HTML/CSS</p>
                    </div>
				</article>
                <article id="image2">
                    <span role="img" aria-label="Small succulent pot next two black books on HTML, CSS, and Javascript."></span>
                    <div>
                        <h3><a href="https://gabrielarec.github.io/FitMix/ " className="link">FitMix</a></h3>
                        <p>Javascript</p>
                    </div>
                </article>
                <article id="image3">
                    
                    <span role="img" aria-label="Diabetes management supplies on a orange background"></span>
                    
                    <div>
                        <h3><a href="https://invmanagement.herokuapp.com/" className="link">INVO</a></h3>
                        <p>Node</p>
                    </div>
                </article>
                <article id="image4">
                    
                    <span role="img" aria-label="A fruit plate next to bread, an avacodo, and orange juice."></span>
                   
                    <div>
                        <h3><a href="#" className="link">Coming Soon</a></h3>
                        <p>Python</p>
                    </div>
                </article>
                <article id="image5">
                    
                    <span role="img" aria-label="A royal blue display head with a pink brain connected to remote controls"></span>
                    
                    <div>
                        <h3><a href="#" className="link">Coming Soon</a></h3>
                        <p>Rust</p>
                    </div>
                </article>
                <article id="image6">
                    
                    <span role="img" aria-label="A wall led light that says do something great."></span>
                   
                    <div>
                        <h3><a href="#" className="link">Coming Soon</a></h3>
                        <p>Go</p>
                    </div>
                </article>

                </section>
                </>);

}

export default Project;