import { NextRouter } from 'next/router';

export const contentTypeSelector = (router: NextRouter): string => {
    const path = router.pathname,
        pathSafe = path.replace(/^./, '').split('/'),
        selection = pathSafe[0] == 'show' ? 'show' : 'movie';

    return selection;
};
