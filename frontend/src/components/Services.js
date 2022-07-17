import React from "react";
import "./services.css";

const Services = () => {
  return (
    <>
      <div className="service-header">
        <h3>Our Service And Support</h3>
        {/* <p>We prvide best and quality product to our customer</p> */}
      </div>

      <div className="service-main">
        <section>
          <img height="30px" width="30px" src="/images/truck.png" />
          <p className="service-para">free delivery</p>
        </section>

        <section>
          <img height="30px" width="30px" src="/images/money.png" />
          <p className="service-para">On demand</p>
        </section>

        <section>
          <img height="30px" width="50px" src="/images/quality.png" />
          <p className="service-para">Best Quality</p>
        </section>
      </div>
    </>
  );
};

export default Services;
