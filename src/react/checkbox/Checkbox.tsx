import type { ComponentPropsWithoutRef, ReactElement, Ref } from 'react';
import { forwardRef } from 'react';
import React from 'react';

const Checkbox = (props: ComponentPropsWithoutRef<'div'>, ref: Ref<HTMLDivElement>) => {
  return (
    <div {...props} ref={ref}>
      Checkbox
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const _Checkbox = forwardRef(Checkbox) as (props: ComponentPropsWithoutRef<'div'>) => ReactElement;
export { _Checkbox as Checkbox };
