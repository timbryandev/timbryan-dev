/* C/O https://usehooks-ts.com/react-hook/use-isomorphic-layout-effect */
import { isBrowser } from '../utils/environment';
import { useEffect, useLayoutEffect } from 'react';

const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
