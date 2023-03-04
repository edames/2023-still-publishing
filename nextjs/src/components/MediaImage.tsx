import {
  Image,
  ImageField,
  LinkField,
  RichText as SitecoreRichText,
  RichTextField,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type ImageProps = ComponentProps & {
  fields: {
    Image: ImageField;
    TargetUrl: LinkField;
    ImageCaption: RichTextField;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */

//const Image = (props: ImageProps): JSX.Element => (
const MediaImage: React.FC<ImageProps> = (props) => {
  console.log('test');
  console.log(props.fields.Image.value?.src);
  return (
    <div className="image">
      <Image field={props.fields.Image} />
      <SitecoreRichText field={props.fields.ImageCaption} />
    </div>  
  );
};

export default withDatasourceCheck()<ImageProps>(MediaImage);
