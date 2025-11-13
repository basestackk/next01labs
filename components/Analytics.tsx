"use client";

import Script from "next/script";

export default function Analytics() {
  // Cloudflare Web Analytics token - replace with your token from Cloudflare dashboard
  const cloudflareToken = process.env.NEXT_PUBLIC_CLOUDFLARE_TOKEN;
  
  // Google Analytics 4 Measurement ID
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      {/* Cloudflare Web Analytics */}
      {cloudflareToken && (
        <Script
          strategy="afterInteractive"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={`{"token": "${cloudflareToken}"}`}
        />
      )}

      {/* Google Analytics 4 */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
        }}
      />
    </>
  );
}

