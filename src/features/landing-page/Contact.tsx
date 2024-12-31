import Container from "@/components/Container";
import { Button } from "@/components/ui";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import React from "react";

export function Contact() {
  const t = useTranslations("contact-form");
  return (
    <div className="py-16">
      <Container>
        {/* <h2 className="text-4xl font-bold mb-10">Contact us</h2> */}
        <div className="flex flex-col md:flex-row items-center rounded-lg border dark:border-muted">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
            // width="600"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen={true}
            aria-hidden="false"
            tabIndex={0}
            className="w-full h-52 rounded-lg sm:h-80 md:w-1/2 md:h-[500px] rounded-s-lg md:rounded-e-none"
          />
          <form className="md:w-1/2 p-8">
            <h2 className="text-4xl font-bold">{t("title")}</h2>
            <p className="text-lg  mb-10 text-muted-foreground font-semibold">
              {t("subtitle")}
            </p>
            <div className="mb-5">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <Input
                name="name"
                type="text"
                placeholder={t("name_placeholder")}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <Input
                name="email"
                type="text"
                placeholder={t("email_placeholder")}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <Textarea
                rows={5}
                name="message"
                placeholder={t("message_placeholder")}
                required
              />
            </div>

            <Button type="submit" className="w-full text-white font-bold">
              {t("button")}
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
