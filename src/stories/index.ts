export const onClick = () =>  
    'ontouchstart' in window && !('ontouchmove' in window)
        ? 'touchend'
        : 'click';

export const onBeforeUnload = () => 
    ( /iPhone/i.test(navigator.userAgent) )
        ? 'pagehide'
        : 'beforeunload';
        
export function SORT_BY_STRING(items, sortBy) {
    items.sort((a, b) => {
        const nameA = a[sortBy].toUpperCase(); // ignore upper and lowercase
        const nameB = b[sortBy].toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    })
}

export const socialMediaChannels = (socialMedia: any) => {
    const keys = Object.keys(socialMedia);
    return keys.map(key => {
        return {
            icon: key === 'other_url' ? 'social-icons__item-other-url' : '',
            link: socialMedia[key]
        }
    })
}
export const onShowSocialMedia = (ev: any) => {
    const socialMediaContainer = ev.target.nextElementSibling.classList;
    if (socialMediaContainer.contains('!hidden')) {
        const openContainers = document.getElementsByClassName('js-ellipsis-more-options');
        Array.from(openContainers).forEach((el:any) => {
            if (!el.classList.contains('!hidden')) {
                el.classList.add('!hidden')
            }
        })
        setTimeout(() => socialMediaContainer.remove('!hidden') ,100)
    } else {
        socialMediaContainer.add('!hidden')
    }
}