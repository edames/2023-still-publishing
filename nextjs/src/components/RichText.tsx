import {
  RichText as SitecoreRichText,
  withDatasourceCheck,
  RichTextField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type RichTextProps = ComponentProps & {
  fields: {
    Text: RichTextField;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const RichText: React.FC<RichTextProps> = (props) => {
  return (
    <div className="richText">
      <SitecoreRichText field={props.fields.Text} />
    </div>
  );
};

export default withDatasourceCheck()<RichTextProps>(RichText);
