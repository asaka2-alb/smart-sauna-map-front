import React from 'react';
import styled from 'styled-components';

export default function Logo() {
  const ResponsiveCopyright = styled.footer`
    color: #FFFFFF;
    font-size: 18px;
    line-height: 1.6;
    margin: 16px 0;
  `;

  return (
    <div>
      <ResponsiveCopyright>
        © 2022-2023 Taisei Watanabe, Shohei Iida. All Rights Reserved.
      </ResponsiveCopyright>
    </div>
  );
}
