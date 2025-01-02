import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Footer = () => {
  const t = useTranslations();

  return (
    <div className="flex w-full justify-center container mx-auto">
      <footer className="min-h-footer bg-[#018000]/80 text-blue-dark w-full max-w-screen-lg rounded-t-xl mx-5 text-white  px-8 py-10">
        <div className="lg:flex justify-between">
          <div className="lg:flex justify-between w-full">
            {/* Logo and Info */}
            <div className="lg:w:1-/2">
              <Link href="/">
                <img
                  src="/assets/images/logos/main-logo.png"
                  className="w-full md:w-56 lg:border-b border-gray-500 pb-5"
                  alt="Saudiana logo"
                />
              </Link>
              <div className="mt-4 lg:block hidden">
              saudi8china.com  © 2025
              </div>
            </div>
          </div>

          {/* Mobile Footer */}
          <div className="w-full  pb-10">
            <div className="w-full pt-4 ">
              <div className="font-bold text-lg">{t("footer.followUs")}</div>
              <div className="flex gap-5 pt-4 items-center">
                <Link
                  target="_blank"
                  href="https://www.tiktok.com/"
                >
                  <Image
                    alt="Tiktok image"
                    width="30"
                    height="30"
                    src="/assets/images/logos/tiktok.png"
                  />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/"
                  className="rounded-full flex justify-center items-center"
                >
                  <Image
                    alt="Instgram image"
                    width="30"
                    height="30"
                    src="/assets/images/logos/x.png"
                  />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/"
                  className="rounded-full flex justify-center items-center"
                >
                  {" "}
                  <Image
                    width={30}
                    height={30}
                    alt="Wechat logo"
                    src={"/assets/images/logos/wechat.png"}
                  />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/onwardticket/"
                  className="rounded-full flex justify-center items-center"
                >
                  {" "}
                  <Image
                    width={30}
                    height={30}
                    alt="Wechat logo"
                    src={"/assets/images/logos/weibo.webp"}
                  />
                </Link>

                <Link
                  target="_blank"
                  href="https://www.instagram.com/"
                  className="rounded-full flex justify-center items-center"
                >
                  {" "}
                  <Image
                    width={45}
                    height={45}
                    alt="chiniese company"
                    src={"/assets/images/logos/ch.png"}
                  />
                </Link>
              </div>

            </div>

            {/* <div className="text-[0.8rem] font-light leading-tight pt-2">
              {t("footer.infoText")}
            </div> */}
          </div>
        </div>
        <div className="h-px bg-gray-400 w-full my-10"></div>
        <p className="text-white text-center">{t("footer.copyright")}</p>
      </footer>
    </div>
  );
};

export default Footer;
