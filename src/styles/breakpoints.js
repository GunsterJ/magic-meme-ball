export const size = {
   mobile: 0,
   tablet: 480,
   laptop: 1024,
   desktop: 2560
}

export const device = {
   mobile: `(max-width: ${size.tablet.toString() + 'px'})`,
   tablet: `(min-width: ${size.mobile.toString() + 'px'}) and (max-width: ${size.laptop.toString() + 'px'})`,
   laptop: `(min-width: ${size.tablet.toString() + 'px'}) and (max-width: ${size.desktop.toString() + 'px'})`,
   desktop: `(min-width: ${size.desktop.toString() + 'px'})`
}