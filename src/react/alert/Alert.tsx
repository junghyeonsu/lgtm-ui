import type { ComponentPropsWithoutRef, ReactElement, Ref } from 'react';
import { forwardRef } from 'react';
import React from 'react';

const Alert = (props: ComponentPropsWithoutRef<'div'>, ref: Ref<HTMLDivElement>) => {
  return (
    <div {...props} ref={ref}>
      Alert
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const _Alert = forwardRef(Alert) as (props: ComponentPropsWithoutRef<'div'>) => ReactElement;
export { _Alert as Alert };
