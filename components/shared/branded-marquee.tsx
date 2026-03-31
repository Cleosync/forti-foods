import React from "react";
import Marquee from "react-fast-marquee";

const texts = [
  "Predictable Daily Feeding",
  "Infrastructure-Light Deployment",
  "Infrastructure free",
  "Authentic Dishes",
];

function BrandedMarquee() {
  return (
    <div className="pb-4 sm:pb-6 md:pb-8 lg:pb-10 w-full overflow-hidden">
      <div className="p-2 sm:p-3 md:p-4 bg-light-cream -translate-x-1 origin-bottom-left rotate-2 flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto w-[120vw] whitespace-nowrap">
        <Marquee autoFill direction="right">
          {texts.map((text, index) => (
            <React.Fragment key={index}>
              <div
                key={index}
                className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-tanker text-primary uppercase flex flex-row items-center"
              >
                {text}
                <svg
                  className="mx-2 sm:mx-3 md:mx-4 inline-flex"
                  width="40"
                  height="40"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    minWidth: "24px",
                  }}
                >
                  <path
                    d="M16.871 6.17595C16.9219 5.18163 17.7663 4.41939 18.7606 4.47024L20.5583 4.56217C21.5526 4.61302 22.3148 5.45743 22.264 6.45176L21.8592 14.367L28.915 10.7627C29.7998 10.3123 30.8859 10.6607 31.3363 11.5455L32.1555 13.1476C32.6059 14.0324 32.2575 15.1185 31.3727 15.5689L24.3169 19.1732L30.9682 23.4785C31.8024 24.0169 32.0438 25.1331 31.4999 25.9671L30.5215 27.4772C29.9832 28.3114 28.8669 28.5528 28.033 28.0089L21.3817 23.7036L20.9769 31.6189C20.926 32.6132 20.0816 33.3754 19.0873 33.3246L17.2897 33.2326C16.2953 33.1818 15.5331 32.3374 15.5839 31.3431L15.9887 23.4278L8.93294 27.0321C8.04816 27.4825 6.96204 27.1341 6.51164 26.2493L5.69239 24.6472C5.242 23.7625 5.59042 22.6763 6.47521 22.2259L13.531 18.6216L6.87972 14.3163C6.0455 13.778 5.80969 12.662 6.348 11.8277L7.32641 10.3176C7.86472 9.4834 8.98072 9.24759 9.81494 9.7859L16.4662 14.0912L16.871 6.17595Z"
                    fill="#F0821D"
                  />
                </svg>
              </div>
            </React.Fragment>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default BrandedMarquee;
