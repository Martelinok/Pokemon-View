import './SvgIcon.css';

export default function SvgIcon({
  name,
  fill = '#000000',
  stroke = 'none'
}) {

  const icons = {
    logo: (
      <svg width="30" height="30" viewBox="0 0 461 368" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M230.149 74.939L65.986 210.274C65.986 210.465 65.938 210.746 65.842 211.129C65.748 211.509 65.698 211.785 65.698 211.981V349.022C65.698 353.97 67.507 358.258 71.124 361.869C74.74 365.482 79.022 367.3 83.971 367.3H193.601V257.664H266.698V367.304H376.327C381.275 367.304 385.563 365.49 389.174 361.869C392.791 358.262 394.606 353.971 394.606 349.022V211.981C394.606 211.221 394.502 210.647 394.318 210.274L230.149 74.939Z" fill={fill} />
        <path d="M457.122 179.438L394.6 127.476V10.989C394.6 8.32599 393.744 6.13599 392.026 4.42199C390.322 2.70999 388.132 1.85399 385.463 1.85399H330.647C327.981 1.85399 325.792 2.70999 324.077 4.42199C322.366 6.13599 321.511 8.32699 321.511 10.989V66.662L251.849 8.41699C245.765 3.46799 238.531 0.993988 230.155 0.993988C221.78 0.993988 214.547 3.46799 208.457 8.41699L3.17199 179.438C1.26899 180.958 0.225993 183.004 0.0319929 185.574C-0.161007 188.142 0.503993 190.385 2.02899 192.287L19.73 213.415C21.255 215.127 23.251 216.174 25.726 216.557C28.011 216.749 30.296 216.081 32.581 214.559L230.149 49.817L427.719 214.558C429.245 215.886 431.24 216.549 433.715 216.549H434.573C437.044 216.173 439.036 215.119 440.569 213.411L458.272 192.286C459.794 190.38 460.461 188.141 460.263 185.57C460.068 183.007 459.021 180.961 457.122 179.438Z" fill={fill} />
      </svg>
    ),
    Menu: (
      <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.0562 11.946H0.943756C0.422534 11.946 0 12.3401 0 12.8263V13.0567C0 13.5429 0.422534 13.937 0.943756 13.937H19.0562C19.5775 13.937 20 13.5429 20 13.0567V12.8263C20 12.3401 19.5775 11.946 19.0562 11.946Z" fill={fill} />
        <path d="M19.0562 5.97302H0.943756C0.422534 5.97302 0 6.36714 0 6.8533V7.08374C0 7.56991 0.422534 7.96402 0.943756 7.96402H19.0562C19.5775 7.96402 20 7.56991 20 7.08374V6.8533C20 6.36714 19.5775 5.97302 19.0562 5.97302Z" fill={fill} />
        <path d="M19.0562 0H0.943756C0.422534 0 0 0.394114 0 0.88028V1.11072C0 1.59689 0.422534 1.991 0.943756 1.991H19.0562C19.5775 1.991 20 1.59689 20 1.11072V0.88028C20 0.394114 19.5775 0 19.0562 0Z" fill={fill} />
      </svg>
    ),
    BackArrow: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.1667 11.2216C19.6269 11.2216 20 10.6746 20 9.99992C20 9.3252 19.6269 8.7782 19.1667 8.7782H0.833338C0.373109 8.7782 0 9.32519 0 9.99992C0 10.6746 0.373108 11.2216 0.833338 11.2216H19.1667Z" fill={fill} />
        <path d="M7.97687 19.6422C8.39338 20.1193 9.0687 20.1193 9.48521 19.6422C9.90173 19.1651 9.90173 18.3917 9.48521 17.9146L2.57501 10L9.48521 2.08538C9.90173 1.60832 9.90173 0.83485 9.48521 0.357793C9.0687 -0.119264 8.39338 -0.119264 7.97687 0.357793L0.318715 9.12908L0.312416 9.13611C-0.104139 9.61322 -0.104139 10.3868 0.312416 10.8639L0.312495 10.8638L7.97684 19.6422L7.97687 19.6422V19.6422Z" fill={fill} />
      </svg>
    ),
    en: (
      <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="#1A3086" />
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
          <circle cx="20" cy="20" r="20" fill="#1A3086" />
        </mask>
        <g mask="url(#mask0)">
          <mask id="path-3-outside-1" maskUnits="userSpaceOnUse" x="0" y="5" width="40" height="30" fill={fill}>
            <rect fill="white" y="5" width="40" height="30" />
            <path fillRule="evenodd" clipRule="evenodd" d="M35.3518 33.1085L38.0171 29.083L24.6874 20.2571L38.3483 11.2537L35.6916 7.2226L20.3109 17.3593L4.66536 7L2 11.0255L15.9283 20.2477L2.29272 29.2343L4.94947 33.2655L20.3047 23.1455L35.3518 33.1085Z" />
          </mask>
          <path fillRule="evenodd" clipRule="evenodd" d="M35.3518 33.1085L38.0171 29.083L24.6874 20.2571L38.3483 11.2537L35.6916 7.2226L20.3109 17.3593L4.66536 7L2 11.0255L15.9283 20.2477L2.29272 29.2343L4.94947 33.2655L20.3047 23.1455L35.3518 33.1085Z" fill="#E5313D" />
          <path d="M38.0171 29.083L38.8509 29.6351L39.403 28.8013L38.5692 28.2492L38.0171 29.083ZM35.3518 33.1085L34.7997 33.9423L35.6335 34.4944L36.1856 33.6606L35.3518 33.1085ZM24.6874 20.2571L24.1371 19.4221L22.8731 20.2551L24.1353 21.0909L24.6874 20.2571ZM38.3483 11.2537L38.8986 12.0887L39.7336 11.5384L39.1833 10.7035L38.3483 11.2537ZM35.6916 7.2226L36.5266 6.67231L35.9763 5.83733L35.1413 6.38763L35.6916 7.2226ZM20.3109 17.3593L19.7588 18.1931L20.3096 18.5578L20.8612 18.1943L20.3109 17.3593ZM4.66536 7L5.21743 6.16621L4.38364 5.61413L3.83156 6.44792L4.66536 7ZM2 11.0255L1.16621 10.4734L0.61413 11.3072L1.44792 11.8593L2 11.0255ZM15.9283 20.2477L16.4786 21.0827L17.7426 20.2497L16.4804 19.4139L15.9283 20.2477ZM2.29272 29.2343L1.74243 28.3994L0.907458 28.9496L1.45775 29.7846L2.29272 29.2343ZM4.94947 33.2655L4.1145 33.8158L4.6648 34.6507L5.49977 34.1004L4.94947 33.2655ZM20.3047 23.1455L20.8568 22.3117L20.306 21.947L19.7545 22.3105L20.3047 23.1455ZM37.1833 28.531L34.518 32.5564L36.1856 33.6606L38.8509 29.6351L37.1833 28.531ZM24.1353 21.0909L37.465 29.9168L38.5692 28.2492L25.2395 19.4233L24.1353 21.0909ZM37.798 10.4188L24.1371 19.4221L25.2377 21.0921L38.8986 12.0887L37.798 10.4188ZM34.8566 7.77289L37.5134 11.804L39.1833 10.7035L36.5266 6.67231L34.8566 7.77289ZM20.8612 18.1943L36.2419 8.05757L35.1413 6.38763L19.7606 16.5243L20.8612 18.1943ZM4.11328 7.83379L19.7588 18.1931L20.863 16.5255L5.21743 6.16621L4.11328 7.83379ZM2.83379 11.5775L5.49915 7.55208L3.83156 6.44792L1.16621 10.4734L2.83379 11.5775ZM16.4804 19.4139L2.55208 10.1917L1.44792 11.8593L15.3762 21.0815L16.4804 19.4139ZM2.84302 30.0693L16.4786 21.0827L15.378 19.4128L1.74243 28.3994L2.84302 30.0693ZM5.78445 32.7152L3.12769 28.684L1.45775 29.7846L4.1145 33.8158L5.78445 32.7152ZM19.7545 22.3105L4.39918 32.4305L5.49977 34.1004L20.855 23.9805L19.7545 22.3105ZM35.9038 32.2747L20.8568 22.3117L19.7527 23.9793L34.7997 33.9423L35.9038 32.2747Z" fill="white" mask="url(#path-3-outside-1)" />
          <mask id="path-5-outside-2" maskUnits="userSpaceOnUse" x="-3" y="-2" width="46" height="44" fill={fill}>
            <rect fill="white" x="-3" y="-2" width="46" height="44" />
            <path fillRule="evenodd" clipRule="evenodd" d="M22.7907 0H16.7442V16L-1 16V24H16.7442V40H22.7907V24H41V16L22.7907 16V0Z" />
          </mask>
          <path fillRule="evenodd" clipRule="evenodd" d="M22.7907 0H16.7442V16L-1 16V24H16.7442V40H22.7907V24H41V16L22.7907 16V0Z" fill="#E5313D" />
          <path d="M16.7442 0V-2H14.7442V0H16.7442ZM22.7907 0H24.7907V-2H22.7907V0ZM16.7442 16V18L18.7442 18V16H16.7442ZM-1 16L-1 14H-3V16H-1ZM-1 24H-3V26H-1V24ZM16.7442 24H18.7442V22H16.7442V24ZM16.7442 40H14.7442V42H16.7442V40ZM22.7907 40V42H24.7907V40H22.7907ZM22.7907 24V22H20.7907V24H22.7907ZM41 24V26H43V24H41ZM41 16H43V14H41V16ZM22.7907 16H20.7907V18H22.7907V16ZM16.7442 2H22.7907V-2H16.7442V2ZM18.7442 16V0H14.7442V16H18.7442ZM-1 18H16.7442V14L-1 14L-1 18ZM1 24V16H-3V24H1ZM16.7442 22H-1V26H16.7442V22ZM18.7442 40V24H14.7442V40H18.7442ZM22.7907 38H16.7442V42H22.7907V38ZM20.7907 24V40H24.7907V24H20.7907ZM41 22H22.7907V26H41V22ZM39 16V24H43V16H39ZM22.7907 18L41 18V14L22.7907 14V18ZM20.7907 0V16H24.7907V0H20.7907Z" fill="white" mask="url(#path-5-outside-2)" />
        </g>
      </svg>
    ),
    es: (
      <svg width="32" height="30" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="21" cy="20" r="20" fill="#E5313D" />
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="10" width="42" height="20">
          <rect y="10" width="42" height="20" fill="#FFCE33" />
        </mask>
        <g mask="url(#mask0)">
          <circle cx="21" cy="20" r="20" fill="#FFCE33" />
        </g>
      </svg>
    ),
    Github: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_17_2)">
          <path fillRule="evenodd" clipRule="evenodd" d="M10 0C15.523 0 20 4.58993 20 10.2529C20 14.7819 17.138 18.624 13.167 19.981C12.66 20.082 12.48 19.7618 12.48 19.4888C12.48 19.1508 12.492 18.0468 12.492 16.6748C12.492 15.7188 12.172 15.0949 11.813 14.7769C14.04 14.5229 16.38 13.6558 16.38 9.71777C16.38 8.59777 15.992 7.68382 15.35 6.96582C15.454 6.70682 15.797 5.66395 15.252 4.25195C15.252 4.25195 14.414 3.97722 12.505 5.30322C11.706 5.07622 10.85 4.96201 10 4.95801C9.15 4.96201 8.295 5.07622 7.497 5.30322C5.586 3.97722 4.746 4.25195 4.746 4.25195C4.203 5.66395 4.546 6.70682 4.649 6.96582C4.01 7.68382 3.619 8.59777 3.619 9.71777C3.619 13.6458 5.954 14.5262 8.175 14.7852C7.889 15.0412 7.63 15.4928 7.54 16.1558C6.97 16.4178 5.522 16.8712 4.63 15.3042C4.63 15.3042 4.101 14.3191 3.097 14.2471C3.097 14.2471 2.122 14.2341 3.029 14.8701C3.029 14.8701 3.684 15.1851 4.139 16.3701C4.139 16.3701 4.726 18.2001 7.508 17.5801C7.513 18.4371 7.522 19.2448 7.522 19.4888C7.522 19.7598 7.338 20.0769 6.839 19.9819C2.865 18.6269 0 14.7829 0 10.2529C0 4.58993 4.478 0 10 0Z" fill={fill} />
        </g>
        <defs>
          <clipPath id="clip0_17_2">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>

    ),
    Phone: (
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.05 5C15.0267 5.19057 15.9244 5.66826 16.6281 6.37194C17.3317 7.07561 17.8094 7.97326 18 8.95L14.05 5ZM14.05 1C16.0793 1.22544 17.9716 2.13417 19.4162 3.57701C20.8609 5.01984 21.772 6.91101 22 8.94L14.05 1ZM21 16.92V19.92C21.0011 20.1985 20.9441 20.4742 20.8325 20.7293C20.7209 20.9845 20.5573 21.2136 20.3521 21.4019C20.1469 21.5901 19.9046 21.7335 19.6408 21.8227C19.3769 21.9119 19.0974 21.9451 18.82 21.92C15.7428 21.5856 12.787 20.5341 10.19 18.85C7.77383 17.3147 5.72534 15.2662 4.19 12.85C2.49998 10.2412 1.44824 7.27099 1.12 4.18C1.09501 3.90347 1.12788 3.62476 1.2165 3.36162C1.30513 3.09849 1.44757 2.85669 1.63477 2.65162C1.82196 2.44655 2.04981 2.28271 2.30379 2.17052C2.55778 2.05833 2.83234 2.00026 3.11 2H6.11C6.59531 1.99522 7.06579 2.16708 7.43376 2.48353C7.80173 2.79999 8.04208 3.23945 8.11 3.72C8.23662 4.68007 8.47145 5.62273 8.81 6.53C8.94455 6.88792 8.97366 7.27691 8.89391 7.65088C8.81415 8.02485 8.62886 8.36811 8.36 8.64L7.09 9.91C8.51356 12.4135 10.5865 14.4864 13.09 15.91L14.36 14.64C14.6319 14.3711 14.9752 14.1858 15.3491 14.1061C15.7231 14.0263 16.1121 14.0555 16.47 14.19C17.3773 14.5286 18.3199 14.7634 19.28 14.89C19.7658 14.9585 20.2094 15.2032 20.5265 15.5775C20.8437 15.9518 21.0122 16.4296 21 16.92Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    Email: (
      <svg width="23" height="23" viewBox="0 0 36 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 2.16235V22.5476C0 23.6566 0.811731 24.5554 1.93005 24.5554H33.7448C34.8619 24.5554 35.6748 23.6462 35.6748 22.5476V2.16235C35.6748 0.945323 34.9479 0 33.7448 0H1.93005C0.680505 0 0 0.968554 0 2.16235ZM2.93341 3.93799C2.93341 3.44676 3.23072 3.16565 3.70569 3.16565C3.9995 3.16565 15.5601 10.4911 16.2604 10.9208L18.0697 12.046C18.6433 11.6616 19.2194 11.333 19.8139 10.9347C21.0275 10.159 31.8252 3.16565 32.1225 3.16565C32.5986 3.16565 32.8947 3.44676 32.8947 3.93799C32.8947 4.45824 31.8925 4.97497 31.2399 5.37329C27.1394 7.87239 23.04 10.5967 18.9801 13.1887C18.7432 13.349 18.2845 13.6917 17.9408 13.6394C17.5575 13.5802 5.79367 6.02239 3.65341 4.76355C3.33173 4.57426 2.93341 4.40134 2.93341 3.93799Z" fill={fill} />
      </svg>
    ),
    Address: (
      <svg width="23" height="23" viewBox="0 0 272 272" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M224.53 1H47.5C21.8188 1 1 21.8188 1 47.5V224.53C1 250.211 21.8188 271.03 47.5 271.03H224.53C250.211 271.03 271.03 250.211 271.03 224.53V47.5C271.03 21.8188 250.211 1 224.53 1Z" fill={fill} stroke="white" strokeMiterlimit="10" />
        <path d="M138.12 220.63L92.79 143.39C87.8341 133.895 85.3466 123.305 85.5563 112.597C85.766 101.888 88.6662 91.404 93.99 82.11C103.33 65.95 118.59 56.32 135.85 55.69C136.51 55.69 137.18 55.69 137.85 55.69C146.304 55.6833 154.641 57.6741 162.18 61.5C174.8 67.85 184.07 79.5 188.26 94.21C190.546 102.112 191.172 110.401 190.1 118.556C189.028 126.712 186.28 134.558 182.03 141.6L138.12 220.63ZM98.07 140.5L137.98 208.5L176.88 138.5C180.715 132.157 183.195 125.088 184.162 117.739C185.129 110.389 184.563 102.92 182.5 95.8C178.77 82.69 170.6 72.4 159.5 66.8C152.798 63.3967 145.386 61.6285 137.87 61.64C137.27 61.64 136.68 61.64 136.09 61.64C120.94 62.2 107.49 70.74 99.2 85.08C94.3824 93.4828 91.7541 102.962 91.5566 112.646C91.3592 122.33 93.5989 131.908 98.07 140.5V140.5Z" fill="white" />
        <path d="M138.05 137.3C133.55 137.3 129.152 135.966 125.411 133.466C121.67 130.966 118.754 127.413 117.032 123.256C115.31 119.099 114.859 114.525 115.737 110.112C116.615 105.699 118.782 101.645 121.963 98.4633C125.145 95.2817 129.199 93.1149 133.612 92.2371C138.025 91.3593 142.599 91.8098 146.756 93.5317C150.913 95.2536 154.466 98.1696 156.966 101.911C159.466 105.652 160.8 110.05 160.8 114.55C160.795 120.582 158.396 126.366 154.131 130.631C149.866 134.896 144.082 137.295 138.05 137.3V137.3ZM138.05 97.8C134.737 97.8 131.499 98.7824 128.744 100.623C125.99 102.463 123.843 105.079 122.575 108.14C121.307 111.201 120.976 114.569 121.622 117.818C122.268 121.067 123.863 124.052 126.206 126.394C128.548 128.737 131.533 130.332 134.782 130.978C138.031 131.624 141.399 131.293 144.46 130.025C147.521 128.757 150.137 126.61 151.977 123.856C153.818 121.101 154.8 117.863 154.8 114.55C154.792 110.11 153.025 105.854 149.885 102.715C146.746 99.5752 142.49 97.8079 138.05 97.8V97.8Z" fill="white" />
      </svg>
    ),
    Star: (
      <svg width="25" height="25" viewBox="0 0 22 22" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <path d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    )
  }
  if (icons[name] === undefined) {
    console.log(`SvgIcon: ${name} is not defined`);
    throw new Error(`SvgIcon: ${name} is not defined`);
  }
  return (icons[name]);
}