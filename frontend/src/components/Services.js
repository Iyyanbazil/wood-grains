import React from "react";
import "./services.css";

const Services = () => {
  return (
    <>
      <div className="service-header">
        <h3>Product on Discount</h3>
       
      </div>

      <div className="service-main">
        <section>
          <img className="service-discount-img" src="/images/dinning.jpg" />
          <section className="service-disc-tag">
          <p>Discount on</p>
          </section>
          <p className="service-para">Dinning</p>
        
        </section>

        <section >
          <img className="service-discount-img" src="/images/almirah.jpg" />
          <section className="service-disc-tag">
          <p>Discount on</p>
          </section>
          <p className="service-para">Almirah</p>

        </section>

        <section>
          <img className="service-discount-img" src="/images/dressing.jpg" />
          <section className="service-disc-tag">
          <p>Discount on</p>
          </section>
          <p className="service-para">Dressing</p>
        </section>
      </div>
    </>
  );
};

export default Services;
