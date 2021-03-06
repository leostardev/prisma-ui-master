import React from 'react';

import SvgIcon from '@material-ui/core/SvgIcon';

export default class InfoIcon extends React.Component {
  render() {
    return (
      <SvgIcon>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330">
          <path d="M165 0C74.02 0 0 74.02 0 165c0 90.982 74.02 165 165 165s165-74.018 165-165C330 74.02 255.98 0 165 0zm0 300c-74.44 0-135-60.56-135-135C30 90.563 90.56 30 165 30s135 60.562 135 135c0 74.44-60.56 135-135 135z" />
          <path d="M164.998 70c-11.026 0-19.996 8.976-19.996 20.01 0 11.022 8.97 19.99 19.996 19.99 11.026 0 19.996-8.968 19.996-19.99 0-11.034-8.97-20.01-19.996-20.01zm.002 70c-8.284 0-15 6.716-15 15v90c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15v-90c0-8.284-6.716-15-15-15z" />
        </svg>
      </SvgIcon>
    );
  }
}
