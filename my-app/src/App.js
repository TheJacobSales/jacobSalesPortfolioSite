import './globals.css'
import Layout from './components/layout/Layout';
import Carousel, {CarouselItem} from './components/carousel/Carousel';

function App() {
  return (
    <Layout>
      <section id="landing" className='section-landing'>
        <section className='left-section'>
          <div className='div-headers'>
            <h1>Hi my name is,</h1>
            <h2>Jacob Sales</h2>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae fugiat, eum optio necessitatibus minima beatae quaerat dicta possimus ex officia! Numquam odit voluptas architecto expedita sint dolorem, magni commodi quae?</p>
          {/* <div>Dice Roller</div> */}
        </section>
        <section className='right-section'>
          {/* <img src='komiScared.jpg' className='max-h-600'/> */}
          <Carousel>
            <CarouselItem>Item 1</CarouselItem>
            <CarouselItem>Item 2</CarouselItem>
            <CarouselItem>Item 3</CarouselItem>
            <CarouselItem>Item 4</CarouselItem>
          </Carousel>
        </section>
      </section>
      <section id="about" className='section-about'>
        <section className='left-section'>
          <img src='komiScared.jpg' style={{alignSelf: "center"}}/>
        </section>
        <section className='right-section'>
          <h1>About Me</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores esse possimus earum quidem sunt porro cum laborum? Minus doloremque at porro rerum distinctio mollitia dicta nam explicabo sapiente, delectus in?</p>
        </section>
      </section>
      <section id='projects' className='section-projects'>
        <h1>My Works</h1>
        <ul className='project-grid'>
          <li>Image 1</li>
          <li>Item 1</li>
          <li>Image 2</li>
          <li>Item 2</li>
          <li>Image 3</li>
          <li>Item 3</li>
        </ul>
      </section>
      <section id='contact' className='section-contact'>
        <section className='interests'>
          <section className='section-left'>
            <h1>Let's Talk!</h1>
            <aside>I swear I don't bite!</aside>
          </section>
          <section className='section-right'>
            <h2>I'm always interested in:</h2>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </section>
        </section>
        <h2>Say Hi!</h2>
        <form action="submit"></form>
      </section>
    </Layout>  
  );
}

export default App;
