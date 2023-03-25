import './App.css'

function App() {

  return (
    <>
     <nav>
      <div className="container">
        <div className="nav-con">
          <div className="logo">
            <a href="#">SOFTGRAY</a>
          </div>
          <div className="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </div>
        </div>
      </div>
      </nav>
      <section className="banner">
        <div class="container">
          <div className="banner-con">
            <div className="banner-text">
              <h1>Creative Solutions</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non provident aut reiciendis nobis nihil corporis molestias officiis labore voluptatum odit optio totam deleniti et hic modi, autem incidunt quia repellat.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <div className="services-con">
            <div className="services-items">
              <h3>Service 1</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi nemo veniam similique illum magni, natus illo voluptatum ex earum, quaerat in officia! Iusto sequi eos accusamus, amet veritatis in adipisci!</p>
            </div>
            <div className="services-items">
              <h3>Service 2</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi nemo veniam similique illum magni, natus illo voluptatum ex earum, quaerat in officia! Iusto sequi eos accusamus, amet veritatis in adipisci!</p>
            </div>
            <div className="services-items">
              <h3>Service 3</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi nemo veniam similique illum magni, natus illo voluptatum ex earum, quaerat in officia! Iusto sequi eos accusamus, amet veritatis in adipisci!</p>
            </div>
            <div className="services-items">
              <h3>Service 4</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi nemo veniam similique illum magni, natus illo voluptatum ex earum, quaerat in officia! Iusto sequi eos accusamus, amet veritatis in adipisci!</p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p>&copy; 2023</p>
      </footer>
    </>
  )
}

export default App
