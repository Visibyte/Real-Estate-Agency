import { theme } from "@/theme"
import Cover from "./Cover"
import Heading from "./Heading"
import Paragraph from "./Paragraph"

const BlockRenderer = ({ blocks }) => {
    return blocks.map(block => {
        switch (block.name) {
            case 'core/cover': {
                return <Cover key={block.id} background={block.attributes.url}>
                    <BlockRenderer blocks={block.innerBlocks} />
                </Cover>
            }
            case 'core/heading': {
                return <Heading key={block.id} level={block.attributes.level} content={block.attributes.content} textAlign={block.attributes.textAlign}>core cover</Heading>
            }
            case 'core/paragraph': {
                return <Paragraph key={block.id} content={block.attributes.content} textAlign={block.attributes.align} textColor={theme[block.attributes.textColor] || block.attributes.style?.color?.text}>core cover</Paragraph>
            }
            default:
                return null
        }
    })
}

export default BlockRenderer