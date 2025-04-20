import React, { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    // Google Analytics betiğini asenkron olarak yükle
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-11NZTXTQVG";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Script yüklendikten sonra Google Analytics'i başlat
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-11NZTXTQVG');
    };
  }, []); // Bu efekt sadece ilk renderda çalışır

  return null; // Bu bileşenin DOM'da görünmesi gerekmez
};

export default GoogleAnalytics;
