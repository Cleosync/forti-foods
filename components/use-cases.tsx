"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Icon } from "@iconify/react";
import Button from "./ui/button";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useCases = [
  {
    id: 1,
    title: "Oil and Gas",
    description:
      "Feeding for offshore rigs and remote flow stations. We remove the risk of kitchen fires and food poisoning, keeping your crew working 24/7.",
    icon: (
      <svg
        className="w-full h-full"
        width="59"
        height="59"
        viewBox="0 0 59 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.5549 2.76367L35.9462 5.21459C40.3461 8.07759 43.7447 12.0162 47.1099 19.4089L49.049 16.5503C48.455 14.5449 47.8044 12.418 47.2053 10.6329C46.5603 8.71057 45.8757 7.07609 45.6952 6.80782C45.543 6.58196 44.4566 5.71863 42.8685 4.92489C41.4528 4.21735 39.6105 3.4666 37.555 2.76379L37.5549 2.76367ZM38.5148 9.85404L32.2391 14.8084C33.4792 15.52 34.371 16.7769 34.58 18.2456L41.206 13.0145C40.3392 11.8058 39.45 10.7691 38.5148 9.85404ZM29.9033 16.2585C28.4272 16.2585 27.2529 17.4328 27.2529 18.9089C27.2529 20.385 28.4272 21.5593 29.9033 21.5593C31.3795 21.5593 32.5537 20.385 32.5537 18.9089C32.5537 17.4328 31.3795 16.2585 29.9033 16.2585ZM25.3698 20.2314L10.0819 32.3009C11.446 32.839 12.4333 34.1461 12.4989 35.678L28.1748 23.3022C26.8293 22.7681 25.7818 21.6323 25.3698 20.2314ZM45.46 20.7439V44.9438H47.5342V22.4782L46.7181 23.6812L45.9745 21.9275C45.8062 21.5316 45.6347 21.137 45.46 20.7439ZM34.785 20.8065L32.9624 22.2174L33.3995 24.2934L31.7256 23.1748L29.996 24.5139L33.3143 26.7314L25.0975 30.5148L25.6529 27.8762L23.1205 29.8368L20.3141 43.1669L20.2634 43.1894L20.2947 43.2597L17.9993 54.1626H16.1904V56.2368H41.7725V53.9968L34.785 20.8065ZM34.298 28.5618L35.6831 35.1403L26.573 32.1191L34.298 28.5618ZM24.4481 33.5995L34.4081 36.9028L22.6528 42.1273L24.4481 33.5995ZM8.7002 34.1119C7.73338 34.1119 6.97168 34.8735 6.97168 35.8404C6.97168 36.8074 7.73338 37.5689 8.7002 37.5689C9.66701 37.5689 10.4287 36.8072 10.4287 35.8404C10.4287 34.8736 9.66701 34.1119 8.7002 34.1119ZM36.3501 38.3096L38.0732 46.4944L25.1724 43.2775L36.3501 38.3096ZM11.1341 38.7534C10.6046 39.1972 9.95406 39.5003 9.24191 39.6035L11.6925 44.9439H13.9746L11.1341 38.7534ZM6.26748 38.7544L3.4258 44.9439H5.70837L8.16009 39.6038C7.44783 39.5009 6.7971 39.198 6.26748 38.7544ZM22.1207 44.6544L35.5779 48.0098L20.2401 53.5875L22.1207 44.6544ZM3.28418 47.0179V54.1625H14.1162V47.0179H3.28418ZM43.8467 47.0179V48.8617H49.1475V47.0179H43.8467ZM38.6238 49.1094L39.6876 54.1625H24.7279L38.6238 49.1094ZM43.8467 50.9359V54.1625H49.1475V50.9359H43.8467ZM51.2217 54.1625V56.2367H55.7158V54.1625H51.2217Z"
          fill="white"
          fillOpacity="0.9"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Remote Construction & Mining",
    description:
      "Standardized meals for workforces in the middle of nowhere. No kitchens, no chefs, and no cold-chain logistics required.",
    icon: (
      <svg
        className="w-full h-full"
        width="59"
        height="59"
        viewBox="0 0 59 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M40.8317 16.2373L40.7211 16.1512C40.5084 14.5361 39.7353 12.8534 38.5283 11.4349C36.5677 9.13025 33.3719 7.375 29.0944 7.375C24.8784 7.375 21.9075 9.29742 20.1547 11.6808C19.3366 12.783 18.7523 14.0408 18.4375 15.3769C18.3804 15.6271 18.3344 15.8797 18.2999 16.134L18.1671 16.2361C16.7855 17.3067 15.7715 18.6047 16.0124 20.0932C16.2435 21.5313 17.5439 22.4065 18.7534 22.9412C19.0615 23.0772 19.3922 23.205 19.7454 23.3247C19.5676 24.7103 19.6872 26.1179 20.0961 27.4536C20.5049 28.7894 21.1937 30.0228 22.1165 31.0715C23.0394 32.1203 24.1751 32.9604 25.448 33.5358C26.7209 34.1113 28.1018 34.409 29.4988 34.409C30.8958 34.409 32.2767 34.1113 33.5496 33.5358C34.8225 32.9604 35.9582 32.1203 36.8811 31.0715C37.8039 30.0228 38.4927 28.7894 38.9015 27.4536C39.3104 26.1179 39.43 24.7103 39.2522 23.3247C39.6054 23.2058 39.9361 23.078 40.2442 22.9412C41.4537 22.4065 42.7529 21.5313 42.9852 20.0932C43.2261 18.6047 42.2121 17.3067 40.8305 16.2361M20.827 18.0331C20.6672 17.5734 20.6254 16.8347 20.8332 15.9214C21.0372 15.0302 21.46 14.0531 22.1238 13.1484V16.5938C22.1238 16.9197 22.2533 17.2324 22.4838 17.4629C22.7143 17.6934 23.027 17.8229 23.353 17.8229C23.679 17.8229 23.9916 17.6934 24.2221 17.4629C24.4526 17.2324 24.5821 16.9197 24.5821 16.5938V10.9519C25.5937 10.3766 26.8168 9.97469 28.2696 9.86406V14.1354C28.2696 14.4614 28.3991 14.7741 28.6296 15.0046C28.8602 15.2351 29.1728 15.3646 29.4988 15.3646C29.8248 15.3646 30.1374 15.2351 30.3679 15.0046C30.5985 14.7741 30.728 14.4614 30.728 14.1354V9.94027C32.0259 10.1037 33.279 10.5214 34.4155 11.1694V16.5938C34.4155 16.9197 34.545 17.2324 34.7755 17.4629C35.006 17.6934 35.3186 17.8229 35.6446 17.8229C35.9706 17.8229 36.2833 17.6934 36.5138 17.4629C36.7443 17.2324 36.8738 16.9197 36.8738 16.5938V13.2971C38.232 15.0376 38.5504 16.9158 38.1681 18.0429C38.0734 18.3219 38.0821 18.6256 38.1925 18.8987C38.3029 19.1719 38.5077 19.3962 38.7697 19.531C39.0317 19.6658 39.3333 19.702 39.6197 19.6331C39.9062 19.5641 40.1583 19.3946 40.3302 19.1553C40.5724 19.4934 40.5638 19.6728 40.5588 19.7011C40.5429 19.7994 40.3548 20.205 39.2498 20.6943C38.7704 20.9057 38.2001 21.0962 37.5597 21.2646L37.5302 21.272C36.8357 21.4514 36.0625 21.6038 35.2353 21.7292C33.7011 21.9503 32.1548 22.0775 30.605 22.1103C29.5397 22.1373 28.4737 22.1258 27.4092 22.0758C26.1848 22.0203 24.964 21.9038 23.7512 21.7268C22.9825 21.6153 22.2202 21.4635 21.4674 21.272L21.4379 21.2646C20.8601 21.1203 20.2949 20.9295 19.7478 20.6943C18.6428 20.205 18.4547 19.7994 18.4388 19.7011C18.4338 19.6728 18.4252 19.4934 18.6674 19.1553C18.8396 19.3957 19.0926 19.5659 19.3802 19.6347C19.6677 19.7036 19.9704 19.6666 20.2328 19.5303C20.4952 19.3941 20.6997 19.1679 20.8089 18.8931C20.918 18.6184 20.9245 18.3135 20.827 18.0343M22.1508 23.9454C22.5597 24.0249 22.9809 24.0974 23.4144 24.163C24.7272 24.3596 26.1407 24.485 27.5788 24.544C28.8607 24.5968 30.1442 24.5968 31.4261 24.544C32.8569 24.485 34.2655 24.3596 35.5721 24.163C36.0097 24.099 36.4346 24.0265 36.8468 23.9454C36.9342 24.9633 36.8091 25.9883 36.4795 26.9554C36.15 27.9225 35.6231 28.8105 34.9322 29.5632C34.2414 30.3159 33.4017 30.9169 32.4663 31.328C31.531 31.7391 30.5205 31.9514 29.4988 31.9514C28.4771 31.9514 27.4666 31.7391 26.5312 31.328C25.5959 30.9169 24.7562 30.3159 24.0654 29.5632C23.3745 28.8105 22.8476 27.9225 22.518 26.9554C22.1885 25.9883 22.0634 24.9633 22.1508 23.9454Z"
          fill="white"
          fillOpacity="0.9"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.6458 35.019C36.4546 35.1604 37.2782 35.3251 38.1042 35.5132C44.7945 37.041 51.625 40.0955 51.625 44.2501V51.6251H7.375V44.2501C7.375 40.0955 14.2055 37.041 20.8958 35.5132C21.7109 35.3276 22.5307 35.1628 23.3542 35.019V40.5626H35.6458V35.019ZM18.4375 38.7065C19.2414 38.4607 20.0661 38.2382 20.8958 38.0379V43.0209H38.1042V38.0391C39.3495 38.3364 40.58 38.6924 41.7917 39.106V49.1668H44.25V40.0672C44.6073 40.2262 44.9506 40.3897 45.28 40.5577C46.6776 41.2681 47.7138 42.0007 48.3702 42.7013C49.0155 43.3897 49.1667 43.8973 49.1667 44.2501V49.1668H9.83333V44.2501C9.83333 43.8973 9.98452 43.3897 10.6298 42.7013C11.2862 42.0007 12.3224 41.2681 13.72 40.5577C14.4194 40.2012 15.1777 39.8669 15.9792 39.5559V49.1668H18.4375V38.7065Z"
          fill="white"
          fillOpacity="0.9"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Crisis & Emergency Response",
    description:
      "Immediate food aid for disaster zones and IDP camps. Our 12-month shelf life means you are always ready to deploy.",
    icon: (
      <svg
        className="w-full h-full"
        width="53"
        height="53"
        viewBox="0 0 53 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip_crisis)">
          <path
            d="M47.4792 47.4792H51.8959V29.8125M51.8959 29.8125L39.75 16.5625H5.52088L1.10421 47.4792H7.72921M51.8959 29.8125H34.2292M38.6459 47.4792H16.5625M25.3959 12.1458L29.8125 9.9375L34.2292 12.1458V16.5625H25.3959V12.1458Z"
            stroke="white"
            strokeOpacity="0.9"
            strokeWidth="2.45833"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M34.2292 16.5623V47.479M43.0626 34.229H38.6459M29.8126 5.52067V1.104M36.4376 6.62484L39.7501 3.31234M43.0626 12.1457H38.6459M23.1876 6.62484L19.8751 3.31234M16.5626 12.1457H20.9792M16.5626 32.0207V36.4373H23.1876V32.0207H27.6042V25.3957H23.1876V20.979H16.5626V25.3957H12.1459V32.0207H16.5626ZM38.6459 49.1353L43.0626 51.8957L47.4792 49.1353V44.7186L43.0626 41.9582L38.6459 44.7186V49.1353ZM7.72925 49.1353L12.1459 51.8957L16.5626 49.1353V44.7186L12.1459 41.9582L7.72925 44.7186V49.1353Z"
            stroke="white"
            strokeOpacity="0.9"
            strokeWidth="2.45833"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip_crisis">
            <rect
              width="53"
              height="53"
              fill="white"
              transform="matrix(-1 0 0 1 53 0)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Security & Tactical Units",
    description:
      "Field rations for mobile teams and border outposts. Lightweight, high-energy meals that don't need a fridge or a stove.",
    icon: (
      <svg
        className="w-full h-full"
        width="58"
        height="58"
        viewBox="0 0 58 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.2194 20.9594C28.303 20.8282 28.4184 20.7202 28.5548 20.6453C28.6913 20.5705 28.8444 20.5312 29 20.5312C29.1556 20.5312 29.3087 20.5705 29.4451 20.6453C29.5816 20.7202 29.6969 20.8282 29.7806 20.9594L30.8342 22.6149C31.9962 24.4449 33.5475 25.9962 35.3776 27.1582L37.0306 28.2094C37.1618 28.2931 37.2698 28.4084 37.3447 28.5449C37.4195 28.6813 37.4588 28.8344 37.4588 28.99C37.4588 29.1456 37.4195 29.2988 37.3447 29.4352C37.2698 29.5716 37.1618 29.687 37.0306 29.7706L35.3751 30.8243C33.5451 31.9862 31.9938 33.5375 30.8318 35.3676L29.7806 37.0206C29.6969 37.1519 29.5816 37.2599 29.4451 37.3347C29.3087 37.4096 29.1556 37.4488 29 37.4488C28.8444 37.4488 28.6913 37.4096 28.5548 37.3347C28.4184 37.2599 28.303 37.1519 28.2194 37.0206L27.1657 35.3652C26.0038 33.5351 24.4525 31.9838 22.6224 30.8219L20.9694 29.7706C20.8382 29.687 20.7301 29.5716 20.6553 29.4352C20.5804 29.2988 20.5412 29.1456 20.5412 28.99C20.5412 28.8344 20.5804 28.6813 20.6553 28.5449C20.7301 28.4084 20.8382 28.2931 20.9694 28.2094L22.6248 27.1582C24.4549 25.9962 26.0062 24.4449 27.1681 22.6149L28.2194 20.9594Z"
          stroke="white"
          strokeOpacity="0.9"
          strokeWidth="3.6875"
          strokeLinejoin="round"
        />
        <path
          d="M9.44191 12.7695C16.6049 13.2867 21.2256 6.03427 29.0652 6.03427C36.7841 5.8796 40.5613 12.8662 48.4759 12.8662C52.7196 34.4639 43.8915 48.0287 29.1281 51.9485C15.4425 48.6957 5.15957 34.9932 9.44191 12.7695Z"
          stroke="white"
          strokeOpacity="0.9"
          strokeWidth="3.6875"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 5,
    title: "School & Institutional Feeding",
    description:
      "Safe, healthy meals for large groups. We solve the problem of bad hygiene and lack of storage in rural schools.",
    icon: (
      <svg
        className="w-full h-full"
        width="59"
        height="59"
        viewBox="0 0 59 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M42.4062 40.4064L29.5 47.6661L16.5938 40.4064V32.7361L12.9062 30.6875V42.5629L29.5 51.8968L46.0938 42.5629V30.6875L42.4062 32.7361V40.4064Z"
          fill="white"
          fillOpacity="0.9"
        />
        <path
          d="M29.5 5.29834L3.6875 18.6826V21.8785L29.5 36.2184L51.625 23.9271V34.1096H55.3125V18.6826L29.5 5.29834ZM47.9375 21.7574L44.25 23.8059L29.5 32.0008L14.75 23.8059L11.0625 21.7574L8.50672 20.3375L29.5 9.45208L50.4933 20.3375L47.9375 21.7574Z"
          fill="white"
          fillOpacity="0.9"
        />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Marine & Shipping",
    description:
      "Reliable nutrition for long-haul voyages. Save space and power by deleting the need for massive industrial freezers.",
    icon: (
      <svg
        className="w-full h-full"
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 48.3615C7.41375 48.5775 9.864 46.125 11.9992 46.125C14.1345 46.125 17.6062 48.3862 19.5007 48.3615C21.7732 48.3817 24.435 46.125 27 46.125C29.565 46.125 32.2267 48.3817 34.4992 48.3615C37.413 48.5775 39.8632 46.125 42.0007 46.125C44.1382 46.125 47.6055 48.3862 49.5 48.3615M13.5 46.125C10.3095 42.1515 8.06175 37.0642 7.10325 34.3687C6.7995 33.5137 6.64875 33.0862 6.82425 32.6767C7.002 32.2695 7.43175 32.0782 8.298 31.6957L25.1505 24.2303C26.0595 23.8253 26.5162 23.625 27 23.625C27.4837 23.625 27.9405 23.8275 28.8517 24.2325L45.702 31.6957C46.566 32.0782 46.998 32.2695 47.1757 32.6767C47.3512 33.0862 47.1982 33.5137 46.8967 34.3687C45.9382 37.0642 43.6905 42.1515 40.5 46.125"
          stroke="white"
          strokeOpacity="0.9"
          strokeWidth="3.6875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 29.25L13.986 22.9342C14.2898 18.9922 14.4405 17.0212 15.7343 15.8242C17.028 14.625 19.0058 14.625 22.959 14.625H31.041C34.9942 14.625 36.972 14.625 38.2635 15.8242C39.5595 17.0212 39.7103 18.9922 40.014 22.9342L40.5 29.25"
          stroke="white"
          strokeOpacity="0.9"
          strokeWidth="3.6875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.125 14.625L19.512 11.538C19.863 8.72325 20.0385 7.31475 20.997 6.46875C21.9532 5.625 23.3707 5.625 26.208 5.625H27.792C30.627 5.625 32.0467 5.625 33.003 6.46875C33.9615 7.31475 34.137 8.72325 34.488 11.538L34.875 14.625"
          stroke="white"
          strokeOpacity="0.9"
          strokeWidth="3.6875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const cases = [
  {
    id: 1,
    title: "Oil and Gas",
    image:
      "https://images.unsplash.com/photo-1629540946404-ebe133e99f49?q=80&w=1103&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Remote Construction",
    image:
      "https://images.unsplash.com/photo-1647735282077-c12699af40be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Crisis Response",
    image:
      "https://images.unsplash.com/photo-1619569124496-4f35021bdbf1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Security & Tactical",
    image:
      "https://images.unsplash.com/photo-1571795184552-5f1df723de54?q=80&w=1152&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "School Feeding",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Marine & Shipping",
    image:
      "https://images.unsplash.com/photo-1572970321684-466a06878540?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Brand colours
const BRAND = "#0C282A";
const BRAND_LT = "#1a5255"; // slightly lighter for hover
const ACCENT = "#BACE32"; // teal accent for progress bar
const INTERVAL_MS = 4500;

function UseCases() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const gridItems = useRef<(HTMLDivElement | null)[]>([]);

  const [activeCase, setActiveCase] = useState(0);
  const [visible, setVisible] = useState(true);
  // key is bumped each time the active case changes → restarts CSS animation
  const [timerKey, setTimerKey] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* ── transition helper ── */
  const goTo = useCallback((next: number) => {
    setVisible(false);
    setTimeout(() => {
      setActiveCase(next);
      setTimerKey((k) => k + 1);
      setVisible(true);
    }, 380);
  }, []);

  /* ── auto-cycle ── */
  const startTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveCase((prev) => {
        const next = (prev + 1) % cases.length;
        goTo(next);
        return prev;
      });
    }, INTERVAL_MS);
  }, [goTo]);

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startTimer]);

  const handleTabClick = (i: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    goTo(i);
    setTimeout(startTimer, 380);
  };

  /* ── GSAP scroll reveals ── */
  useGSAP(
    () => {
      gsap.set([headingRef.current, paraRef.current, btnRef.current], {
        autoAlpha: 0,
        y: 32,
      });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 35%",
            scrub: 1,
          },
        })
        .to(
          headingRef.current,
          { autoAlpha: 1, y: 0, ease: "power3.out", duration: 0.4 },
          0,
        )
        .to(
          paraRef.current,
          { autoAlpha: 1, y: 0, ease: "power3.out", duration: 0.4 },
          0.15,
        )
        .to(
          btnRef.current,
          { autoAlpha: 1, y: 0, ease: "power3.out", duration: 0.35 },
          0.28,
        );

      gsap.set(gridItems.current, { autoAlpha: 0, y: 36 });
      gsap.to(gridItems.current, {
        autoAlpha: 1,
        y: 0,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef, dependencies: [] },
  );

  return (
    <section
      ref={sectionRef}
      style={{ background: BRAND }}
      className="text-white mt-0 sm:mt-8"
    >
      {/* ══════════════════════════════════════
          HEADER
      ══════════════════════════════════════ */}
      <div className="py-6 sm:py-8 px-5 sm:px-8 flex flex-col items-center text-center border-b border-white/10">
        <span
          className="inline-flex items-center gap-3 mb-6 text-[10px] sm:text-xs font-semibold tracking-widest uppercase"
          style={{ color: "rgba(255,255,255,0.38)" }}
        >
          <span
            className="w-5 sm:w-8 h-px"
            style={{ background: "rgba(255,255,255,0.2)" }}
          />
          Where We Operate
          <span
            className="w-5 sm:w-8 h-px"
            style={{ background: "rgba(255,255,255,0.2)" }}
          />
        </span>

        <h3
          ref={headingRef}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-3xl text-balance"
        >
          Use Cases
        </h3>

        <p
          ref={paraRef}
          className="text-sm sm:text-base lg:text-xl mt-2 sm:mt-3 max-w-lg leading-relaxed text-balance"
          style={{ color: "rgba(255,255,255,0.48)" }}
        >
          Forti replaces kitchens, cold storage, and complex logistics with a
          predictable, low-risk feeding model.
        </p>

        <div ref={btnRef} className="mt-3 sm:mt-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSciZNKyJc9lpI3B-uRYUO4XU_iZOQY2lgmNivJP8-c0Xc3hfg/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-brand-green! text-primary!">
              Request a Demo
              <Icon
                icon="heroicons-solid:arrow-sm-right"
                width="20"
                height="20"
              />
            </Button>
          </a>
        </div>
      </div>

      {/* ══════════════════════════════════════
          IMMERSIVE SHOWCASE
      ══════════════════════════════════════ */}
      <div className="relative">
        {/* Full-bleed image stage */}
        <div
          className="relative overflow-hidden"
          style={{ height: "clamp(360px, 62vh, 640px)" }}
        >
          {/* Background images — cross-fade */}
          {cases.map((item, i) => (
            <div
              key={item.id}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: activeCase === i ? 1 : 0 }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority={i === 0}
              />

              {/* Subtle black overlay for text readability — image remains clearly visible */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.8) 100%)`,
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 60%)`,
                }}
              />
            </div>
          ))}

          {/* Content — fades + slides on case change */}
          <div
            className="relative z-10 h-full flex flex-col justify-end
                          px-5 sm:px-10 lg:px-16
                          pb-10 sm:pb-14
                          max-w-7xl mx-auto w-full"
            style={{
              transition: "opacity 0.38s ease, transform 0.38s ease",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(14px)",
            }}
          >
            <div className="flex flex-col gap-2 sm:gap-3 max-w-xs sm:max-w-md lg:max-w-lg">
              {/* Counter */}
              <span
                className="text-[10px] sm:text-xs font-mono tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {String(activeCase + 1).padStart(2, "0")} /{" "}
                {String(cases.length).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="w-9 h-9 sm:w-12 sm:h-12 mb-0.5">
                {useCases[activeCase].icon}
              </div>

              {/* Title */}
              <h4 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                {useCases[activeCase].title}
              </h4>

              {/* Description */}
              <p
                className="text-xs sm:text-sm lg:text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {useCases[activeCase].description}
              </p>
            </div>
          </div>
        </div>

        {/* ── Tab strip ── */}
        <div
          className="border-t border-white/10 overflow-x-auto"
          style={{ background: "rgba(0,0,0,0.25)" }}
          /* Hide scrollbar cross-browser */
        >
          <div className="flex" style={{ minWidth: "max-content" }}>
            {cases.map((item, i) => {
              const isActive = activeCase === i;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(i)}
                  className="relative flex flex-col gap-1.5 text-left transition-colors border-r border-white/10 last:border-r-0"
                  style={{
                    padding: "14px 18px",
                    minWidth: "120px",
                    flex: "1 0 120px",
                    background: isActive
                      ? "rgba(255,255,255,0.08)"
                      : "transparent",
                    color: isActive ? "white" : "rgba(255,255,255,0.36)",
                  }}
                >
                  {/* Animated progress bar — restarts via key */}
                  {isActive && (
                    <span
                      key={timerKey}
                      className="absolute top-0 left-0 h-[2px]"
                      style={{
                        background: ACCENT,
                        animation: `timerSweep ${INTERVAL_MS}ms linear forwards`,
                      }}
                    />
                  )}

                  <span
                    className="text-[9px] sm:text-[10px] font-mono tracking-widest"
                    style={{ color: "rgba(255,255,255,0.22)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold leading-snug">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          FEATURE GRID
      ══════════════════════════════════════ */}
      <div
        ref={gridRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden border border-white/10">
          {useCases.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                gridItems.current[index] = el;
              }}
              className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 border-b border-r border-white/10 transition-colors cursor-default"
              style={{ background: "transparent" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              {/* Icon bubble */}
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center p-2 flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                {item.icon}
              </div>

              <span
                className="text-[9px] font-mono tracking-widest"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <p
                className="font-semibold text-sm sm:text-base leading-snug"
                style={{ color: "rgba(255,255,255,0.88)" }}
              >
                {item.title}
              </p>

              <p
                className="text-xs sm:text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.38)" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CSS keyframes ── */}
      <style>{`
        @keyframes timerSweep {
          from { width: 0%; }
          to   { width: 100%; }
        }
        /* hide scrollbar on tab strip */
        section [style*="overflow-x: auto"]::-webkit-scrollbar,
        section div::-webkit-scrollbar { display: none; }
        section div { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

export default UseCases;
