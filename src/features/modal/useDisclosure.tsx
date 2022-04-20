import { useState } from 'react';

const useDisclosure = (initalValue = false) => {
  const [value, setValue] = useState(initalValue);

  const onOpen = () => setValue((value) => !value);

  return { isOpen: value, onOpen };
};

export default useDisclosure;
