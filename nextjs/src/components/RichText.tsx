import {
  RichText as SitecoreRichText,
  Field,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type RichTextProps = ComponentProps & {
  fields: {
    Text: Field<string>;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const RichText = ({ fields, rendering, params }: RichTextProps): JSX.Element => (
  <div className="richText">
    <SitecoreRichText fields={fields} rendering={rendering} params={params} />
  </div>
);

export default withDatasourceCheck()<RichTextProps>(RichText);
