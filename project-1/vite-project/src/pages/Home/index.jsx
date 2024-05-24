import React from "react";
import Style from "./index.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Products from "../../conponents/Products";
import { Helmet } from "react-helmet";
const index = () => {
  return (
    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        ...
      </div>
      <section className={Style.title}>
        <Row>
          <Col lg={7}>
            <div className={Style.titleText}>
              <p>SPRING / SUMMER COLLECTION 2017</p>
              <h1>Get up to 30% Off New Arrivals</h1> <br />
              <button>SHOP NOW</button>
            </div>
          </Col>
        </Row>
      </section>
      <section className={Style.cards}>
        <Container>
          <Row>
            <Col lg={4} sm={12}>
              <div className={Style.card}>
                <div className={Style.cardText}>
                  <h4>WOMEN'S</h4>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={12}>
              <div className={Style.card2}>
                <div className={Style.cardText}>
                  <h4>WOMEN'S</h4>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={12}>
              <div className={Style.card3}>
                <div className={Style.cardText}>
                  <h4>WOMEN'S</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={Style.products}>
        <div className={Style.productsText}>
          <h1>New Arrivals</h1> <br />
          <div></div>
          <div className={Style.rows}>
            <button>ALL</button>
            <button>WOMEN'S</button>
            <button>ACCESSORIES</button>
            <button>MEN'S</button>
          </div>
        </div>

        <Products />
      </section>
      <section className={Style.items}>
        <div className={Style.productsText}>
          <h1>New Arrivals</h1> <br />
          <div></div>
        </div>

        <Container>
          <Row>
            <Col className={Style.box} lg={3}>
              <div className={Style.cardd}>
                <div className={Style.cardImg}>
                  <img
                    src="https://preview.colorlib.com/theme/coloshop/images/product_1.png"
                    alt=""
                  />
                </div>
                <div className={Style.cardInfo}>
                  <p>Fujifilm X100T 16 MP Digital Camera (Silver)</p>
                  <h5>$520.00</h5>
                </div>
                <button>add to card</button>
              </div>
            </Col>
            <Col className={Style.box} lg={3}>
              <div className={Style.cardd}>
                <div className={Style.cardImg}>
                  <img
                    src="https://preview.colorlib.com/theme/coloshop/images/product_1.png"
                    alt=""
                  />
                </div>
                <div className={Style.cardInfo}>
                  <p>Fujifilm X100T 16 MP Digital Camera (Silver)</p>
                  <h5>$520.00</h5>
                </div>
                <button>add to card</button>
              </div>
            </Col>
            <Col className={Style.box} lg={3}>
              <div className={Style.cardd}>
                <div className={Style.cardImg}>
                  <img
                    src="https://preview.colorlib.com/theme/coloshop/images/product_1.png"
                    alt=""
                  />
                </div>
                <div className={Style.cardInfo}>
                  <p>Fujifilm X100T 16 MP Digital Camera (Silver)</p>
                  <h5>$520.00</h5>
                </div>
                <button>add to card</button>
              </div>
            </Col>
            <Col className={Style.box} lg={3}>
              <div className={Style.cardd}>
                <div className={Style.cardImg}>
                  <img
                    src="https://preview.colorlib.com/theme/coloshop/images/product_1.png"
                    alt=""
                  />
                </div>
                <div className={Style.cardInfo}>
                  <p>Fujifilm X100T 16 MP Digital Camera (Silver)</p>
                  <h5>$520.00</h5>
                </div>
                <button>add to card</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={Style.end}>
        <div className={Style.productsText}>
          <h1>Latest Blogs</h1> <br />
          <div></div>
        </div>
        <Container>
          <Row className={Style.endRow}>
            <Col lg={4} sm={12}>
            <div className={Style.endCard}>
                <div className={Style.endInfo}>
                    <h3>Here are the trends I see coming this fall</h3>
                    <p>BY ADMIN | DEC 01, 2017</p>
                    <a href="#">Read more</a>
                </div>
            </div>
            </Col>
            <Col lg={4} sm={12}>
            <div className={Style.endCard1}>
                <div className={Style.endInfo}>
                    <h3>Here are the trends I see coming this fall</h3>
                    <p>BY ADMIN | DEC 01, 2017</p>
                    <a href="#">Read more</a>
                </div>
            </div>
            </Col>
            <Col lg={4} sm={12}>
            <div className={Style.endCard2}>
                <div className={Style.endInfo}>
                    <h3>Here are the trends I see coming this fall</h3>
                    <p>BY ADMIN | DEC 01, 2017</p>
                    <a href="#">Read more</a>
                </div>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default index;
