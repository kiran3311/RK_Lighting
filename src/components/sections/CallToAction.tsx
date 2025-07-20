import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

export const CTA = () => {

  const isMobile = /iPhone|Android|iPad/i.test(navigator.userAgent);

const openWhatsApp = () => {
  const number = "919021744981";
  const message = "Hi, I would like to know more about your RK lighting services!";
  // window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank");
  // const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  const baseUrl = isMobile ? "https://wa.me" : "https://web.whatsapp.com/send";
  const url = `${baseUrl}?phone=${number}&text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
  return (
    <section className="pb-20 relative">
      {" "}
      <Container>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">
              {" "}
              Quick Start you{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                Lighting
              </span>{" "}
              Journey
            </h1>
            <Paragraph className="pt-10">
              Leverage our wide range of festival and decorative lights to brighten your home, business, or event.
              Whether it's a wedding, Diwali, or any special moment — we provide vibrant, personalized lighting designs that match your vision and budget.
            </Paragraph>
            <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white">
              <Button onClick={openWhatsApp}> Get In Touch</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
