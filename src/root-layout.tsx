// RootLayout
'use strict';
import { ReactNode } from 'react';

import 'tailwindcss/tailwind.css';

const RootLayout = (props: RootLayout.Props) => {
    const { children } = props;
    
    return (
        <div>
            { children }
        </div>
    );
};

namespace RootLayout {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    RootLayout
};
