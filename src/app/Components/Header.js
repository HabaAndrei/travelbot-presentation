import Image from "next/image";
import Script from "next/script";

export default function Header() {
  return (
    <>
      {/* Google scripts */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-8JJ76QCHTE"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8JJ76QCHTE');
        `}
      </Script>
      <Script src="https://analytics.ahrefs.com/analytics.js" data-key="UlO2BqLQTLRhFstlmGdrAQ" async />

      {/* Ahrefs Analytics */}
      <Script id="ahrefs-analytics" strategy="afterInteractive">
        {`
          var ahrefs_analytics_script = document.createElement('script');
          ahrefs_analytics_script.async = true;
          ahrefs_analytics_script.src = 'https://analytics.ahrefs.com/analytics.js';
          ahrefs_analytics_script.setAttribute('data-key', 'UlO2BqLQTLRhFstlmGdrAQ');
          document.getElementsByTagName('head')[0].appendChild(ahrefs_analytics_script);
        `}
      </Script>

      <header className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col gap-[32px] row-start-2 items-center">
          <Image
            src="/travelbot.svg"
            alt="Travelbot logo"
            width={180}
            height={38}
            priority
          />
        </div>
      </header>
    </>
  );
}
