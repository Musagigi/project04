import type { SVGProps } from 'react';

const VectorHorizontal = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="2"
      viewBox="0 0 24 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.47827 1H23"
        stroke="#FF5900"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default VectorHorizontal;
