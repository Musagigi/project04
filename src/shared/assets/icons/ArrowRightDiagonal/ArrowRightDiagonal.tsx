import type { SVGProps } from 'react';

const ArrowRightDiagonal = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.46967 8.46976C0.176777 8.76265 0.176777 9.23753 0.46967 9.53042C0.762563 9.82331 1.23744 9.82331 1.53033 9.53042L0.46967 8.46976ZM9.75 1.00009C9.75 0.585878 9.41421 0.250092 9 0.250092H2.25C1.83579 0.250092 1.5 0.585878 1.5 1.00009C1.5 1.41431 1.83579 1.75009 2.25 1.75009H8.25V7.75009C8.25 8.16431 8.58579 8.50009 9 8.50009C9.41421 8.50009 9.75 8.16431 9.75 7.75009V1.00009ZM1.53033 9.53042L9.53033 1.53042L8.46967 0.469761L0.46967 8.46976L1.53033 9.53042Z"
        fill="white"
      />
    </svg>
  );
};

export default ArrowRightDiagonal;
