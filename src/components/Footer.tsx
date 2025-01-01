import Link from "next/link";
import { LanguageChange } from "./LanguageChange";
import { useTranslations } from "next-intl";
import { Instagram } from "lucide-react";

const Footer = () => {
  const t = useTranslations();

  return (
    <div className="flex w-full justify-center container mx-auto">
      <footer className="min-h-footer bg-[#018000]/80 text-blue-dark w-full max-w-screen-lg rounded-t-xl mx-5 text-white">
        <div className="lg:flex px-8 pt-10 justify-between">
          <div className="lg:flex justify-between w-full">
            {/* Logo and Info */}
            <div className="lg:w-1/3">
              <Link href="/">
                <img
                  src="/assets/images/logos/main-logo.png"
                  className="w-56 lg:border-b border-gray-500 pb-5"
                  alt="Saudiana logo"
                />
              </Link>
              <div className="mt-4 lg:block hidden">
                onwardticket.com © 2024
              </div>
            </div>
          </div>

          {/* Mobile Footer */}
          <div className="w-full border-t-[1px] lg:hidden pb-10">
            <div className="w-full border-t-[1px] border-gray-500">
              <div className="flex pt-4 items-center space-x-2">
                <div className="font-bold text-lg">{t("footer.followUs")}</div>
                <Link
                  target="_blank"
                  href="https://www.tiktok.com/@onwardticket"
                >
                  <img
                    alt="nav link"
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="https://onwardticket.com/static/img/footer-tiktok.svg"
                  />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/onwardticket/"
                  className="w-9 h-9 bg-[#cdebe7] rounded-full flex justify-center items-center"
                >
                  <Instagram width="18" height="18" />
                </Link>
              </div>

              <div className="mt-4 border-t border-gray-500 pt-5 lg:hidden text-center">
                onwardticket.com © 2024
              </div>
            </div>
            
            <div className="text-[0.8rem] font-light leading-tight pt-2">
              {t("footer.infoText")}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
