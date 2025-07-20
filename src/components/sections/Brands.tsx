import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

//const logos = ["facebook", "instagram", "whatsapp", "youtube"];

const socialMedia = [
  {
    link: "",
    logo: "facebook"
  },
  {
    link: "https://www.instagram.com/accounts/login/?next=%2Frk_lightings_1212%2F&source=omni_redirect",
    logo: "instagram"
  },
  {
    link: "https://www.whatsapp.com/catalog/918355959472/?app_absent=0",
    logo: "whatsapp",
    wp: true,
    msg: "Hi, I would like to know more about your festival lighting services!",
    number: 8007426473
  },
  {
    link: "https://www.youtube.com/@RkLighting12",
    logo: "youtube"
  }
]

const isMobile = /iPhone|Android|iPad/i.test(navigator.userAgent);

const openWhatsApp = () => {
const number = "918355959472";
  const message = "Hi, I would like to know more about your RK lighting services!";
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

export const Brands = () => {
  return (
    <section>
      {" "}
      <Container className="space-y-8">
        {/* <div className="text-center max-w-3xl mx-auto">
          <Title> Stay Connected with Us </Title>
        </div>
        <Paragraph className="pt-10">
          Follow us on social media to get updates, lighting tips, festival ideas, and special offers! </Paragraph> */}

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title> Stay Connected with Us</Title>
          <Paragraph>
            Follow us on social media to get updates, lighting tips, festival ideas, and special offers!
          </Paragraph>
        </div>
        <div className="flex justify-center flex-wrap gap-4">
          {socialMedia.map((item, key) => (
            <div
              key={key}
              className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group"
            >
              {!item?.wp && (
                <a href={item.link}>
                  <img
                    src={`/assets/logos/${item.logo}.png`}
                    width="100"
                    height="60"
                    alt={item.logo}
                    className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-120 cursor-pointer"
                  />
                </a>
              )}

              {item?.wp && (
                <img
                  src={`/assets/logos/${item.logo}.png`}
                  width="100"
                  height="60"
                  alt={item.logo}
                  className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-120 cursor-pointer"
                  onClick={openWhatsApp}
                />
              )}

            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
