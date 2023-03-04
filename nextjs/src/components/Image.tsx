import {
  Image as SitecoreImage,
  ImageField,
  withDatasourceCheck
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type ImageProps = ComponentProps & {
  fields: {
    Image: ImageField;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const Image = ({ fields, rendering, params }: ImageProps): JSX.Element => (
  <div className="image">
    <SitecoreImage fields={fields} rendering={rendering} params={params} />
  </div>
);

export default withDatasourceCheck()<ImageProps>(Image);
