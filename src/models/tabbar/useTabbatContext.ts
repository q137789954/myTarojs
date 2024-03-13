import { useContext } from "react";
import { Context } from './index';

const useTabbatContext = () => {

    return useContext(Context);
}

export default useTabbatContext;