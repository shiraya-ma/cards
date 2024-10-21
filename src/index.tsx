'use strict';
import { createRoot } from 'react-dom/client';
import { RootLayout } from './root-layout';

createRoot(document.querySelector('div#root')!).render(
    <RootLayout>
    </RootLayout>
);
