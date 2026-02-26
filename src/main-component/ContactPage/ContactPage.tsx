import React, { Fragment } from "react";
import HeaderTwo from "../../components/HeaderTwo/HeaderTwo";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import AiFooterSection from "../../components/ai-marketing-components/AiFooterSection/AiFooterSection";
import ContactInfoSection from "./ContactInfoSection";
import ContactForm from "../../components/ContactFrom/ContactForm";

// import background image
import contactBg from "../../images/bg/contact-bg02.png";

const ContactPage: React.FC = () => {
  return (
    <Fragment>
      <div className='ai-marketing'>
        <div className='about-page inner-page'>
          <div className="body_wrap o-clip">
            <HeaderTwo />
            <main>
              <PageTitle pageTitle="Contact Us" pagesub="Yhteystiedot" />
              <ContactInfoSection />
              <section className="contact">
                <div className="container">
                  <div
                    className="xb-contact-wrap xb-border bg_img"
                    style={{
                      backgroundImage: `url(${contactBg})`,
                    }}
                  >
                    <div className="xb-contact-form xb-main-contact xb-border">
                      <div className="form-heading text-center mb-30">
                        <h3 className="title">Ready to start your project?</h3>
                        <p className="sub-title clr-white">
                          We respond within 24 hours on business days.
                        </p>
                      </div>

                      <ContactForm />
                    </div>

                    {/* Google Map - Lahti, Finland */}
                    <div className="google-map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61180.94947385564!2d25.619247!3d60.983842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468e2a3a3ef9c755%3A0xd7dff3bb7f4c4399!2sLahti%2C%20Finland!5e0!3m2!1sen!2sfi!4v1700000000000!5m2!1sen!2sfi"
                        loading="lazy"
                        title="Helmies Oy - Lahti, Finland"
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{ width: "100%", height: "100%", border: 0 }}
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div className="row justify-content-center mt-100">
                    <div className="col-lg-8">
                      <div className="sec-title text-center mb-50">
                        <span className="sub-title">FAQ</span>
                        <h2 className="title">Frequently Asked Questions</h2>
                      </div>

                      <div className="xb-faq-wrap">
                        <div className="xb-border" style={{ padding: '30px', marginBottom: '20px', borderRadius: '10px' }}>
                          <h4 style={{ color: '#23c9ff', marginBottom: '10px' }}>How do I get a quote?</h4>
                          <p style={{ color: '#ccc' }}>
                            Submit the contact form above with your project details. We'll review and send you an estimate within 24 hours on business days.
                          </p>
                        </div>

                        <div className="xb-border" style={{ padding: '30px', marginBottom: '20px', borderRadius: '10px' }}>
                          <h4 style={{ color: '#23c9ff', marginBottom: '10px' }}>What technologies do you use?</h4>
                          <p style={{ color: '#ccc' }}>
                            We work with React, Next.js, TypeScript, Node.js, Supabase, Three.js, Stripe, and many more modern tools. We choose the best stack for each project's needs.
                          </p>
                        </div>

                        <div className="xb-border" style={{ padding: '30px', marginBottom: '20px', borderRadius: '10px' }}>
                          <h4 style={{ color: '#23c9ff', marginBottom: '10px' }}>Do you work with international clients?</h4>
                          <p style={{ color: '#ccc' }}>
                            Yes! We're based in Lahti, Finland but serve clients worldwide. We've completed projects across 10+ countries.
                          </p>
                        </div>

                        <div className="xb-border" style={{ padding: '30px', marginBottom: '20px', borderRadius: '10px' }}>
                          <h4 style={{ color: '#23c9ff', marginBottom: '10px' }}>What is the typical project timeline?</h4>
                          <p style={{ color: '#ccc' }}>
                            Timelines vary by project scope. A standard website takes 2-4 weeks, while complex platforms like PlateOS may take 2-3 months. We'll provide a detailed timeline with your quote.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <AiFooterSection />
            <Scrollbar />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactPage;