import React from 'react';
import {View} from 'react-native';

export default function App() {
  React.useEffect(() => {
    const staticString = 'abc#de##';
    const result = reverseString(staticString);

    console.log(result);
  });

  const CheckSpecialChar = pointerChar => pointerChar === '#';

  const reverseString = stringData => {
    const stringArary = stringData.split('');

    for (let i = 0, j = stringArary.length - 1; i < j; ) {
      if (
        !CheckSpecialChar(stringArary[i]) &&
        !CheckSpecialChar(stringArary[j])
      ) {
        const temp = stringArary[i];
        stringArary[i] = stringArary[j];
        stringArary[j] = temp;
        i++;
        j--;
      } else if (CheckSpecialChar(stringArary[i])) {
        i++;
      } else if (CheckSpecialChar(stringArary[j])) {
        j--;
      }
    }
    // console.log('stringArary==>', stringArary);
    return stringArary.join('');
  };

  return <View />;
}
