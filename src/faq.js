import React from "react";
import "./faq.css";

const Faq = () => {
  return (
    <section className="faq" id="work">
      <div className="faq-container">
        <div className="line4"></div>
        <p className="subheading3">Q & A</p>
        <div className="line5"></div>
        <br />
        <h2 className="title2">Frequently Asked Questions</h2>
      </div>

      <section className="faq-content">
        <details>
          <summary>
            What makes Luminar Design Co. different from other digital agencies?
          </summary>
          <p>
            Luminar Design Co. stands out due to our personalized approach,
            industry expertise, and commitment to delivering high-quality,
            custom solutions. We work closely with our clients to understand
            their unique needs and ensure their digital presence truly
            represents their brand.
          </p>
        </details>
        <details>
          <summary>What services do you offer?</summary>
          <p>
            Lorem ipsum dolor sit amet, eu alia suscipit mei. Reque iriure
            delectus vix id, ex sed forensibus suscipiantur. In eos exerci
            mollis apeirian, an qui latine alienum. Ad mea libris maluisset,
            consul assueverit sea ex.
          </p>
        </details>
        <details>
          <summary>
            How long does it take for a web design & development to be
            completed?
          </summary>
          <p>
            Lorem ipsum dolor sit amet, eu alia suscipit mei. Reque iriure
            delectus vix id, ex sed forensibus suscipiantur. In eos exerci
            mollis apeirian, an qui latine alienum. Ad mea libris maluisset,
            consul assueverit sea ex.{" "}
          </p>
        </details>
        <details>
          <summary>
            Can you help with updating or redesigning an existing website?
          </summary>
          <p>
            Lorem ipsum dolor sit amet, eu alia suscipit mei. Reque iriure
            delectus vix id, ex sed forensibus suscipiantur. In eos exerci
            mollis apeirian, an qui latine alienum. Ad mea libris maluisset,
            consul assueverit sea ex.{" "}
          </p>
        </details>
        <details>
          <summary>
            Do you off er custom web design, or do you use templates?
          </summary>
          <p>
            Lorem ipsum dolor sit amet, eu alia suscipit mei. Reque iriure
            delectus vix id, ex sed forensibus suscipiantur. In eos exerci
            mollis apeirian, an qui latine alienum. Ad mea libris maluisset,
            consul assueverit sea ex.{" "}
          </p>
        </details>
        <details>
          <summary>What industries do you specialize in?</summary>
          <p>
            Lorem ipsum dolor sit amet, eu alia suscipit mei. Reque iriure
            delectus vix id, ex sed forensibus suscipiantur. In eos exerci
            mollis apeirian, an qui latine alienum. Ad mea libris maluisset,
            consul assueverit sea ex.{" "}
          </p>
        </details>
        <details>
          <summary>
            How do you ensure that my website will be mobile-friendly?
          </summary>
          <p>
            Lorem ipsum dolor sit amet, eu alia suscipit mei. Reque iriure
            delectus vix id, ex sed forensibus suscipiantur. In eos exerci
            mollis apeirian, an qui latine alienum. Ad mea libris maluisset,
            consul assueverit sea ex.{" "}
          </p>
        </details>
        <details>
          <summary>Will I be able to update the website myself?</summary>
          <p>
            Lorem ipsum dolor sit amet, eu alia suscipit mei. Reque iriure
            delectus vix id, ex sed forensibus suscipiantur. In eos exerci
            mollis apeirian, an qui latine alienum. Ad mea libris maluisset,
            consul assueverit sea ex.{" "}
          </p>
        </details>
        <details>
          <summary>Do you offer e-commerce solutions?</summary>
          <p>
            Lorem ipsum dolor sit amet, eu alia suscipit mei. Reque iriure
            delectus vix id, ex sed forensibus suscipiantur. In eos exerci
            mollis apeirian, an qui latine alienum. Ad mea libris maluisset,
            consul assueverit sea ex.{" "}
          </p>
        </details>
        <details>
          <summary>
            What is the cost of a web design and development project?
          </summary>
          <p>
            Lorem ipsum dolor sit amet, eu alia suscipit mei. Reque iriure
            delectus vix id, ex sed forensibus suscipiantur. In eos exerci
            mollis apeirian, an qui latine alienum. Ad mea libris maluisset,
            consul assueverit sea ex.{" "}
          </p>
        </details>
        <details>
          <summary>How do you approach SEO for my website?</summary>
          <p>
            Lorem ipsum dolor sit amet, eu alia suscipit mei. Reque iriure
            delectus vix id, ex sed forensibus suscipiantur. In eos exerci
            mollis apeirian, an qui latine alienum. Ad mea libris maluisset,
            consul assueverit sea ex.{" "}
          </p>
        </details>
        <details>
          <summary>How do you ensure the security of my website?</summary>
          <p>
            Lorem ipsum dolor sit amet, eu alia suscipit mei. Reque iriure
            delectus vix id, ex sed forensibus suscipiantur. In eos exerci
            mollis apeirian, an qui latine alienum. Ad mea libris maluisset,
            consul assueverit sea ex.{" "}
          </p>
        </details>
      </section>
      <section className="book">
        <div class="testimonial">
          <div class="shadow"></div>
          <span class="top border"></span>
          <p>
            Our success in Web Design & Development provides Australian business
            growth to their respected businesses. Our main office is located in
            Sydney, and we also have an office branch on Sunshine Coast. We
            always appreciate the opportunity to meet in person and discuss how
            we can improve your digital presence.
          </p>
          <div className="btn-holder">
            <button class="btn btn-1 hover-filled-slide-down">
              <span>Book a Free Consultation</span>
            </button><br /><br /><br />
          </div>
          <span class="bottom border"></span>
        </div>
      </section>
    </section>
  );
};

export default Faq;
