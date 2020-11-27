import * as React from 'react';
import { useState } from 'react';

interface IContext {
  userAnswers: [];
  setUserAnswers?: any;
}

const initialState: IContext = {
  userAnswers: [],
};
// tslint:disable-next-line: variable-name
export const ApplicationContext = React.createContext<IContext>(initialState);

// tslint:disable-next-line: variable-name


function Context({ children }: any) {
  const [userAnswers, setUserAnswers] = useState<[]>([]);

  const context = {
    userAnswers,
    setUserAnswers,
  };
  return (
    <ApplicationContext.Provider value={context}>
      {children}
    </ApplicationContext.Provider>
  );
}

export default Context;
