import React, { useState } from 'react';

export const useToggleButtom = () => {
  const [btnActive1, setBtnActive1] = useState(true);
  const [btnActive2, setBtnActive2] = useState(true);
  const [btnActive3, setBtnActive3] = useState(true);

  const desactive = (state) => {
    switch (state) {
      case 1:
        setBtnActive1(!btnActive1);
        setBtnActive2(btnActive2);
        setBtnActive3(btnActive3);
        break;
      case 2:
        setBtnActive2(!btnActive2);
        setBtnActive1(btnActive1);
        setBtnActive3(btnActive3);
        break;
      case 3:
        setBtnActive3(!btnActive3);
        setBtnActive1(btnActive1);
        setBtnActive2(btnActive2);
        break;

      default:
        break;
    }
  };

  return {
    desactive,
    btnActive1,
    btnActive2,
    btnActive3,
  };
};
