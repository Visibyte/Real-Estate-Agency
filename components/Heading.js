import React from 'react'
import { GetFontSizeForHeading, GetTextAlign } from '@/utils/Fonts';

/*
*
* If the heading level is not specified, default to heading 2
* The default heading level can be overridden in the paramater below
*
*/
const Heading = ({ textAlign, content, level = 2 }) => {
    const tag = React.createElement(`h${level}`, {
        dangerouslySetInnerHTML: { __html: content },
        className: `font-heading max-w-5xl mx-auto my-5 ${GetFontSizeForHeading(level)} ${GetTextAlign(textAlign)}`,

    })
    return tag;
}

export default Heading