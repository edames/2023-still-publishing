import {
  Text,
  withSitecoreContext,
  ComponentConsumerProps,
  Field,
} from '@sitecore-jss/sitecore-jss-nextjs';

type TitleProps = ComponentConsumerProps & {
  fields: {
    data: {
      contextItem: {
        field: {
          jsonValue: Field<string>;
        }
      }
    }
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const Title: React.FC<TitleProps> = ({ fields }) => {
  return (
    <div className="titleBlock">
      <Text tag="h2" className="contentTitle" field={fields.data.contextItem.field.jsonValue} />
    </div>
  );
};

export default withSitecoreContext()(Title);
