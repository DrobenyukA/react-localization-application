import Header from './Header';
import Card from './Card';
import Footer from './Footer';
import './App.css';

function App() {
    return (
        <>
            <Header />
            <main role="main">
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1>Album example</h1>
                        <p className="lead text-muted">
                            Something short and leading about the collection below—its contents, the creator, etc. 
                            Make it short and sweet, but not too short so folks don’t simply skip over it entirely.
                        </p>
                    </div>
                </section>
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <Card />
                            </div>
                            <div className="col-md-4">
                                <Card />
                            </div>
                            <div className="col-md-4">
                                <Card />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
