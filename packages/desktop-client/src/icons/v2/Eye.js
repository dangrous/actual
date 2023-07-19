import * as React from 'react';

const SvgEye = props => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      color: '#242134',
      ...props.style,
    }}
  >
    <path
      style={{
        fill: 'none',
        strokeWidth: 1.5,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        stroke: 'rgb(0%,0%,0%)',
        strokeOpacity: 1,
        strokeMiterlimit: 4,
      }}
      d="M 18.50179 12.712077 C 18.50179 15.080241 15.364583 17.000814 11.499023 17.000814 C 7.633464 17.000814 4.500326 15.080241 4.500326 12.712077 C 4.500326 10.347982 7.633464 8.427409 11.499023 8.427409 C 15.364583 8.427409 18.50179 10.347982 18.50179 12.712077 Z M 18.50179 12.712077"
      transform="matrix(0.96,0,0,0.96,1,0.48)"
      fill="currentColor"
    />
    <path
      style={{
        fill: 'none',
        strokeWidth: 1.5,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        stroke: 'rgb(0%,0%,0%)',
        strokeOpacity: 1,
        strokeMiterlimit: 4,
      }}
      d="M 13.248698 12.712077 C 13.264974 13.424154 12.845866 14.075195 12.194824 14.355957 C 11.543783 14.636719 10.782878 14.498372 10.274251 14.001953 C 9.769694 13.501465 9.611003 12.748698 9.879557 12.089518 C 10.148112 11.430339 10.791016 10.999023 11.499023 10.999023 C 11.958822 10.994954 12.402344 11.173991 12.731934 11.495443 C 13.057454 11.816895 13.244629 12.256348 13.248698 12.712077 Z M 13.248698 12.712077"
      transform="matrix(0.96,0,0,0.96,1,0.48)"
      fill="currentColor"
    />
    <path
      style={{
        stroke: 'none',
        fillRule: 'nonzero',
        fill: 'rgb(0%,0%,0%)',
        fillOpacity: 1,
      }}
      d="M 10.320312 8.570312 C 10.320312 8.96875 10.640625 9.292969 11.039062 9.292969 C 11.4375 9.292969 11.761719 8.96875 11.761719 8.570312 Z M 11.761719 5.28125 C 11.761719 4.882812 11.4375 4.558594 11.039062 4.558594 C 10.640625 4.558594 10.320312 4.882812 10.320312 5.28125 Z M 17.5625 7.253906 C 17.742188 6.898438 17.601562 6.464844 17.246094 6.285156 C 16.894531 6.101562 16.460938 6.242188 16.277344 6.597656 Z M 14.898438 9.304688 C 14.71875 9.65625 14.859375 10.089844 15.214844 10.273438 C 15.566406 10.453125 16 10.3125 16.183594 9.957031 Z M 5.800781 6.597656 C 5.621094 6.242188 5.1875 6.101562 4.832031 6.285156 C 4.480469 6.464844 4.339844 6.898438 4.519531 7.253906 Z M 5.898438 9.957031 C 6.078125 10.3125 6.511719 10.453125 6.867188 10.273438 C 7.222656 10.089844 7.363281 9.65625 7.179688 9.304688 Z M 11.761719 8.570312 L 11.761719 5.28125 L 10.320312 5.28125 L 10.320312 8.570312 Z M 16.277344 6.597656 L 14.898438 9.304688 L 16.183594 9.957031 L 17.5625 7.253906 Z M 4.519531 7.253906 L 5.898438 9.957031 L 7.179688 9.304688 L 5.800781 6.597656 Z M 4.519531 7.253906"
      transform="translate(1)"
      fill="currentColor"
    />
  </svg>
);

export default SvgEye;