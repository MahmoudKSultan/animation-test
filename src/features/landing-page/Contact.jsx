"use client";
import Container from "@/components/Container";
import { Button } from "@/components/ui";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Contact() {
  const t = useTranslations("contact-form");
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e37dc0e7-1d7f-452b-8f96-ed7e7fd12717");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        toast.success(t("success"));
        console.log("Success", res);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("Error:", error);
    }
  };
  return (
    <div className="py-16 scroll-mt-10" id="contact">
      <Container>
        {/* <h2 className="text-4xl font-bold mb-10">Contact us</h2> */}
        <div className="flex flex-row md:flex-row items-center  rounded-lg border dark:border-muted flex-wrap">
          {/* <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093326!2d144.95373531531676!3d-37.816279442021024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f2e8f8df%3A0x5045675218ce7e33!2sVictoria%20Market!5e0!3m2!1sen!2sau!4v1693879939423!5m2!1sen!2sau"
  width="600"
  frameBorder="0"
  style={{ border: 0 }}
  allowFullScreen={true}
  aria-hidden="false"
  tabIndex={0}
  className="w-full h-52 rounded-lg sm:h-80 md:w-1/2 md:h-[500px] rounded-s-lg md:rounded-e-none"
/> */}
          <div className="flex justify-start flex-col-reverse w-full md:w-1/2">
            <div className="flex flex-col justify-start  p-4">
              <h3 className="text-lg text-primary font-semibold">
                {" "}
                {t("address")}:
              </h3>{" "}
              <p className="text-muted-foreground">
                Shanghai Plaza,138 HuaiHai Zhong Lu, 3F, Huangpu District,
                Shanghai
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.8443103960253!2d121.4774627!3d31.2250425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b2706f240b42e5%3A0x7a6cc1db546b899f!2zU2hhbmdoYWkgUGxhemEsIOaVsOa1pua4ryBIdWFuZyBQdSBRdSwgU2hhbmcgSGFpIFNoaSwg2KfZhNi12YrZhtiMIDIwMDAyMQ!5e0!3m2!1sar!2s!4v1735894052655!5m2!1sar!2s"
              // width="600"
              height="450"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-52 rounded-lg sm:h-80 md:h-[500px] rounded-s-lg md:rounded-e-none"
            ></iframe>
          </div>

          <form onSubmit={onSubmit} className="w-full md:w-1/2 p-8">
            <h2 className="text-4xl font-bold mb-10 text-primary dark:text-white">
              {t("title")}
            </h2>
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
            <br />
            <br />
            <Button type="submit" className="w-full text-white font-bold">
              {t("button")}
            </Button>
          </form>
        </div>
      </Container>
      <ToastContainer />
    </div>
  );
}

export default Contact;
