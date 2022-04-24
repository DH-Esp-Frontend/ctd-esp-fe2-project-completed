import { useState } from 'react';

const useDisclosure = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const onOpen = () => setValue((value) => !value);

  return { isOpen: value, onOpen };
};

export default useDisclosure;
