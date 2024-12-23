import Link from "next/link";
import { LanguageChange } from "./LanguageChange";
import { useTranslations } from "next-intl";
import { Instagram } from "lucide-react";

const Footer = () => {
  const t = useTranslations();

  return (
    <div className="flex w-full justify-center container mx-auto">
      <footer className="bg-backgroundSecondary min-h-footer text-blue-dark w-full max-w-screen-lg rounded-t-xl mx-5">
        <div className="lg:flex px-8 pt-10 justify-between">
          <div className="lg:flex justify-between w-full">
            {/* Logo and Info */}
            <div className="lg:w-1/3">
              <Link href="/#">
                <img
                  src="/assets/images/logos/main-logo.webp"
                  className="w-56 lg:border-b border-gray-500 pb-5"
                  alt="Onward Ticket"
                />
              </Link>
              <div className="mt-4 lg:block hidden">
                onwardticket.com © 2024
              </div>
              <div className="lg:block hidden text-[0.65rem] font-light leading-tight text- py-4 w-56">
                {t("footer.infoText")}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="w-2/3 pb-8 max-lg:hidden">
              <nav className="grid sm:grid-cols-3 grid-cols-2 gap-4">
                {/* Get Help */}
                <div>
                  <div className="text-xl font-bold">
                    {t("footer.navigation.getHelp")}
                  </div>
                  <div className="text-sm flex flex-col">
                    <a
                      target="_self"
                      className="no-underline hover:underline"
                      href="/support#faq"
                    >
                      {t("footer.navigation.faqs")}
                    </a>
                    <a
                      target="_self"
                      className="no-underline hover:underline"
                      href="/support"
                    >
                      {t("footer.navigation.contactSupport")}
                    </a>
                    <a
                      target="_blank"
                      className="no-underline hover:underline"
                      href="https://www.trustpilot.com/review/onwardticket.com"
                    >
                      {t("footer.navigation.trustpilotReviews")}
                    </a>
                  </div>
                </div>

                {/* About */}
                <div>
                  <div className="text-xl font-bold">
                    {t("footer.navigation.about")}
                  </div>
                  <div className="text-sm flex flex-col">
                    <a
                      target="_self"
                      className="no-underline hover:underline"
                      href="/about"
                    >
                      {t("footer.navigation.whoWeAre")}
                    </a>
                    <a
                      target="_self"
                      className="no-underline hover:underline"
                      href="/privacy-policy"
                    >
                      {t("footer.navigation.privacyPolicy")}
                    </a>
                    <a
                      target="_self"
                      className="no-underline hover:underline"
                      href="/terms"
                    >
                      {t("footer.navigation.termsConditions")}
                    </a>
                  </div>
                </div>

                {/* Switch Language */}
                <div>
                  <div className="text-xl font-bold">
                    {t("footer.navigation.switchLanguage")}
                  </div>
                  <div className="text-sm flex flex-col pt-2">
                    <div className="relative">
                      <LanguageChange />
                    </div>
                  </div>
                </div>

                {/* here */}
                <div className="">
                  <div className="md:text-lg font-bold">
                    {t("footer.navigation.spreadTheWord")}
                  </div>
                  <div className="text-sm flex flex-col">
                    <a
                      target="_self"
                      className="no-underline hover:underline"
                      href="/affiliate"
                    >
                      {t("footer.navigation.affiliates")}
                    </a>
                  </div>
                </div>

                <div className="max-sm:pb-4">
                  <div className="md:text-lg font-bold">
                    {t("footer.navigation.stayInTouch")}
                  </div>
                  <div className="text-sm flex flex-col">
                    <a
                      target="_self"
                      className="no-underline hover:underline"
                      href="https://blog.onwardticket.com"
                    >
                      {t("footer.navigation.blog")}
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          {/* Mobile Footer */}
          <div className="w-full border-t-[1px] lg:hidden pb-10">
            <div className="pt-5 flex items-center space-x-2">
              <div className="font-bold">
                {t("footer.navigation.switchLanguage")}
              </div>
              <div className="relative">
                <LanguageChange />
              </div>
            </div>
            <div className="sm:grid grid-cols-2 pt-4 gap-y-4 items-start pb-5">
              <div className="max-sm:pb-4">
                <div className="md:text-lg font-bold">
                  {t("footer.navigation.getHelp")}
                </div>
                <div className="text-sm flex flex-col">
                  <a
                    target="_self"
                    className="no-underline hover:underline"
                    href="/support#faq"
                  >
                    {t("footer.navigation.faqs")}
                  </a>
                  <a
                    target="_self"
                    className="no-underline hover:underline"
                    href="/support"
                  >
                    {t("footer.navigation.contactSupport")}
                  </a>
                  <a
                    target="_blank"
                    className="no-underline hover:underline"
                    href="https://www.trustpilot.com/review/onwardticket.com"
                  >
                    {t("footer.navigation.trustpilotReviews")}
                  </a>
                </div>
              </div>

              {/* About Section */}
              <div className="max-sm:pb-4">
                <div className="md:text-lg font-bold">
                  {t("footer.navigation.about")}
                </div>
                <div className="text-sm flex flex-col">
                  <a
                    target="_self"
                    className="no-underline hover:underline"
                    href="/about"
                  >
                    {t("footer.navigation.whoWeAre")}
                  </a>
                  <a
                    target="_self"
                    className="no-underline hover:underline"
                    href="/privacy-policy"
                  >
                    {t("footer.navigation.privacyPolicy")}
                  </a>
                  <a
                    target="_self"
                    className="no-underline hover:underline"
                    href="/terms"
                  >
                    {t("footer.navigation.termsConditions")}
                  </a>
                </div>
              </div>

              {/* Spread the Word Section */}
              <div className="max-sm:pb-4">
                <div className="md:text-lg font-bold">
                  {t("footer.navigation.spreadTheWord")}
                </div>
                <div className="text-sm flex flex-col">
                  <a
                    target="_self"
                    className="no-underline hover:underline"
                    href="/affiliate"
                  >
                    {t("footer.navigation.affiliates")}
                  </a>
                </div>
              </div>

              {/* Stay in Touch Section */}
              <div className="max-sm:pb-4">
                <div className="md:text-lg font-bold">
                  {t("footer.navigation.stayInTouch")}
                </div>
                <div className="text-sm flex flex-col">
                  <a
                    target="_self"
                    className="no-underline hover:underline"
                    href="https://blog.onwardticket.com"
                  >
                    {t("footer.navigation.blog")}
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full border-t-[1px] border-gray-500">
              <div className="flex pt-4 items-center space-x-2">
                <div className="font-bold text-lg">{t("footer.followUs")}</div>
                <a target="_blank" href="https://www.tiktok.com/@onwardticket">
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
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/onwardticket/"
                  className="w-9 h-9 bg-[#cdebe7] rounded-full flex justify-center items-center"
                >
                  <Instagram width="18" height="18" />
                </a>
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
