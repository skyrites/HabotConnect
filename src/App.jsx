import Footer from './components/footer/Footer';
import Header from './components/Header';
import HeroContainer from './components/HeroContainer';
import HowItWorks from './components/howitworks/HowItWorks';
import Layout from './components/Layout';
import ReadyToDive from './components/ReadyToDive';
import SectionGetVerified from './components/SectionGetVerified';
import SectionTabs from './components/SectionTabs';

function App() {
    return (
        <Layout>
            <Header />
            <HeroContainer />
            <ReadyToDive />
            <SectionTabs />
            <SectionGetVerified />
            <HowItWorks />
            <Footer />
        </Layout>
    );
}

export default App;
